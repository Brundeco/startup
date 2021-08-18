import testImage from './images/test-img.png'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/aura" component={Aura} />
        <Route path="/posters" component={Poster} />
        <Route path="/about" component={About} />
        <Route path="/rbtf" component={Rbtf} />
        <Route path="/gdm" component={Gdm} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
