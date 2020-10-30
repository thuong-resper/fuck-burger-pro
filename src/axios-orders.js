import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-by-react-js.firebaseio.com/",
});

export default instance;
