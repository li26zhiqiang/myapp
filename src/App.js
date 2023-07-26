import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Router, Route, Link } from 'react-router'
import Header from './component/pageComponent/Header';
import Continue from './component/pageComponent/Continue';
import {createMemoryHistory} from 'history';

export default function App() {
  const history = createMemoryHistory();

  return (
      <Router location={history.location} navigator={history}>
        <Switch>
          <Route path="/" element={<Header />}>
            <Route path="/about" element={<Continue />} />
          </Route>
        </Switch>
      </Router>
  )
}