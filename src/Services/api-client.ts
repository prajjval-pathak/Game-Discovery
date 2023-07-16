import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {

    key: "87500a509c1e48bb85e2602e63e69343",
  },
});
