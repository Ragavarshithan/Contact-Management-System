// import axios from 'axios'

// const Contact_BASE_REST_API_URL = 'http://localhost:8080/contact';

// class ContactService{

//     getAllContact(){
//         return axios.get(Contact_BASE_REST_API_URL)
//     }

//     createEmployee(contact){
//         return axios.post(Contact_BASE_REST_API_URL, contact)
//     }

//     getEmployeeById(id){
//         return axios.get(Contact_BASE_REST_API_URL + '/' + id);
//     }

//     updateEmployee(id, contact){
//         return axios.put(Contact_BASE_REST_API_URL + '/' +id, contact);
//     }

//     deleteEmployee(id){
//         return axios.delete(Contact_BASE_REST_API_URL + '/' + id);
//     }
// }

// export default new ContactService();

import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    config.baseURL = "/contact/";
    config.headers.Authorization = `Bearer ${user?.token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default instance;
