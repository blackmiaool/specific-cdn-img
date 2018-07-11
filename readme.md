# 有品图片操作库

### 支持的图片链接类型
形如:

https://shop.io.mi-img.com/app/shop/img?id=shop_3a17d0497ffa7281ceb53b387f82da52.png&w=200&h=200

https://img.youpin.mi-img.com/800_pic/16a55632e87a32d8104eba0ca7c32cbc.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?w=350&h=350

### 安装

``` bash
npm i -S youpin-img
```

### 用法

``` javascript
import YoupinImg from "youpin-img";
const url = new YoupinImg(
    "https://img.youpin.mi-img.com/800_pic/16a55632e87a32d8104eba0ca7c32cbc.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
).setWebp().resize({ w: 100, h: 200 }).url;
```

### api

#### setWebp
让图片变成webp格式
参数：无
返回：YoupinImg实例

#### resize
修改图片尺寸
参数：{w,h}
返回：YoupinImg实例

#### getSize
获取图片尺寸
参数：无
返回：{w:h}
图片上不含尺寸时，返回
```javascript
{w : undefined, h : undefined }
```
还有其他api，不建议用户直接使用，详见源码