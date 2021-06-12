import React from 'react';
import JobSeekerList from '../pages/JobSeekerList';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react'
import EducationList from '../pages/EducationList';



const Dashboard = () => {
    return (
        <div>
           <Grid>
               <Grid.Row>
                   <Grid.Column width={3}>
                        <Categories/>
                   </Grid.Column>
                   <Grid.Column width={13}>
                       <JobSeekerList/>
                       <EducationList/>
                    </Grid.Column>
               </Grid.Row>
           </Grid>
          
        
        </div>
    );
};

export default Dashboard;