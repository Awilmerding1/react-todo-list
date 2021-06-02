import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {useState} from 'react'
import addList from '../actions/addList'

import ListFormComponent from './ListFormComponent'
import React from 'react'

class NewListForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name:  ""}
  }

  handleSubmit(list) {
    this.props.addList(list)
    this.props.history.push('/lists')
  }


  handleChange = (list) => {this.setState({...this.state, ...list})}

  render() {
    return (
      <ListFormComponent submitCallback={this.handleSubmit.bind(this)} list={this.state} updateStateInParent={this.handleChange.bind(this)}/>
    )
  }


}

export default withRouter(connect(null, {addList})(NewListForm))
