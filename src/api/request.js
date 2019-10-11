import fetch from "isomorphic-unfetch";
import qs from "qs";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  console.error(`请求错误 ${response.status}: ${response.url}`);

  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};
//解析返回的结果
const parseResult = response => {
  const contentType = response.headers.get("Content-Type");
  if (contentType != null) {
    if (contentType.indexOf("text") > -1) {
      if (contentType.indexOf("text/html") > -1) {
        return response.json();
      } else {
        return response.test();
      }
    }
    if (contentType.indexOf("form") > -1) {
      return response.formData();
    }
    if (contentType.indexOf("video") > -1) {
      return response.blob();
    }
    if (contentType.indexOf("json") > -1) {
      return response.json();
    }
  }
  return response.json();
};

export default function request(url, option) {
  const defaultOptions = {
    credentials: "include"
  };

  const newOptions = { ...defaultOptions, ...option };
  newOptions.headers = {
    Accept: "application/json",
    ...newOptions.headers
  };
  if (
    newOptions.method === "POST" ||
    newOptions.method === "PUT" ||
    newOptions.method === "DELETE"
  ) {
    if (newOptions.dataType === "json") {
      newOptions.headers["Content-Type"] = "application/json; charset=utf-8";
      newOptions.body = JSON.stringify(newOptions.body);
    } else if (newOptions.dataType === "formEncoded") {
      newOptions.headers["Content-Type"] = "application/x-www-form-urlencoded";
      newOptions.body = qs.stringify(newOptions.body);
    } else {
      newOptions.body = qs.stringify(newOptions.body);
    }
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => {
      console.log("---content-type---", response.headers.get("content-type"));
      console.log("---response.status---", response.status);
      if (
        newOptions.method === "DELETE" ||
        response.status === 204 ||
        newOptions.responseType === "text"
      ) {
        return response.text();
      }
      return parseResult(response);
    })
    .catch(e => {
      console.log("请求出错：", e);
    });
}
