import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import CharacterDisplay from './CharacterDisplay';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      compareStats: false,
      characterName: '',
      realm: '',
      apiResponse: {},
      stats: {},
      head: {},
      chest: {},
      shoulders: {},
      legs: {},
      feet: {},
      trinket: {},
      back: {},
      warrior:{
        stats:{
          str: 130,
          agi: 180,
          int: 400,
          sta: 305,
          armor: 95,
          dodge: 3.0,
          parry: 0.0,
          block: 0.3,
          mainHandDmgMin: 65.0,
          mainHandDmgMax: 110.0,
          offHandSpeed: 1.97,
          mainHandSpeed: 3.15,
          crit: 9.667,
          haste: 1.634,
          mastery: 9.7,
          leech: 0.0,
          versatility: 79,
          mana5: 680,
          spellPen: 0
        }
      }
    };
  }
  //pings the Blizzard API with the realm and character name state from the search form
  getCharacter = () =>{
    return fetch(`https://us.api.battle.net/wow/character/${this.state.realm}/${this.state.characterName}?fields=items,stats&locale=en_US&apikey=4upvwttfaupvye53u6nbwn8gfur3xf8s`)
    .then(res =>

      res.json()
    )
    .then(json => {
      //updating the state to consume the data from the API call
        this.setState({ stats: json.stats, head: json.items.head, chest: json.items.chest, shoulders: json.items.shoulder, legs: json.items.legs, feet: json.items.feet, trinket: json.items.trinket1, back: json.items.back, compareStats: false})
    })
    /*an attempt to catch an error if the realm or character name is invalid
      but a failed call seems to be coming back with a status code of 200
    */
    .catch(error =>{this.setState({apiResponse: error.reason})})
  }
  //fires when the search button is clicked
  handleClick = () => {
    this.getCharacter();
  }
  //updates the state of the characterName and realm as the search form receives a change
  handleChange = (event) =>{
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  //renders the whole page including child components

  render(){
    const stats = this.state.stats;
    return (
      <div className="container">
      <Logo />
        <form action='#' className="searchForm">
          <input type="text" placeholder="Character Name" required name="characterName" onChange={this.handleChange}/>
          <input type="text" placeholder="Realm Name" required name="realm" onChange={this.handleChange}/>
          <button className="submit-btn" onClick={this.handleClick}> Search </button>
        </form>
        <h1>{this.apiResponse}</h1>
        {/*passing all of the stat and item data to the CharacterDisplay component */}
        <CharacterDisplay stats={this.state.stats} head={this.state.head} chest={this.state.chest} shoulders={this.state.shoulders} legs={this.state.legs} feet={this.state.feet} trinket={this.state.trinket} back={this.state.back} compareStats={this.state.compareStats}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
