import axios from "axios";

export const api = axios.create({
  baseURL: "",
  //example baseURL: "http://192.168.1.10:3333",
  //cmd: ipconfig
});
