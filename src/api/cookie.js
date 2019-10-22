// 获取cookie
export function getCookie(name) {
  try {
    return document.cookie.match(
      new RegExp("(^" + name + "| " + name + ")=([^;]*)")
    ) == null
      ? ""
      : decodeURIComponent(RegExp.$2);
  } catch (e) {
    return document.cookie.match(
      new RegExp("(^" + name + "| " + name + ")=([^;]*)")
    ) == null
      ? ""
      : RegExp.$2;
  }
}

// 设置cookie
export function setCookie(name, value, expireMin, domain) {
  if (!domain) {
    domain = window.location.hostname.replace("www", "");
  }
  if (arguments.length > 2) {
    var expireTime = new Date(
      new Date().getTime() + parseInt(expireMin * 60 * 1000)
    );
    document.cookie =
      name +
      "=" +
      escape(value) +
      "; path=/; domain=" +
      domain +
      "; expires=" +
      expireTime.toGMTString();
  } else {
    document.cookie = name + "=" + escape(value) + "; path=/; domain=" + domain;
  }
}

// 删除某个cookie
export function removeCookie(name, path = "/", domain) {
  if (!name) return false;
  if (!domain) {
    domain = window.location.hostname.replace("www", "");
  }
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${domain}; path=${path}`;
}
