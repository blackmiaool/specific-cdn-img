import URL from 'url';

function parse(url){
    const ret=URL.parse(url,true);
    delete ret.search;
    return ret;
}
export default class YoupinImg {
    constructor(url) {    
        const base=typeof document==='undefined'?'https://':location.href;
        url=URL.resolve('https://',url);
        this.a = parse(url);
        if (url.match(/@base/)) {
            this.mode = "kingsoft";
        } else if (/app\/shop\/img\?/.test(url)) {
            this.mode = "standard";
        } else {
            this.mode = "unkown";
        }
    }
    get url(){
        return URL.format(this.a); 
    }
    set url(value){
        console.warn("u can't set its url");
    }
    setWebp() {
        switch (this.mode) {
            case "standard":
                this.standardAddParam('t','webp');
                break;
            case "kingsoft": {
                this.kingsoftAddParam('F','webp');
                break;
            }
        }
        return this;
    }
    resize({w, h}) {
        switch (this.mode) {
            case "standard":
                this.standardAddParams({ w, h });
                break;
            case "kingsoft": {
                let inner = {
                    w: this.kingsoftGetParam("w"),
                    h: this.kingsoftGetParam("h")
                };
                if (inner.w && inner.h) {
                    let scalew =w / this.kingsoftGetParam("etw")||1;
                    let scaleh=h / this.kingsoftGetParam("eth")||1;
                    this.kingsoftAddParams({
                        w: Math.round(scalew * inner.w),
                        h: Math.round(scaleh * inner.h)
                    });
                }
                this.kingsoftAddParams({
                    etw: w,
                    eth: h
                });

                break;
            }
        }
        return this;
    }
    getSize() {
        if (this.mode === "standard") {
            return {
                w: this.standardGetParam("w"),
                h: this.standardGetParam("h")
            };
        } else if (this.mode === "kingsoft") {
            return {
                w: this.kingsoftGetParam("etw"),
                h: this.kingsoftGetParam("eth")
            };
        }
    }
    standardGetParam(key) {        
        return this.a.query[key];        
    }
    kingsoftGetParam(key) {
        return (this.a.pathname.match(new RegExp(`[?|&]${key}=(\\d+)`)) ||
            [])[1];
    }
    standardAddParams(map) {
        Object.assign(this.a.query,map);
    }
    standardAddParam(key, value) {
        this.a.query[key]=value;
    }
    kingsoftAddParams(map) {
        this.kingsoftAddParam(undefined, undefined, map);
    }
    kingsoftAddParam(key, value, map) {
        
        const action = (this.a.pathname.match(/@[\s\S]+?(&|$)/, "?") || [""])[0];
        let pathname = this.a.pathname;
        if (action) {
            pathname = pathname.replace(action, "?");
        }
        let paramsMap = map || { [key]: value };
        let pathnameObj=parse(pathname);
        Object.assign(pathnameObj.query,paramsMap)
        pathname=URL.format(pathnameObj);        
        if (action) {
            pathname = pathname.replace("?", action);
        }
        this.a.pathname = pathname;
    }
}

