import React from 'react'


class Item extends React.Component {

  // sendInfoBack(e) {
  //   this.props.callBackFn("Cereal")
  //
  // }

  render() {
    return <div>
      <li >{this.props.item.content}</li>
      </div>
  }

}

export default Item
