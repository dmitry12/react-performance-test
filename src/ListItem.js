import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { deleteById } from './names.reducer'

class ListItem extends PureComponent {
  handleOnClick = () => {
    this.props.deleteById(this.props.id)
  }

  render() {
    const { item } = this.props

    return (<div onClick={ this.handleOnClick }>{item.name}</div>)
  }
}


function mapStateToProps(_, initialProps) {
  const { id } = initialProps;

  return (state) => {
    const { names } = state.names;

    return {
      item: names[id],
    };
  }
}


const mapDispatchToProps = dispatch => ({
  deleteById: id => dispatch(deleteById(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
