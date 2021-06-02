import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {useState} from 'react'
import addList from '../actions/addList'
import editList from '../actions/editList'
import ListFormComponent from './ListFormComponent'
import React from 'react'

class EditListForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: (this.props.list ? this.props.list.name : ""), id:  (this.props.list ? this.props.list.id : "")}
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list === undefined) {
      this.setState({...this.props.list})
    }
  }

  handleChange = (list) => {this.setState({...this.state, ...list})}

  render() {
    return (
      <ListFormComponent submitCallback={this.props.editList} list={this.state} updateStateInParent={this.handleChange.bind(this)}/>
    )
  }


}

export default withRouter(connect(null, {editList})(EditListForm))
