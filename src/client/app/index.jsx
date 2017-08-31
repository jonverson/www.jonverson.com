import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import PositionsComponent from './PositionsComponent.jsx';
import HeroComponent from './HeroComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main: [],
      position: [],
      skill: []
    };
  }

  componentDidMount() {
    axios.get('public/jonverson.json')
      .then(({ data })=> {
        this.setState({ 
          main: data,
          position: data.positions,
          skill: data.skills
        });
      })
      .catch((err)=> {})
  }

  render () {
    console.log(this.state.position);

    return (
      <div>
        <HeroComponent content={this.state.main} />
        <PositionsComponent content={this.state.position} exp={this.state.skill}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));