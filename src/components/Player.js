import { Link, Switch, Route } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import EditPlayer from './editPlayer'

const Player = ({playerId, players, editPlayer}) => {
  const player = _.find(players, { number: playerId });

  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <h4 key={player.number}>
      <Link to={`/roster/${player.number}/edit`}>Edit {player.name}</Link>
      </h4>
      <Link to='/roster'>Back</Link>
      <Switch>
      <Route path='/roster/:number/edit' render={() => (
        <EditPlayer player={player} editPlayer={editPlayer} />
      )}/>
      </Switch>
</div>
  )
}

export default Player
