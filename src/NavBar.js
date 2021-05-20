import {Link} from 'react-router-dom'


export default function NavBar(props) {
  // debugger
  return (
      <>
          <Link to="/lists">Lists</Link>
          <Link to="/lists/new">New List</Link>
      </>
  )

}
