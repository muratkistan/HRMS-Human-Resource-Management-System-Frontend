import React, { useEffect, useState } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

const JobSeekerList = () => {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getall()
      .then((response) => setJobSeekers(response.data.data));
  }, []);

  return (
    <div>
      <h3>Job Seeker List</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adi</Table.HeaderCell>
            <Table.HeaderCell>Soyadi</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>TC</Table.HeaderCell>
            <Table.HeaderCell>Dogum Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => {
            return (
              <Table.Row key={jobSeeker.id}>
                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                <Table.Cell>{jobSeeker.email}</Table.Cell>
                <Table.Cell>{jobSeeker.identityNumber}</Table.Cell>
                <Table.Cell>{jobSeeker.birthYear}</Table.Cell>
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

export default JobSeekerList;
