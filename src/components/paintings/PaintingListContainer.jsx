import React from 'react';
import { Route } from 'react-router-dom';
import 'whatwg-fetch';
import PaintingList from './PaintingList';

export default class PaintingListContainer extends React.Component {
  state = { paintings: [] }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/mocks/paintings.json')
      .then(res => res.json())
      .then(paintings => this.setState({ paintings }));
  }

  render() {
    return (
      <PaintingList paintings={this.state.paintings} />
    )
  }
}