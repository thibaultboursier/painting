import React from 'react';
import PropTypes from 'prop-types';
import Painting from './Painting';

class PaintingList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.paintings.map((painting, index) => <Painting key={index} {...painting}/>)
    )
  }
}

PaintingList.propTypes = {
  paintings: PropTypes.array.isRequired
};

export default PaintingList;