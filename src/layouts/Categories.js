import React from "react";
import { Menu } from "semantic-ui-react";

const Categories = () => {
  return (
    <div>
      <Menu  pointing vertical>
        <Menu.Item name="Job Seeker" />
        <Menu.Item name="Employer" />
        <Menu.Item name="Employee" />
      </Menu>
    </div>
  );
};

export default Categories;
