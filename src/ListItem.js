import React, { PureComponent } from 'react'

class ListItem extends PureComponent {
  handleOnClick = () => {
    this.props.onClick(this.props.id)
  }

  render() {
    const { text } = this.props

    return (<div onClick={ this.handleOnClick }>{text}</div>)
  }
}

export default ListItem
