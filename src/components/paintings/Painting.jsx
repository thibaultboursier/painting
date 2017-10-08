import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Card, Icon, Image } from 'semantic-ui-react'

function Painting({ handleDialog, id, title, url }) {
    return (
        <Card fluid>
            <Image src={url} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Peinte en 2015</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button color='violet' onClick={() => handleDialog()}>Détails</Button>
            </Card.Content>
        </Card>
    );
}

Painting.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    handleDialog: PropTypes.func.isRequired
};

export default Painting;