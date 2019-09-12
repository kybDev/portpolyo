import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LeftNav from './LeftNav';

import About from './About/About';
import Skills from './Skills/Skills';
import Works from './Works/Works';

const App = () => {

  return (

    <BrowserRouter>
      <React.Fragment>
        <div className="kyb-wrapper">

          <LeftNav />

          <div className="kyb-cont-right">

            <Switch>
              <Redirect from='/' to='/about' exact />
              <Route path='/about' component={About} />

              <Route path='/skills' component={Skills} />
              <Route path='/works' component={Works} />
            </Switch>

          </div>
        </div>
      </React.Fragment>
    </BrowserRouter>


  );

}

export default App;
