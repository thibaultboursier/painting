import React from 'react';
import { Route } from 'react-router-dom';

import PaintingDetail from './PaintingDetail';

export default class PaintingDetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { params } = this.props.match;
        const id = params.id;

        fetch('/mocks/paintings.json')
            .then(res => res.json())
            .then(paintings => paintings.find(painting => painting.id === id))
            .then(painting => this.setState({ painting }))
    }

    render() {
        return (
            <PaintingDetail {...this.state.painting} />
        )
    }
}