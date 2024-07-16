"use client";

import axios from "axios";

// export const API_URL = process.env.REACT_APP_API_URL;
export const API_URL = "http://127.0.0.1:8000";
const getToken = () => {
  if (typeof window !== "undefined") {
    const userToken = sessionStorage.getItem("token");
    // const userToken = JSON.parse(tokenString);
    return userToken;
  }
};
let token = getToken();
console.log(token);
const httpClient = axios.create({
  baseURL: API_URL,
  responseType: "json",
  timeout: 50000,
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  maxBodyLength: Infinity,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token ? `TOKEN ${token}` : null,
  },
});

export async function callApi(url, body, method = "post", config, headers) {
  return httpClient({
    method: method,
    url: url,
    data: body,
    headers: headers,
    ...config,
  });
}
