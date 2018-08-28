import URL from "url";

function parse(url) {
    const ret = URL.parse(url, true);
    delete ret.search;
    return ret;
}
class Mode {
    constructor(url, a, mode) {
        this.a = a;
        this.mode = mode;
    }
    get url() {
        return URL.format(this.a);
    }
    set url(value) {
        console.warn("u can't set its url");
    }
    setWebp() {
        return this;
    }
    getParam() {
        return "";
    }
    addParams() {
        return this;
    }
    getSize() {
        return { w: NaN, h: NaN };
    }
    resize() {
        return this;
    }
}
class StandardMode extends Mode {
    constructor(...props) {
        super(...props);
    }
    setWebp() {
        this.addParam("t", "webp");
        return this;
    }

    getParam(key) {
        return this.a.query[key];
    }
    addParams(map) {
        Object.assign(this.a.query, map);
        return this;
    }
    addParam(key, value) {
        this.a.query[key] = value;
        return this;
    }
    getSize() {
        return {
            w: this.getParam("w") * 1,
            h: this.getParam("h") * 1
        };
    }
    resize({ w, h }) {
        this.addParams({ w, h });
        return this;
    }
}
class KingSoftMode extends Mode {
    constructor(...props) {
        super(...props);
        if (this.url.match(/800_pic/) && !this.url.match(/@/)) {
            this.a.pathname += "@base@tag=imgScale&h=800&w=800&eth=800&etw=800";
            const handledUrl = this.url;
            this.a = parse(handledUrl);
        }
    }
    setWebp() {
        this.addParam("F", "webp");
        return this;
    }
    getParam(key) {
        return (this.a.pathname.match(new RegExp(`[?|&]${key}=(\\d+)`)) ||
            [])[1];
    }
    addParams(map) {
        this.addParam(undefined, undefined, map);
        return this;
    }
    addParam(key, value, map) {
        const action = (this.a.pathname.match(/@[\s\S]+?(&|$)/, "?") || [
            ""
        ])[0];
        let pathname = this.a.pathname;
        if (action) {
            pathname = pathname.replace(action, "?");
        }
        let paramsMap = map || { [key]: value };
        let pathnameObj = parse(pathname);
        Object.assign(pathnameObj.query, paramsMap);
        pathname = URL.format(pathnameObj);
        if (action) {
            pathname = pathname.replace("?", action);
        }
        this.a.pathname = pathname;
        return this;
    }
    getSize() {
        return {
            w: this.getParam("etw") * 1,
            h: this.getParam("eth") * 1
        };
    }
    resize({ w, h }) {
        let inner = {
            w: this.getParam("w"),
            h: this.getParam("h")
        };
        if (inner.w && inner.h) {
            let scalew = w / this.getParam("etw") || 1;
            let scaleh = h / this.getParam("eth") || 1;
            this.addParams({
                w: Math.round(scalew * inner.w),
                h: Math.round(scaleh * inner.h)
            });
        }
        this.addParams({
            etw: w,
            eth: h
        });
        return this;
    }
}
const modeMap = {
    standard: StandardMode,
    kingsoft: KingSoftMode
};
export default function YoupinImg(url) {
    url = URL.resolve("https://", url);
    const a = parse(url);
    if (!YoupinImg.modeChecker) {
        console.warn("mode checker is needed");
    }
    const mode = YoupinImg.modeChecker(url, a);
    if (!mode) {
        return new Mode(url, a, "");
    }

    return new modeMap[mode](url, a, mode);
}
