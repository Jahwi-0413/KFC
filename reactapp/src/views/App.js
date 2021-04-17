import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Home from './Home';
import Template from './Template';
import Sentence from './Sentence';
import Editor from './Editor';

const Container = styled.div`
  text-align: center;
  min-width: 1000px;
`;

function App ()
{
  return (
    <Container>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/template" component={Template}/>
          <Route exact path="/sentence" component={Sentence}/>
          <Route exact path="/editor" component={Editor}/>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
