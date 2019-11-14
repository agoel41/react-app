import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9612fa88d3b67449b37c2975ad740b36b791200d8ee038162a2d8f51e801cdce"
  }
});
