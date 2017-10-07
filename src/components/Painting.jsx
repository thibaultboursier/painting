import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

function Painting({ handleDialog, title, url }) {
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
                <Link to={"/paintings/123"}>
                    <Button label="Détails" />
                </Link>
                <Button label="Acheter" raised primary onClick={() => handleDialog()} />
            </CardActions>
        </Card>
    );
}

Painting.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    handleDialog: PropTypes.func.isRequired
};

export default Painting;