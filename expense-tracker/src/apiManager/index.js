import axios from 'axios';


const apiManager = class ApiManager {

    constructor() {

        axios.defaults.baseURL = 'https://localhost:44353';
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("userToken") ?  `Bearer ${localStorage.getItem("userToken")}` :  "";
        axios.defaults.withCredentials = false;
        //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    setTokenInHeader = (token = "") => {
        axios.defaults.headers.common['Authorization'] = token ? `Bearer ${localStorage.getItem("userToken")}` :  "";;
    };

    handleException(ex) {
        if(ex?.response !== undefined && ex?.response !== null) {
            throw {
                isError: true,
                message: ex?.response?.data?.message ?? ex?.response?.data?.Message,
            }
            // don't touch this return.
            return;
        }
    
        if(ex?.message !== undefined && ex?.message !== null && ex?.message !== "") {
            throw {
                isError: true,
                message: ex?.message,
            }
    
            //don't touch this return.
            return;
        }
         
        return null;
    };

    wrapToMeamaResponse(axiosResponse) {
        if(axiosResponse.data.isError) throw new Error(axiosResponse.data.message);
        else return axiosResponse.data;
    };

    getData = async (endpoint) => {
        try {
            let res = await axios.get(endpoint);
            return this.wrapToMeamaResponse(res);
        } catch(ex) {
            return this.handleException(ex);
        }
    };
    postData = async (endpoint, data) => {
        try {
            let res = await axios.post(endpoint, data);
            return this.wrapToMeamaResponse(res);
        } catch(ex) {
            return this.handleException(ex);
        }
    };
};

export default new apiManager();