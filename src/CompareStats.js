import React, { Component } from 'react';

class CompareStats extends Component {


  render(){
    const stats = this.props.warrior;

    return(
      <div>
          <div className="compareStatsTable">
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
          </div>
    )
  }
}

export default CompareStats;
