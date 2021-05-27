export default function fetchLists() {
  return (dispatch) => {
    fetch("http://localhost:3001/lists")
    .then(function(response) {
      return response.json()
    })
    .then((listsArray) => {
      dispatch({type: "FETCH_LISTS", payload: listsArray})
    })
  }
}
