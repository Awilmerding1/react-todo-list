export default function deleteList(listId) {

  return function(dispatch) {

    fetch(`http://localhost:3001/lists/${listId}`, {
      method: "DELETE",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
    }).then(r => r.json())
    .then(list => dispatch({type: "DELETE_LIST", payload: list.id}))
  }


}
