import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import AlbumsContainer from '../albums/AlbumsContainer'

function MainRoutes() {
  return (
    <Switch>
      <Route path='/albums' component={AlbumsContainer} />
      <Redirect to='/albums' />
    </Switch>
  )
}

export default MainRoutes
