import React from 'react'



class ListFormComponent extends React.Component {


  handleSubmit(e) {
    e.preventDefault()
    this.props.submitCallback(this.props.list)
  }

  handleChange = (e) => {this.props.updateStateInParent({[e.target.name]: e.target.value})}

  render = () => {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange} value={this.props.list && this.props.list.name} name="name"/>

        <input type="submit"/>
      </form>
  )
  }

}

export default ListFormComponent
