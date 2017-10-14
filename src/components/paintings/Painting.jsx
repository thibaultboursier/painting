import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Card, Icon, Image } from 'semantic-ui-react'

function Painting({ handleDialog, id, price, title, url }) {
    return (
        <Card fluid>
            <Image fluid src={url} />
            <Price price={price} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button.Group>
                    <Button>Voir</Button>
                    <Button.Or text="ou" />
                    <Button positive color="red" onClick={() => handleDialog()}>
                        <i class="shop icon"></i> Réserver
                    </Button>
                </Button.Group>
            </Card.Content>
        </Card>
    );
}

function Price({ price }) {
    return <div style={{ position: 'absolute', top: 0, width: '100%', height: 'auto' }}>
        {price}
    </div>
}

Painting.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    handleDialog: PropTypes.func.isRequired
};

export default Painting;