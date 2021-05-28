import React from 'react'
import {connect} from 'react-redux'
import addItem from '../actions/addItem'

class ItemForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {content: ""}
  }

  handleSubmit(e) {
    e.preventDefault()
    const item = {...this.state, list_id: this.props.list.id}
    this.props.addItem(item)
    this.setState({content: ""})
  }

  handleChange(e) {
      this.setState({[e.target.name]: e.target.value})
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.content} name="content"/>

        <input type="submit"/>
      </form>
  )
  }

}

export default connect(null, {addItem})(ItemForm)
