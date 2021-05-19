import React, {Component, Fragment} from 'react'
import List from './List'
import ListForm from './ListForm'


class Lists extends Component {


  constructor() {
    super()
    this.state = {
        lists: []
      }
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount() {
    fetch("http://localhost:3001/lists")
    .then(function(response) {
      return response.json()
    })
    .then((listsArray) => {
      this.setState({lists: listsArray})
    })
  }


  updateState(arg){
      this.setState((prevState, prevProps) => {
        return {lists: [...prevState.lists, arg]}
      })
  }

  handleClick(){
    this.setState({lists: this.state.lists})
  }



  render() {
      return (
        <>
          <button onClick={this.handleClick.bind(this)}>Click me!</button>
          <ListForm sendData={this.updateState}/>
          <ul>
            {this.state.lists.map((list, i) => <Fragment key={i}><List list={list}/></Fragment>)}
          </ul>
        </>
      )
  }

}

export default Lists
