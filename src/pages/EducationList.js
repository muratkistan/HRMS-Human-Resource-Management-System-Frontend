import React, { useEffect, useState } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';
import EducationService from '../services/educationService';

const EducationList = () => {

    const [educations, setEducations] = useState([]);


    useEffect(() => {
        let educationService = new EducationService();
        educationService
          .findAllByJobSeekerId(1)
          .then((response) => setEducations(response.data.data));
      }, []);
    
    return (
        <div>
            <h3>Education List</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>School</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
            <Table.HeaderCell>Starting Date</Table.HeaderCell>
            <Table.HeaderCell>Leaving Date</Table.HeaderCell>
            <Table.HeaderCell>Mezuniyet</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {educations.map((education) => {
            return (
              <Table.Row key={education.id}>
                <Table.Cell>{education.schoolName}</Table.Cell>
                <Table.Cell>{education.departmentName}</Table.Cell>
                <Table.Cell>{education.startingDate}</Table.Cell>
                <Table.Cell>{education.leavingDate}</Table.Cell>
                <Table.Cell>{education.graduated ? "Mezun" : "Devam Ediyor"}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </div>
    );
};

export default EducationList;