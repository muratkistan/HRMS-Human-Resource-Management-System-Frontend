import axios from 'axios';

export default class EmployerService{
    getall(){
        return axios.get("/api/1.0/employer/getall")
    }
}