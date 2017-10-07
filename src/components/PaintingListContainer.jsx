import React from 'react';
import { Route } from 'react-router-dom';
import 'whatwg-fetch';
import PaintingList from './PaintingList';
import PaintingDetail from './PaintingDetail';

export default class PaintingListContainer extends React.Component {
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
    console.log(`${this.props.match.url}/:id`)
    return (
      <div>
        <Route path={`${this.props.match.url}/123`} component={PaintingDetail} />
        <PaintingList paintings={this.state.paintings} />
      </div>
    )
  }
}