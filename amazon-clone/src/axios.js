import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-93db3.cloudfunctions.net/api" //THE API(cloud function) URL
  // "http://localhost:5001/clone-93db3/us-central1/api" 
})

export default instance;