import { Link } from 'react-router-dom'
import React from 'react'



class EditPlayer extends React.Component {
hello(){
  console.log('hi')

}

  constructor () {
    super ()

    this.state = {
      name: '',
      number: '',
      position: ''
    }
  }

handleSubmitPlayerClick () {
  const newPlayer = {
    name: this.state.name,
    number: this.state.number,
    position: this.state.position
  };

  this.props.addPlayer(newPlayer)
  this.props.history.push('/roster')
}

render(){
    return (
      <div>
        <h1> <span onClick={this.props.editPlayer}>{this.props.player.name}</span></h1>
        <h1> (<span onClick={this.props.editPlayer} contenteditable="true">#{this.props.player.number}</span></h1>
        <h2>Position: <span onClick={this.props.editPlayer} contenteditable="true">{this.props.player.position}</span></h2>
        <Link to='/roster'>Back</Link>
      </div>
    )
  }
}
export default EditPlayer
