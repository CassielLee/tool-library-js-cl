// import axios from "axios";
import fetch from "isomorphic-unfetch";
import request from "./request";

export const postRequest = (url, data = {}) => {
  return request(url, {
    method: "POST",
    dataType: "json",
    mode: "cors",
    body: {
      ...data
    }
  });
};

export const postRequest = url => {
  return request(url);
};
