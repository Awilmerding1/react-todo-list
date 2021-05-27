export default function addList(list) {
  console.log("3 top of addList")//3
  return function(dispatch) {
    console.log("5/4 top of thunk in addlist") //4
    fetch("http://localhost:3001/lists", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({list: list})
    }).then(r => r.json())
    .then(list => dispatch({type: "ADD_LIST", payload: list}))
      console.log("7/6 bottom of thunk in addlist") //5
  }

}
