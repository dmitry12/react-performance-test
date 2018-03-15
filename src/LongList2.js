import React from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

import { deleteById } from './names.reducer'

class LongList2 extends React.Component {
  render() {
    return (
      <div>
        { this.props.names.map((item, index) => <ListItem key={ item.get('_id') } onClick={ this.props.deleteById } id={ item.get('_id') } text={ item.get('name') } />) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  names: state.names.names,
})

const mapDispatchToProps = dispatch => ({
  deleteById: id => dispatch(deleteById(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LongList2)
