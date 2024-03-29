import React, { Component } from "react";
import DiceRoller from "./DiceRoller";
import { GAMESTATE } from "../data/GameStateModel";
import Die from "../data/DieModel";
import "./styles/GameBoard.css";
import Player from "../data/Player";
import DamageDisplayPerLane from "./DamageDisplayPerLane";

interface Props {
  rollDice: () => void;
  playerDice: Die[];
  currentTurn: number;
  currentState: GAMESTATE;
  advance: () => void;
  selectDie: (index: number) => void;
  players: Player[];
  lanes: number[];
}

class GameBoard extends Component<Props> {
  render() {
    const { currentState, players, rollDice, selectDie, lanes, advance } =
      this.props;
    const player: Player = players.find((player) => player.isHuman);
    const enemy: Player = players.find((player) => !player.isHuman);
    const showEnemyDice = true;
    const showPlayerDice =
      currentState !== GAMESTATE.READY &&
      currentState !== GAMESTATE.STARTGAME &&
      currentState !== GAMESTATE.CONNECTING;
    const playerDice = showPlayerDice ? player.rolledDice : [];
    const enemyDice = showEnemyDice ? enemy.rolledDice : [];
    const showDamage =
      currentState === GAMESTATE.ENDGAME || currentState === GAMESTATE.ENDTURN;

    return (
      <div className="game-board">
        <DiceRoller
          player={enemy}
          dice={enemyDice}
          rollDice={rollDice}
          currentState={currentState}
          selectDie={() => null} // can't select enemy dice
          advance={advance}
        />
        {/* <DamageDisplayPerLane player={player} enemy={enemy} showDamage={showDamage} /> */}
        <DamageDisplayPerLane
          playerAttack={player.attackTotal}
          playerDefense={player.defenseTotal}
          enemyAttack={enemy.attackTotal}
          enemyDefense={enemy.defenseTotal}
          showDamage={showDamage}
        />
        <DiceRoller
          player={player}
          dice={playerDice}
          rollDice={rollDice}
          currentState={currentState}
          selectDie={selectDie}
          advance={advance}
        />
      </div>
    );
  }
}

export default GameBoard;
