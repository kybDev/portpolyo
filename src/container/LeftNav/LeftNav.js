import React from 'react';

import Particles from '../../component/LeftCont/Particles';
import Logo from '../../component/LeftCont/Logo';
import Profile from '../../component/LeftCont/Profile';
import Introduction from '../../component/LeftCont/Introduction';
import SocialMedia from '../../component/LeftCont/SocialMedia';
import Navigation from '../../component/LeftCont/Navigation';


const LeftNav = (props) => {
  return (
    <div className="kyb-cont-left">
      <Particles numValue={100} color="#fff" />
      <div className="sticky-cont">
        <Logo />
        <div>
          {/* <Navigation onChangePage={props.onChangePage} /> */}
          <Profile />
          <Introduction />
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default LeftNav;
