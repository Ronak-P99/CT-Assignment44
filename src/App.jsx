import { Component } from 'react'
import './AppStyles.css'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomerId: null,
      selectedOrderId: null // => 1 or 2
    };
  }

  render() {

    return (
      <div className='app-container'>
        <h1>Our Characters</h1>
        <CharacterList />
        <CharacterDetail />

      </div>
    );
  }
}

export default App;
