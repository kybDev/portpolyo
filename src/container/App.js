import React, {useState} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LeftNav from './LeftNav/LeftNav';

import About from './About/About';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import ActivePage from '../component/ActivePage/ActivePage';
import Navigation from '../component/LeftCont/Navigation';

const App = () => {

  const [activePage, setCount] = useState('WORKS');

  function onChangePage(name){
    setCount(name);
  }

  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="kyb-wrapper">
          <LeftNav onChangePage={onChangePage} />
          <ActivePage pageName={activePage} />
          <div className="kyb-cont-right">
            <Navigation onChangePage={onChangePage} />
            <Switch>
              <Redirect from='/' to='/works' exact />
              <Route path='/works' component={Works} />
              <Route path='/skills' component={Skills} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
