import React from 'react'
import List from './List'
import ListForm from './ListForm'


class Lists extends React.Component {


  constructor() {
    super()
    console.log("constructor")
    this.state = {
        lists: []
      }
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch("http://localhost:3001/lists")
    .then(function(response) {
      return response.json()
    })
    .then((listsArray) => {
      // console.log(listsArray)
      this.setState({lists: listsArray})
    })
  }

  //
  //
  componentDidUpdate(prevProps, prevState, snapshot) {

    console.log('componentDidUpdate')
    // if (prevState.lists.length % 2 === 0) {
    //   this.setState({tracker: prevState.tracker+=1})
    // }
  }
  // //
  componentWillUnmount() {

    console.log('componentWillUnmount')
  }


  updateState(arg){
      this.setState((prevState, prevProps) => {
        return {lists: [...prevState.lists, arg]}
      })
  }


  render() {
    console.log("render", this.state)
      return (
        <div>
          <p>ID VALUE: {this.state.id}</p>
          <p>TRACKER: {this.state.tracker}</p>
          <ListForm sendData={this.updateState}/>
          <ul>
            {this.state.lists.map((list, i) => <List key={i} list={list} />)}
          </ul>
        </div>
      )
  }

}

export default Lists
