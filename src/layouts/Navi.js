import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

const Navi = () =>
{
    return (
        <div>
            
            <Menu inverted fixed="top" size="large">
                <Container>
                <Menu.Item
                    name="home"

                />
                <Menu.Item
                    name="Ilanlar"

                />

                <Menu.Menu position="right">
                    {/* <Dropdown item text="Language">
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
};

export default Navi;
