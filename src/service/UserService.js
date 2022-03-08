import axios from 'axios'

const REST_API_URL = 'http://localhost:8080/student/getAll';

class UserService{
    getUsers(){
       return axios.get(REST_API_URL);
    }
}

export default new UserService();