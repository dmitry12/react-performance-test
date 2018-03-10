import React, { PureComponent } from 'react'

class ListItem extends PureComponent {
  render() {
    const { onClick, text } = this.props

    return (<div onClick={ onClick }>{text}</div>)
  }
}

export default ListItem
