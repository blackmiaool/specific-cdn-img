import SpecificCdnImg from "../index.js";
SpecificCdnImg.modeChecker = function(url, a) {
    if (a.host === "examplek.com") {
        return "kingsoft";
    } else if (a.host === "examples.com") {
        return "standard";
    }
};
const chai = require("chai");

const expect = chai.expect;

chai.should();

function addHash(url, hash) {
    return `${url}#${hash}`;
}
describe("standard mode", function() {
    const testSizeW = 500;
    const testSizeH = 800;
    const urlWithoutSize =
        "https://examples.com/app/shop/img?id=shop_b547304e56c54089601373e3840c0710.jpeg";
    const urlWithSize = `${urlWithoutSize}&w=${testSizeW}&h=${testSizeH}`;

    const hash = "bbbccc/dddeee";
    it("it should be created", function(done) {
        SpecificCdnImg(urlWithSize);
        done();
    });
    it("it can be resized", function(done) {
        SpecificCdnImg(urlWithoutSize)
            .resize({ w: 100, h: 200 })
            .url.should.equal(`${urlWithoutSize}&w=100&h=200`);
        SpecificCdnImg(urlWithSize)
            .resize({ w: 100, h: 200 })
            .url.should.equal(`${urlWithoutSize}&w=100&h=200`);
        SpecificCdnImg(addHash(urlWithoutSize, hash))
            .resize({ w: 100, h: 200 })
            .url.should.equal(addHash(`${urlWithoutSize}&w=100&h=200`, hash));
        SpecificCdnImg(addHash(urlWithSize, hash))
            .resize({ w: 100, h: 200 })
            .url.should.equal(addHash(`${urlWithoutSize}&w=100&h=200`, hash));
        done();
    });
    it("we can get its size", function(done) {
        SpecificCdnImg(urlWithoutSize)
            .getSize()
            .should.deep.equal({
                w: NaN,
                h: NaN
            });
        SpecificCdnImg(urlWithSize)
            .getSize()
            .should.deep.equal({
                w: testSizeW,
                h: testSizeH
            });
        done();
    });
    it("we can make it webp", function(done) {
        SpecificCdnImg(urlWithSize)
            .setWebp()
            .url.should.equal(urlWithSize + "&t=webp");
        done();
    });
});

describe("kingsoft mode", function() {
    const testSizeW = 540;
    const testSizeH = 846;
    const coreUrl = `examplek.com/800_pic/6b5d945739be9da56980a39efb209574.png`;
    const urlWithoutSize = `//${coreUrl}`;    
    const no800url = `//examplek.com/801_pic/6b5d945739be9da56980a39efb209574.png`;
    const urlWithSize = `//${coreUrl}@base@tag=imgScale&h=350&w=550&et=1&eth=${testSizeH}&etw=${testSizeW}&etc=FFFFFF`;

    const hash = "bbbccc/dddeee";
    it("it should be created", function(done) {
        SpecificCdnImg(urlWithSize);
        done();
    });
    it("it can be resized", function(done) {
        let result1 =
            "https://examplek.com/800_pic/6b5d945739be9da56980a39efb209574.png@base@tag=imgScale&h=200&w=100&eth=200&etw=100";
        let result2 =
            "https://examplek.com/800_pic/6b5d945739be9da56980a39efb209574.png@base@tag=imgScale&h=83&w=102&et=1&eth=200&etw=100&etc=FFFFFF";
        let result3=`https://examplek.com/801_pic/6b5d945739be9da56980a39efb209574.png@base@tag=imgScale&etw=100&eth=200`
        SpecificCdnImg(no800url)
            .resize({ w: 100, h: 200 })
            .url.should.equal(result3);
        SpecificCdnImg(urlWithoutSize)
            .resize({ w: 100, h: 200 })
            .url.should.equal(result1);
        SpecificCdnImg(urlWithSize)
            .resize({ w: 100, h: 200 })
            .url.should.equal(result2);
        SpecificCdnImg(addHash(urlWithoutSize, hash))
            .resize({ w: 100, h: 200 })
            .url.should.equal(addHash(result1, hash));
        SpecificCdnImg(addHash(urlWithSize, hash))
            .resize({ w: 100, h: 200 })
            .url.should.equal(addHash(result2, hash));
        done();
    });
    it("can handle 800_pic", function(done) {
        SpecificCdnImg(urlWithoutSize)
            .getSize()
            .should.deep.equal({
                w: 800,
                h: 800
            });
        done();
    });
    it("we can get its size", function(done) {
        SpecificCdnImg(urlWithoutSize)
            .getSize()
            .should.deep.equal({
                w: 800,
                h: 800
            });
        SpecificCdnImg(no800url)
            .getSize()
            .should.deep.equal({
                w: NaN,
                h: NaN
            });
        SpecificCdnImg(urlWithSize)
            .getSize()
            .should.deep.equal({
                w: testSizeW,
                h: testSizeH
            });
        done();
    });
    it("we can make it webp", function(done) {
        SpecificCdnImg(urlWithSize)
            .setWebp()
            .url.should.equal(
                `https://${coreUrl}@base@tag=imgScale&h=350&w=550&et=1&eth=${testSizeH}&etw=${testSizeW}&etc=FFFFFF&F=webp`
            );
        done();
    });
});
