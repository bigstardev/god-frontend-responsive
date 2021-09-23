import React from 'react'
import { Block, Button } from 'vcc-ui';
import Slider from './components/slider';
// import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Block extend={{ padding: 20 }}>
        <Button>Click me!</Button>
        <Slider />
      </Block>
    </div>
  );
}

export default App;
