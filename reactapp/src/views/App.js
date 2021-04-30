import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Home from './Home';
import Template from './Template';
import Sentence from './Sentence';
import Editor from './Editor';
import EditorModal from './EditorModal';

function App (props)
{
  return (
    <Container>
      <Router>
        {props.location.pathname !== '/editor/modal' ? <Header /> : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/template" component={Template} />
          <Route exact path="/sentence" component={Sentence} />
          <Route exact path="/editor" component={Editor} />
          <Route exact path="/editor/modal" component={EditorModal} />
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  min-width: 1000px;
`;

export default App;
