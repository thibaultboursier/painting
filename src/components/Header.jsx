import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/peintures'>Paintings</Link></li>
                </ul>
            </nav>
        </header>
    )
}