import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PaintingListContainer from './PaintingListContainer';
import PaintingDetail from './PaintingDetail';

export default function Paintings() {
    return (
        <Switch>
            <Route exact path="/peintures" component={PaintingListContainer} />
            <Route exact path="/peintures/:id" component={PaintingDetail} />
        </Switch>
    )
}