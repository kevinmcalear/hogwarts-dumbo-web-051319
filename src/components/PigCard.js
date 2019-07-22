import React, { Component } from 'react';

class PigCard extends Component {
  state = {
    showDetails: false,
  }

  handleClick = (e)=> {
    this.setState({showDetails: !this.state.showDetails})
  }

  render() {
    // img: 'hog-imgs/rainbowdash.jpg'
    const imgPath = 'hog-imgs/' +
      this.props.name
      .toLowerCase()
      .split(' ')
      .join('_') + '.jpg'
    return (
      <div>
      <h2>{this.props.name}</h2>
      <img onClick={this.handleClick} src={imgPath} />
      {
        this.state.showDetails ? (
          <div>
            <p>Specialty: {this.props.specialty}</p>
            <p>Greased: {this.props.greased}</p>
            <p>Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
          </div>
        ) : (
          null
        )
      }
      </div>
    )
  }
}

export default PigCard;
