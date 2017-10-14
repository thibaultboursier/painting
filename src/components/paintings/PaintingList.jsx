import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Modal, Header } from 'semantic-ui-react'
import shortid from 'shortid';
import Painting from './Painting';

export default class PaintingList extends React.Component {
  static propTypes = {
    paintings: PropTypes.array.isRequired
  };
  state = {
    isDialogOpen: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { paintings } = this.props;

    return (
      <div>
        <Grid columns={true}>
          {
            paintings.map(painting => {
              return (
                <Grid.Column
                  key={shortid.generate()}
                  mobile={16}
                  tablet={8}
                  computer={4}
                >
                  <Painting
                    handleDialog={this.handleDialog}
                    {...painting}
                  />
                </Grid.Column>
              )
            })
          }
        </Grid>
        <Modal 
          closeIcon     
          open={this.state.isDialogOpen}
          closeOnDocumentClick={true}
          closeOnEscape={true}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }

  handleDialog = () => {
    this.setState(() => ({ isDialogOpen: !this.state.isDialogOpen }));
  }
}