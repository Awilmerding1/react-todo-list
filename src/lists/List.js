import {useSelector} from 'react-redux'
// class List extends React.Component {
//
//
//
//   render() {
//
//       return (
//         <div>
//             {this.props.list.name}
//         </div>
//       )
//   }
//
// }


export default function List(props) {
  // const list = props.lists.find(list => list.id === parseInt(props.match.params.id))
  const lists = useSelector(function(state) {return state.lists})
  const list = lists.find(list => list.id === parseInt(props.match.params.id))
  // return (
  //         <li>
  //             {list && list.name}
  //         </li>
  //       )

  return (
          <li>
              {list && list.name}
          </li>
        )
}



// <ItemForm sendData={this.updateState.bind(this)}/>
