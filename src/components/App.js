import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigCard from './PigCard'
import Filter from './Filter'

class App extends Component {
  state = {
    showGreasedOnly: false,
    sortValue: 'name',
  }

  handleSortedChange = (e) => {
    this.setState({sortValue: e.target.value})
  }

  handleGreaseToggle = () => {
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly })
  }

  render() {
    let filteredHogs = hogs

    if (this.state.showGreasedOnly) {
      filteredHogs = hogs.filter(hog => hog.greased)
    }
    console.log('hog count', filteredHogs.length)
    const hogCards = filteredHogs.map(hog => <PigCard {...hog} />)
    return (
      <div className="App">
          < Nav />
          <Filter
            onSortedChange={this.handleSortedChange}
            greasedMode={this.state.showGreasedOnly}
            onGreaseToggle={this.handleGreaseToggle} />
          { hogCards }
      </div>
    )
  }
}

export default App;
