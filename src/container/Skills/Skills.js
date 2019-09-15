import React from 'react';

import CloudText from './CloudText';

import ParticlesBg from '../../component/LeftCont/Particles'

const Skills = () => {
  return (

    <div className="grid-content">
      <div className="skills-page">
        <ParticlesBg numValue={50}  color="#000"/>
        <CloudText />
      </div>

    </div>

    
  );
}

export default Skills;