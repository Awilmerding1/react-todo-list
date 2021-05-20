import React, {Component, Fragment} from 'react'
import List from './List'
import ListForm from './ListForm'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
class Lists extends Component {




  render() {

      return (

        <>


          <ul>
            {this.props.lists.map((list, i) => <li><Link to={`/lists/${list.id}`} >{list.name}</Link></li> )}
          </ul>
        </>
      )
  }

}

export default Lists
