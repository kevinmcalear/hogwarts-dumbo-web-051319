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

    if (this.state.sortValue === 'name') {
      filteredHogs = filteredHogs.sort((a, b) => a.name.localeCompare(b.name))
    } else if (this.state.sortValue === 'weight') {
      filteredHogs = filteredHogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    }
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
