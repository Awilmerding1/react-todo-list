import {useSelector, useDispatch} from 'react-redux'
import EditListForm from './EditListForm'
import deleteList from '../actions/deleteList'
import ItemForm from '../items/ItemForm'
import Item from '../items/Item'


export default function List(props) {

  // const list = props.lists.find(list => list.id === parseInt(props.match.params.id))
  const lists = useSelector(function(state) {return state.lists})
  const list = lists.find(list => list.id === parseInt(props.match.params.id))

  const dispatch = useDispatch()
  console.log(lists, list)

  const handleDelete = () => {
    dispatch(deleteList(list.id))
    props.history.push("/lists")
  }

  return (
        <>
          <h1>
              {list && list.name}
          </h1>
          <button onClick={handleDelete}>Delete List</button>
            <h3>Edit List</h3><EditListForm list={list}/>
            <h3>Add Todo</h3><ItemForm list={list}/>
            <h3>All Todos</h3>
            {list && list.todos.map(todo => <Item key={todo.id} item={todo}/>)}
          </>
        )
}



// <ItemForm sendData={this.updateState.bind(this)}/>
