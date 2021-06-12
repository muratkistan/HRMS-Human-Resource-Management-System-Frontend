import axios from 'axios'

export default class EducationService{
    findAllByJobSeekerId(jobSeekerId){
        return axios.get(`/api/1.0/education/findAllByJobSeekerId/${jobSeekerId}`)
    }
}