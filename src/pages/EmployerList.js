import React from 'react';
import EmployerService from '../services/employerService';

const EmployerList = () => {
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService();
        employerService
          .getall()
          .then((response) => setEmployers(response.data.data));
      }, []);



    return (
        <div>
            <h3>Job Seeker List</h3>
      
        </div>
    );
};

export default EmployerList;