import React, {Component} from 'react'
import Lists from './Lists'
import List from './List'
import ListForm from './ListForm'
import {Route, Switch} from 'react-router-dom'

class ListsContainer extends Component {


    // constructor() {
    //   super()
    //   this.state = {
    //       lists: []
    //     }
    //   this.updateState = this.updateState.bind(this)
    // }

    // componentDidMount() {
    //   fetch("http://localhost:3001/lists")
    //   .then(function(response) {
    //     return response.json()
    //   })
    //   .then((listsArray) => {
    //     this.setState({lists: listsArray})
    //   })
    // }

    //
    // updateState(arg) {
    //     this.setState((prevState, prevProps) => {
    //       return {lists: [...prevState.lists, arg]}
    //     })
    //
    // }


    render() {
        return (
          <>
            <Switch>
              <Route path="/lists/new">
                <ListForm />
                </Route>
              <Route exact path="/lists">
                <Lists />
                </Route>
              <Route path='/lists/:id' render={(routerProps) => <List {...routerProps} />}/>
            </Switch>
          </>
        )
    }

}

// list={this.state.lists.find(list => list.id === parseInt(routerProps.match.params.id))}
// <Route path="/lists/new" render={(routerProps) => <ListForm sendData={this.updateState} {...routerProps}/>}/>


export default ListsContainer

// <ListForm sendData={this.updateState}/>
// <Lists lists={this.state.lists}/>
