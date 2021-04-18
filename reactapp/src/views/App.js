import Header from './Header'
import Home from './Home'
import Editor from './Editor'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App ()
{
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/sentence" />
        <Route path="/template" />
        <Route path="/editor" component={Editor} />
      </Router>
    </>
  );
}

export default App;
