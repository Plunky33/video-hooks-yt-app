import axios from "axios";

const KEY = "AIzaSyCHCitXOHn4jBmtVDsQZgKJIr-QYCfkoAs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

// onTermSubmit = term => {
//     youtube.get("/search", {
//       params: {
//         q: term,
//         part: "snippet",
//         type: 'video',
//         maxResults: 5,
//         key: KEY
//       }
//     });
//   };
