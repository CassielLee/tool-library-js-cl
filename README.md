This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### 项目启动方式
    1、git clone
    2、npm install
    3、npm start / yarn start
### 工具函数路径
    /src/api
### 引入方式
    import {xxx} from '/tool-library-cl-js/src/api/xxx'
### 工具函数
    1、array.js
        isEmpty:判断数组是否为空
        unique：数组去重
    2、date.js
        time:转换为毫秒的时间戳
        format：时间格式化
        formatSecond：秒数格式化
    3、loadScript.js
        loadScript：异步加载页面脚本
    4、object.js
        isObject：判断是否是对象
        deepReplaceVal：深度替换
        isEmpty：判断对象是否为空
        multiToOne：{a: {b: 1}} => {'a.b': 1}
    5、string.js
        isString：判断是否是字符串
        trimEnter：删除字符串两端的换行
        omit：省略字符串
        shield：屏蔽指定位置的字符串
    6、url.js
        expSearch：解析URL中的查询字段
    7、utils.js
        parseUrl：解析URL
        isPC：判断是否是PC设备
        isIOS：判断是否是IOS设备
        getOsVersion：获取操作系统版本
        getNetworkInfo：获取网络连接类型
        getSystem：获取系统类型(Android | IOS)
        

