import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addList from '../actions/addList'
import editList from '../actions/editList'

class ListForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: (this.props.list ? this.props.list.name : ""), id:  (this.props.list ? this.props.list.id : "")}

  }

  componentDidUpdate(prevProps) { //bandaid solution
    // debugger
    if (prevProps.list === undefined) {
      this.setState({...this.props.list})
    }
  }

  handleSubmit(e) {
    console.log("1 top of handleSubmit") //1
    e.preventDefault()
    if (this.props.list) {
        this.props.editList(this.state)

    } else {
      const list = {name: this.state.name, id: Math.floor(Math.random() * Math.floor(100000000))}
      // this.props.dispatch({type: "ADD_LIST", payload: list})
      console.log("2 before addList") //2
      this.props.addList(list) //dispatch called automatically when second arg to connect is an object
      console.log(" 4/5 after addList") //6
      // addList(list) //will not trigger dispatch
      this.props.history.push("/lists")
    }


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


// const mapDispatchToProps = (dispatch) => {
//     return {
//       addList: function(list){
//         fetch("http://localhost:3001/lists", {
//           method: "POST",
//           headers: {Accept: "application/json", "Content-Type": "application/json"},
//           body: JSON.stringify({list: list})
//         }).then(r => r.json())
//         .then(list => dispatch({type: "ADD_LIST", payload: list}) )
//
//       },
//       editList: function(list){ dispatch({type: "EDIT_LIST", payload: list}) }
//     }
// }
// //
// export default withRouter(connect(null, mapDispatchToProps)(ListForm))
export default withRouter(connect(null, {addList: addList, editList: editList})(ListForm))

//connect determines if second arg is a function or an object
  // if the argument is a function, it invokes that function passing in dispatch as arg
  // the returned object from that function becomes props in out component
  //if the argument is an OBJECT connect passes that object as props to the component
      //if those methods return ACTION OBJECTS then dispatch is called for us and that object is passed as the argument
      // if those methods return FUNCTIONS, thunk steps in and the dispatch method is sent to those functions as arguments
