import history from './history'
import { Route, Switch, Router } from 'react-router-dom'
import Main from './pages/main/Main'

function App() {
  return (
    <Router history={history} >
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router >
  )
}

export default App
