import React from 'react';
import PaintingList from './PaintingList';

class PaintingListContainer extends React.Component {
  state = { paintings: [] }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const paintings = [
      {
        title: 'My first painting',
        url: 'https://placeimg.com/800/450/nature'
      },
      {
        title: 'My second painting',
        url: 'https://placeimg.com/800/450/nature'
      }
    ];
    this.setState({ paintings });
  }

  render() {
    return (
      <PaintingList paintings={this.state.paintings} />
    )
  }
}

export default PaintingListContainer;