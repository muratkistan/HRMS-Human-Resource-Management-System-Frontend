import axios from 'axios';
export default class JobSeekerService{
    getall(){
        return axios.get("/api/1.0/jobseeker/getall")
    }
}