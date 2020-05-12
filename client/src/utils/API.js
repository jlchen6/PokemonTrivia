import axios from "axios";

export default {
    isUserLoggedIn: () =>
    axios.get("/auth/status")
        .then (res => res.data)
};