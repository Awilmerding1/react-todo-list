export default function listsReducer(state = {lists: []}, action) {
  console.log("6/7 reducer") //7
    switch (action.type) {
      case "ADD_LIST":
        return {lists: [...state.lists, action.payload]}
      case "DELETE_LIST":
        return {lists: state.lists.filter(list => list.id !== action.payload)}
      case "EDIT_LIST":
        const editedListsArray = state.lists.map(list => list.id === action.payload.id ? action.payload : list)
        return {lists: editedListsArray}
      case "FETCH_LISTS":
        return {lists: action.payload}
      case "ADD_ITEM":
        const updatedList = state.lists.find(list => list.id === action.payload.listId) // first find list that todo is associated with
        updatedList.todos = [...updatedList.todos, action.payload] // replace todos property on the list
        return {lists: state.lists.map(list => list.id === updatedList.id ? updatedList : list)} //return new state with update list todos
      default:
        return state
  }
}



// export default function listsReducer(state = [], action) {
//   console.log("reducer")
//     switch (action.type) {
//       case "ADD_LIST":
//         return [...state, action.payload]
//       case "DELETE_LIST":
//         return state.filter(list => list.id !== action.payload)
//       case "EDIT_LIST":
//         const editedListsArray = state.map(list => list.id === action.payload.id ? action.payload : list)
//         return editedListsArray
//       default:
//         return state
//   }
// }
