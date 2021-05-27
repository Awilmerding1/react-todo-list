export default function editList(list) {


  return function(dispatch) {

    fetch(`http://localhost:3001/lists/${list.id}`, {
      method: "PATCH",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({list: list})
    }).then(r => r.json())
    .then(list => dispatch({type: "EDIT_LIST", payload: list}))

  }


}
