import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import Player from './Player';
import PlayerNew from './PlayerNew';
import FullRoster from './FullRoster'
import EditPlayer from './editPlayer'

const Roster = ({players, addPlayer, editPlayer}) => (
  <div>
  <Switch>
    <Route path='/roster/new' render={(routeProps) => (
      <PlayerNew history={routeProps.history} players={players} addPlayer={addPlayer} />
    )}/>

    <Route path='/roster/:number' render={(routeProps) => (
      <Player playerId={parseInt(routeProps.match.params.number, 10)} players={players} editPlayer={editPlayer} />
    )}/>


    <Route path='/roster' render={() => (
      <FullRoster players={players} />
    )}/>
  </Switch>
  <Link to ='/roster/new'>Add New Player</Link>
  </div>
)

export default Roster
