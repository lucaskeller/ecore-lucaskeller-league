import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import AlbumsList from './AlbumsList'
import AlbumDetail from './AlbumDetail'

function AlbumsRoutes() {
  return (
    <Switch>
      <Route exact path='/albums' component={AlbumsList} />
      <Route exact path='/albums/:id' component={AlbumDetail} />
      <Redirect to='/albums' />
    </Switch>
  )
}

export default AlbumsRoutes
