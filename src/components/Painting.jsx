import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

class Painting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, url } = this.props;

        return (
            <Card style={{ width: '350px' }}>
                <CardMedia
                    aspectRatio="wide"
                    image={url}
                />
                <CardTitle
                    title={title}
                />
                <CardActions>
                    <Button label="Détails" />
                    <Button label="Acheter" raised primary />
                </CardActions>
            </Card>
        );
    }
}

Painting.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Painting;