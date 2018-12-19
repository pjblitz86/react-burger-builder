import axios from "axios";

const instance = axios.create({
  baseURL: "https://pj-burger-builder.firebaseio.com/"
});

export default instance;
