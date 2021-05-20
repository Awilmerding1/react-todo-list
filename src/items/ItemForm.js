import React from 'react'


class ItemForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {itemName: ""}
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.sendData(this.state.itemName)
    this.setState({itemName: ""})
  }

  handleChange(e) {
      this.setState({[e.target.name]: e.target.value})
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.itemName} name="itemName"/>

        <input type="submit"/>
      </form>
  )
  }

}

export default ItemForm
