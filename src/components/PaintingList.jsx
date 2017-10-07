import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog';
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
    const {paintings} = this.props;

    return (
      <div>
        {
          paintings.map(painting => {
            return <Painting 
              key={shortid.generate()} 
              handleDialog={this.handleDialog}               
              {...painting} 
            />
          })
        }
        <Dialog
          actions={this.actions}
          active={this.state.isDialogOpen}
          onEscKeyDown={this.handleDialog}
          onOverlayClick={this.handleDialog}
          title='Acheter'
        >
          <p>Content for buy</p>
        </Dialog>
      </div>
    )
  }

  handleDialog = () => {
    this.setState(() => ({ isDialogOpen: !this.state.isDialogOpen }));
  }
}