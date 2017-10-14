import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

export default function Header() {
    const activeItem = 'home';

    return (
        <Segment>
            <Menu>
                <Menu.Item name='home' active={activeItem === 'home'}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item name='paintings' active={activeItem === 'paintings'}>
                    <Link to='/peintures'>Peintures</Link>
                </Menu.Item>
            </Menu>
        </Segment>
    )
}