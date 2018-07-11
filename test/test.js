import YoupinImg from "../dist/youpin-img.js";

const chai = require("chai");

const expect = chai.expect;

chai.should();

function addHash(url, hash) {
    return `${url}#${hash}`;
}
describe("standard mode", function() {
    const testSizeW = "500";
    const testSizeH = "800";
    const urlWithoutSize =
        "https://shop.io.mi-img.com/app/shop/img?id=shop_b547304e56c54089601373e3840c0710.jpeg";
    const urlWithSize = `${urlWithoutSize}&w=${testSizeW}&h=${testSizeH}`;

    const hash = "bbbccc/dddeee";
    it("it should be created", function(done) {
        new YoupinImg(urlWithSize);
        done();
    });
    it("it can be resized", function(done) {
        new YoupinImg(urlWithoutSize)
            .resize({ w: 100, h: 200 })
            .url.should.equal(`${urlWithoutSize}&w=100&h=200`);
        new YoupinImg(urlWithSize)
            .resize({ w: 100, h: 200 })
            .url.should.equal(`${urlWithoutSize}&w=100&h=200`);
        new YoupinImg(addHash(urlWithoutSize, hash))
            .resize({ w: 100, h: 200 })
            .url.should.equal(addHash(`${urlWithoutSize}&w=100&h=200`, hash));
        new YoupinImg(addHash(urlWithSize, hash))
            .resize({ w: 100, h: 200 })
            .url.should.equal(addHash(`${urlWithoutSize}&w=100&h=200`, hash));
        done();
    });
    it("we can get its size", function(done) {
        new YoupinImg(urlWithoutSize).getSize().should.deep.equal({
            w: undefined,
            h: undefined
        });
        new YoupinImg(urlWithSize).getSize().should.deep.equal({
            w: testSizeW,
            h: testSizeH
        });
        done();
    });
    it("we can make it webp", function(done) {
        new YoupinImg(urlWithSize)
            .setWebp()
            .url.should.equal(urlWithSize + "&t=webp");
        done();
    });
});

describe("kingsoft mode", function() {
    const testSizeW = "540";
    const testSizeH = "846";
    const coreUrl = `img.youpin.mi-img.com/800_pic/6b5d945739be9da56980a39efb209574.png`;
    const urlWithoutSize = `//${coreUrl}@base@tag=imgScale&et=1&etc=FFFFFF`;
    const urlWithSize = `//${coreUrl}@base@tag=imgScale&h=350&w=550&et=1&eth=${testSizeH}&etw=${testSizeW}&etc=FFFFFF`;

    const hash = "bbbccc/dddeee";
    it("it should be created", function(done) {
        new YoupinImg(urlWithSize);
        done();
    });
    it("it can be resized", function(done) {
        let result1 =
            "https://img.youpin.mi-img.com/800_pic/6b5d945739be9da56980a39efb209574.png@base@tag=imgScale&et=1&etc=FFFFFF&etw=100&eth=200";
        let result2 =
            "https://img.youpin.mi-img.com/800_pic/6b5d945739be9da56980a39efb209574.png@base@tag=imgScale&h=83&w=102&et=1&eth=200&etw=100&etc=FFFFFF";
        new YoupinImg(urlWithoutSize)
            .resize({ w: 100, h: 200 })
            .url.should.equal(result1);
        new YoupinImg(urlWithSize)
            .resize({ w: 100, h: 200 })
            .url.should.equal(result2);
        new YoupinImg(addHash(urlWithoutSize, hash))
            .resize({ w: 100, h: 200 })
            .url.should.equal(addHash(result1, hash));
        new YoupinImg(addHash(urlWithSize, hash))
            .resize({ w: 100, h: 200 })
            .url.should.equal(addHash(result2, hash));
        done();
    });
    it("we can get its size", function(done) {
        new YoupinImg(urlWithoutSize).getSize().should.deep.equal({
            w: undefined,
            h: undefined
        });
        new YoupinImg(urlWithSize).getSize().should.deep.equal({
            w: testSizeW,
            h: testSizeH
        });
        done();
    });
    it("we can make it webp", function(done) {
        new YoupinImg(urlWithSize)
            .setWebp()
            .url.should.equal(
                `https://${coreUrl}@base@tag=imgScale&h=350&w=550&et=1&eth=${testSizeH}&etw=${testSizeW}&etc=FFFFFF&F=webp`
            );
        done();
    });
});


