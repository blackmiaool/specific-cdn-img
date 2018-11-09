# 图片操作库

### 支持的图片链接类型
形如:

https://example.com/app/shop/img?id=shop_3a17d0497ffa7281ceb53b387f82da52.png&w=200&h=200

https://example.com/16a55632e87a32d8104eba0ca7c32cbc.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF

### 安装

``` bash
npm i -S specific-cdn-img
```

### 用法

``` javascript
import SpecificCdnImg from "specific-cdn-img";
SpecificCdnImg.modeChecker=function(url,a){
    if (a.host==="a.com") {
        return "kingsoft";
    } else if (a.host==="b.com") {
        return  "standard";
    }
}
const url = SpecificCdnImg(
    "https://example.com/16a55632e87a32d8104eba0ca7c32cbc.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
).setWebp().resize({ w: 100, h: 200 }).url;
```

### api

#### setWebp
让图片变成webp格式
参数：无   
返回：SpecificCdnImg实例

#### resize
修改图片尺寸
参数：{w,h}   
返回：SpecificCdnImg实例

#### getSize
获取图片尺寸
参数：无   
返回：{w:h}
图片上不含尺寸时，返回
```javascript
{w : undefined, h : undefined }
```
还有其他api，不建议用户直接使用，详见源码