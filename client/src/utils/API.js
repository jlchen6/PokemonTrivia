import axios from "axios";

export default {
    // Get a collection of random pokemon from database
    getRandom: function(count){
        return axios.get("/api/random/" + count);
    }
}