//group all API calls
import axios from "axios";
const apiKey = "AIzaSyC7t6-fp_6DxP74ZGUNNVxlfGkfdPksrl8";


export default {
    searchYouTube: function(term){
        return axios.get("https://www.googleapis.com/youtube/v3/search",{
            params: {
                part: "snippet",
                q: term,
                type: "video",
                key: apiKey

            }
        })
    }
}