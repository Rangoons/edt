import React, { Component } from 'react';
import CompareStats from './CompareStats';

class CharacterDisplay extends Component {
  constructor(props){
    super(props);
    //setting the dummy data for a "warrior" character
    this.state = {
      compareStats: false,
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
  compareStats = () =>{
    this.setState({compareStats: true});
  }
  render(){
    //setting local vars equal to the state from the parent component
    const stats = this.props.stats;
    const head = this.props.head;
    const chest = this.props.chest;
    const shoulders = this.props.shoulders;
    const legs = this.props.legs;
    const feet = this.props.feet;
    const trinket = this.props.trinket;
    const back = this.props.back;

    return(
      <div>
       <div className="transparent"></div>
        <div className="tableContainer">
          <div className="statsTable">
            <div className="stats">
              <h1>Attributes</h1>
                <table>
                  <tr>
                    <td className="yellowText">Strength: </td>
                    <td>{stats.str}</td>
                  </tr>
                  <tr>
                    <td className="yellowText">Agility: </td>
                    <td>{stats.agi}</td>
                  </tr>
                  <tr>
                    <td className="yellowText">Intellect: </td>
                    <td>{stats.int}</td>
                  </tr>
                  <tr>
                    <td className="yellowText">Stamina: </td>
                    <td>{stats.sta}</td>
                  </tr>
                </table>
              </div>
              <div className="stats">
                <h1>Defense</h1>
                <table>
                  <tr>
                    <td className="yellowText">Armor: </td>
                    <td>{stats.armor}</td>
                  </tr>
                  <tr>
                    <td className="yellowText">Dodge: </td>
                    <td>{stats.dodge}</td>
                  </tr>
                  <tr>
                    <td className="yellowText">Parry: </td>
                    <td>{stats.parry}</td>
                  </tr>
                  <tr>
                    <td className="yellowText">Block: </td>
                    <td>{stats.block}</td>
                  </tr>
                </table>
              </div>
              <div className="stats">
                <h1>Attack</h1>
                <table>
                  <tr>
                    <td className="yellowText">Damage: </td>
                    <td>{stats.mainHandDmgMin} - {stats.mainHandDmgMax}</td>
                  </tr>
                  <tr>
                    <td className="yellowText">Speed: </td>
                    <td>{stats.offHandSpeed} - {stats.mainHandSpeed}</td>
                  </tr>
                </table>
              </div>
              <div className="stats">
                <h1>Enhancements</h1>
                  <table>
                    <tr>
                      <td className="yellowText">Crit: </td>
                      <td>{stats.crit}</td>
                    </tr>
                    <tr>
                      <td className="yellowText">Haste: </td>
                      <td>{stats.haste}</td>
                    </tr>
                    <tr>
                      <td className="yellowText">Master: </td>
                      <td>{stats.mastery}</td>
                    </tr>
                    <tr>
                      <td className="yellowText">Leech: </td>
                      <td>{stats.leech}</td>
                    </tr>
                    <tr>
                      <td className="yellowText">Versatility: </td>
                      <td>{stats.versatility}</td>
                    </tr>
                  </table>
                </div>
                <div className="stats">
                  <h1>Spell</h1>
                  <table>
                    <tr>
                      <td className="yellowText">Mana Regen: </td>
                      <td>{stats.mana5}</td>
                    </tr>
                    <tr>
                      <td className="yellowText">Spell Penetration: </td>
                      <td>{stats.spellPen}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <button className="compare-btn" onClick={this.compareStats}>Compare Stats</button>
              {this.state.compareStats ? <CompareStats warrior={this.state.warrior.stats}/> : <div></div>}
              <div className="itemsTable">
                <h1>My Item Sets</h1>
                <table>
                  <tr>
                    <td className="yellowText">Helm</td>
                    <td className="yellowText">{head.name}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="yellowText">Chest</td>
                    <td className="yellowText">{chest.name}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="yellowText">Shoulders</td>
                    <td className="yellowText">{shoulders.name}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="yellowText">Legs</td>
                    <td className="yellowText">{legs.name}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="yellowText">Feet</td>
                    <td className="yellowText">{feet.name}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="yellowText">Trinket</td>
                    <td className="yellowText">{trinket.name}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="yellowText">Back</td>
                    <td className="yellowText">{back.name}</td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
    )
  }
}

export default CharacterDisplay;
