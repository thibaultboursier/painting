import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog';

import Painting from './Painting';

class PaintingList extends React.Component {
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
    return (
      <div>
        {
          this.props.paintings.map((painting, index) => <Painting key={index} {...painting} handleDialog={this.handleDialog} />)
        }
        <Dialog
          actions={this.actions}
          active={this.state.isDialogOpen}
          onEscKeyDown={this.handleDialog}
          onOverlayClick={this.handleDialog}
          title='Acheter'
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
      </div>
    )
  }

  handleDialog = () => {
    this.setState(() => ({ isDialogOpen: !this.state.isDialogOpen }));
  }
}

export default PaintingList;