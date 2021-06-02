import React, {Component} from 'react'
import Lists from './Lists'
import List from './List'
import NewListForm from './NewListForm'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import fetchLists from '../actions/fetchLists'

class ListsContainer extends Component {

    componentDidMount() {
        this.props.fetchLists()
    }

    render() {
        return (
          <>
            <Switch>
              <Route path="/lists/new">
                <NewListForm />
                </Route>
              <Route exact path="/lists">
                <Lists />
                </Route>
              <Route path='/lists/:id' render={(routerProps) => <List {...routerProps}/>}/>
            </Switch>
          </>
        )
    }

}

// list={this.state.lists.find(list => list.id === parseInt(routerProps.match.params.id))}
// <Route path="/lists/new" render={(routerProps) => <ListForm sendData={this.updateState} {...routerProps}/>}/>


export default connect(null, {fetchLists})(ListsContainer)

// <ListForm sendData={this.updateState}/>
// <Lists lists={this.state.lists}/>
