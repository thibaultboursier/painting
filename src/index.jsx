import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import PaintingListContainer from './components/PaintingListContainer';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />      
      <Route path="/paintings" component={PaintingListContainer}/>
    </div>
  </BrowserRouter>
), document.getElementById('app')
);

module.hot.accept();