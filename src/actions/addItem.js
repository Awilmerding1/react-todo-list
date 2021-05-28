export default function addItem(item) {

  return function(dispatch) {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({todo: item})
    }).then(r => r.json())
    .then(item => dispatch({type: "ADD_ITEM", payload: item}))

  }
// return {type: "ADD_ITEM", payload: item}
}
