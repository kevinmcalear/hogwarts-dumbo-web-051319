import piggy from '../porco.png'
import React from 'react'

const Filter = (props) => {
	return (
		<div>
      <button onClick={props.onGreaseToggle}>
      { props.greasedMode ?
        'Show me all dem pigs' :
        'Show me dem greased piggies'
      }
      </button>
      <select onChange={props.onSortedChange}>
        <option value='name'>Sort By Name</option>
        <option value='weight'>Sort By Weight</option>
      </select>
    </div>
	)
}

export default Filter
