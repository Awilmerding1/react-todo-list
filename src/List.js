
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
  return (
          <li>
              {props.list.name}
          </li>
        )
}



// <ItemForm sendData={this.updateState.bind(this)}/>
