import axios from "axios";

export default {
    isUserLoggedIn: () => {
    return axios.get("/auth/status")
        .then (res => res.data)
    },

    // Get a collection of random pokemon from database
    getRandom: function(count){
        return axios.get("/api/pokemon/random/" + count);
    }
};
