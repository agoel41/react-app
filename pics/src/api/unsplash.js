import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID jyJlSKmidA4PV4ioD1gLClFEY5p1nq5k7iSMhJ5ygEg"
  }
});
