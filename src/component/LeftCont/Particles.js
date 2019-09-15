import React from 'react';
import Particles from 'react-particles-js';

const ParticlesBg = (props) => {
  return <Particles
    params={{
      "particles": {
        "number": {
          "value": props.numValue
        },
        "size": {
          "value": 5
        },
        "color": {
          "value": props.color
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
      position: 'absolute',
    }}
  />
}

export default ParticlesBg;