import React from 'react';
import './App.css';

function App() {
  return (
    <div className="kyb-wrapper">

      <div className="kyb-cont-left">

        <div className="kyb-logo-wrapper">
          <div className="kyb-logo-cont">
            <h1>&lt;/<span>Kyb</span>Dev&gt;</h1>
          </div>
        </div>

        {/* <div className="kyb-nav-wrapper">
          <nav className="kyb-nav-cont">
            <ul>
              <li><a href="/"><span>A</span>bout</a></li>
              <li><a href="/"><span>S</span>kills</a></li>
              <li><a href="/"><span>W</span>orks</a></li>
            </ul>
          </nav>
        </div> */}

       

        <div className="kyb-profile-wrapper">
          <div className="kyb-profile-cont">
            <div className="hexagon">
              <div className="hexTop"></div>
              <div className="hexBottom"></div>
            </div>
          </div>
        </div>

        <div className="kyb-intro-wrapper">
          <div className="kyb-intro-cont">
            <h1>Hi,</h1>
            <h5>I'm <span>Kyben</span></h5>
            <h5>Full Stack</h5>
            <h5>Developer</h5>
          </div>
        </div>

  

        <div className="kyb-social">
          <ul>
            <li> <i class="zmdi zmdi-github zmdi-hc-lg"></i> </li>
            <li> <i class="zmdi zmdi-linkedin-box zmdi-hc-lg"></i> </li>
            <li> <i class="zmdi zmdi-facebook-box zmdi-hc-lg"></i> </li>
            <li> <i class="zmdi zmdi-twitter-box zmdi-hc-lg"></i> </li>

          </ul>
        </div>

      </div>

      <div className="kyb-cont-right">
      </div>

    </div>
  );
}

export default App;
