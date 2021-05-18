import React, {Component} from 'react'
import Lists from './Lists'

class App extends Component {

  constructor() {
    super()
    this.state = {showLists: true}
  }

  toggleLists() {
    this.setState(function(prevState) {return {showLists: !prevState.showLists}})
    this.setState(prevState => ({showLists: !prevState.showLists}))
    // this.setState({showLists: !this.state.showLists})
    // this.setState({showLists: !this.state.showLists})
  }

  render() {
    return (
      <div>
          <button onClick={(e) => this.toggleLists()}>Toggle Lists</button>
        {this.state.showLists ? <Lists /> : null}
      </div>
    )

  }

}





export default App
