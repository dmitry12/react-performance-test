import React from 'react'
import data from './data.js'
import ListItem from './ListItem'


class LongList2 extends React.Component {
  state = {
    items: data,
  }

  onClick(id) {
    const newState = this.state.items.filter(n => n._id !== id)
    this.setState({ items: newState })
  }

  render() {
    return (
      <div>
        { this.state.items.map((item, index) => <ListItem key={ item._id } onClick={ () => this.onClick(item._id) } text={ item.name } />) }
      </div>
    )
  }
}

export default LongList2
