import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Paintings from './paintings/Paintings';

export default function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/peintures" component={Paintings} />
            </Switch>
        </main>
    )
}