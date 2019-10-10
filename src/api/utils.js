import { string } from "prop-types";
//URL解析
function parseUrl(url) {
  const params = {};
  if (url) {
    let search = "";
    if (url.indexOf("?") > -1) {
      search = url.split("?")[1];
    }
    const paramsArr = search.split("&");
    for (let i = 0; i < paramsArr.length; i++) {
      const param = paramsArr[i].split("=");
      params[param[0]] = param[1];
    }
  }
  return params;
}
//判断是否是PC设备
function isPC() {
  var ua = window.navigator.userAgent.toLowerCase();
  var isPC = !/Android|iPhone|SymbianOS|Windows\s+Phone|iPad|iPod|XiaoMi\/MiuiBrowser/i.test(
    ua
  );
  return isPC;
}

export { parseUrl, isPC };
//判断是否是IOS设备
export function isIOS() {
  var u = navigator.userAgent;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  return isIOS;
}
//获取操作系统版本
export function getOsVersion() {
  var u = navigator.userAgent,
    version = "";
  if (u.indexOf("Mac OS X") > -1) {
    // ios
    var regStr_saf = /OS [\d._]*/gi;
    var verinfo = u.match(regStr_saf);
    version =
      "IOS" + (verinfo + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
  } else if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    // android
    version =
      "Android" +
      " " +
      u.substr(
        u.indexOf("Android") + 8,
        u.indexOf(";", u.indexOf("Android")) - u.indexOf("Android") - 8
      );
  } else if (u.indexOf("BB10") > -1) {
    // 黑莓bb10系统
    version =
      "blackberry" +
      u.substr(
        u.indexOf("BB10") + 5,
        u.indexOf(";", u.indexOf("BB10")) - u.indexOf("BB10") - 5
      );
  } else if (u.indexOf("IEMobile") > -1) {
    // windows phone
    version =
      "winphone" +
      u.substr(
        u.indexOf("IEMobile") + 9,
        u.indexOf(";", u.indexOf("IEMobile")) - u.indexOf("IEMobile") - 9
      );
  } else {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("windows nt 5.0") > -1) {
      version = "Windows 2000";
    } else if (
      userAgent.indexOf("windows nt 5.1") > -1 ||
      userAgent.indexOf("windows nt 5.2") > -1
    ) {
      version = "Windows XP";
    } else if (userAgent.indexOf("windows nt 6.0") > -1) {
      version = "Windows Vista";
    } else if (
      userAgent.indexOf("windows nt 6.1") > -1 ||
      userAgent.indexOf("windows 7") > -1
    ) {
      version = "Windows 7";
    } else if (
      userAgent.indexOf("windows nt 6.2") > -1 ||
      userAgent.indexOf("windows 8") > -1
    ) {
      version = "Windows 8";
    } else if (userAgent.indexOf("windows nt 6.3") > -1) {
      version = "Windows 8.1";
    } else if (
      userAgent.indexOf("windows nt 6.2") > -1 ||
      userAgent.indexOf("windows nt 10.0") > -1
    ) {
      version = "Windows 10";
    } else {
      version = "Unknown";
    }
  }
  return version;
}
//获取网络连接类型
export function getNetworkInfo() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  // console.log(navigator);
  const type = connection.effectiveType;
  return type;
}
export function getParams(name) {
  if (typeof window != "undefined") {
    const url = window.location.search,
      reg = new RegExp("[\\?&]" + name + "=([^&]*)"),
      v = url.match(reg);
    return v === null ? null : v[1];
  } else {
    return;
  }
}
//获取设备
export function getSystem() {
  if (typeof navigator != "undefined") {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    userAgent = userAgent.toLowerCase();
    if (/ipad|iphone|ipod/i.test(userAgent) && !window.MSStream) {
      return "ios";
    } else {
      return "android";
    }
  }
}
