import React from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

const { whyDidYouUpdate } = require('why-did-you-update')
whyDidYouUpdate(React)

class LongList2 extends React.Component {
  render() {
    return (
      <div>
        { this.props.ids.map((id) => <ListItem key={ id } id={ id } />) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ids: state.names.ids,
})

export default connect(mapStateToProps)(LongList2)
