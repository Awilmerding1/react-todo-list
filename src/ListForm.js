import React from 'react'


export default class ListForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: ""}

  }

  handleSubmit(e) {
    e.preventDefault()
    const body = {list: this.state}
    fetch("http://localhost:3001/lists", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify(body)
    }).then(r => r.json())
    .then(list => this.props.sendData(list))
    this.setState({name: ""})
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}


  render = () => {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange} value={this.state.name} name="name"/>

        <input type="submit"/>
      </form>
  )
  }

}
