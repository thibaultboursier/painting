import React from 'react';
import 'whatwg-fetch';
import PaintingList from './PaintingList';

class PaintingListContainer extends React.Component {
  state = { paintings: [] }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('mocks/paintings.json')
      .then(res => res.json())
      .then(paintings => this.setState({ paintings }));
  }

  render() {
    return (
      <PaintingList paintings={this.state.paintings} />
    )
  }
}

export default PaintingListContainer;