import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';



class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 5000);
  }

  render() {
    return (
      <TagCloud
        className='tag-cloud'
        style={{
          fontFamily: 'Oswald, sans-serif',
          fontSize: () => Math.round(Math.random() * 30) + 16,
          // fontSize: 30,
          padding: 5,
          width: '100%',
          height: '100%',
          fontWeight: 'normal',
          color: "#aaa"
        }}>
        <div>PHP</div>
        <div>Phalcon</div>
        <div>Laravel</div>
        <div>Cake</div>
        <div>CodeIgniter</div>
        <div>Node</div>
        <div>npm</div>
        <div>Angular1.x</div>
        <div>ReactJs</div>
        <div>Docker</div>
        <div>Bash</div>
        <div>Linux</div>
        <div>Windows</div>
        <div>Webpack</div>
        <div>Kubernetes</div>
        <div>Javascript</div>
        <div>Jquery</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>LESS</div>
        <div>Ionic</div>
        <div>Electron</div>
        <div>Bootstrap</div>
        <div>Material</div>
        <div>SASS</div>
        <div>Python</div>
        <div>Django</div>
        <div>Flask</div>
        <div>REST</div>
        <div>GraphQL</div>
        <div>Apollo</div>
        <div>Axios</div>
        <div>Wordpress</div>
      </TagCloud>
    );
  }
}

export default App;
