import axios from 'axios';


const apiManager = class ApiManager {

    constructor() {

        axios.defaults.baseURL = 'https://localhost:44353';
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("userToken") ?? "";
        axios.defaults.withCredentials = false;
        //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    getData = async (endpoint) => {
        try {
            let res = await axios.get(endpoint);
            return res?.data;
        } catch(ex) {
            return ex?.response?.data;
        }
    };
    postData = async (endpoint, data) => {
        try {
            let res = await axios.post(endpoint, data);
            return res?.data;
        } catch(ex) {
            return ex?.response?.data;
        }
    };
};

export default new apiManager();