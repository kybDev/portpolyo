import React from 'react';
import Particles from 'react-particles-js';

const ParticlesBg = () => {
  return <Particles
    params={{
      "particles": {
        "number": {
          "value": 100
        },
        "size": {
          "value": 5
        },
        line_linked: {
          shadow: {
            enable: true,
            color: "#aaa",
            blur: 5
          }
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          }
        }
      }
    }}
    style={{
      width: '100%',
      position: 'absolute'
    }}
  />
}

export default ParticlesBg;