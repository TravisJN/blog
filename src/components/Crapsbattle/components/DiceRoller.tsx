import React, { Component } from "react";
import "./styles/diceRoller.css";
import DieComponent from "./DieComponent";
import Die from "../data/DieModel";
import { GAMESTATE } from "../data/GameStateModel";
import Player from "../data/Player";

interface Props {
  rollDice: () => void;
  currentState: GAMESTATE;
  dice: Die[];
  selectDie: (index: number) => void;
  player: Player;
  advance?: () => void;
}

class DiceRoller extends Component<Props> {
  static rollFlag: boolean = false; // This is to prevent the animationEnd callback from firing more than once

  public render() {
    const { player, currentState, dice } = this.props;
    const isFighting: boolean =
      currentState === GAMESTATE.ANIMATING ||
      currentState === GAMESTATE.ENDTURN ||
      currentState === GAMESTATE.ENDGAME;

    if (currentState !== GAMESTATE.ANIMATING) {
      DiceRoller.rollFlag = false;
    }

    let dieClass: string = player.isHuman
      ? "dice-roller__die-player"
      : "dice-roller__die-enemy";

    if (isFighting) {
      if (player.isHuman) {
        dieClass += " animate-player-ready";
      } else {
        dieClass += " animate-enemy-ready";
      }
    }

    return (
      <div className="dice-roller-container">
        <div className="dice-roller__dice-row">
          {dice.map((die: Die, idx: number) => {
            const multiplierString: string =
              die.multiplier && die.multiplier > 1 ? `x${die.multiplier}` : "";

            return (
              <div className="dice-roller__lane" key={"die-container-" + idx}>
                <div className={dieClass} onTransitionEnd={this.onAnimationEnd}>
                  <div className="die-container__multiplier">
                    {multiplierString}
                  </div>
                  <DieComponent
                    num={die.number}
                    idx={idx}
                    selected={die.selected}
                    onClick={this.onDieClicked}
                    key={"die" + idx}
                    type={die.type}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  private onAnimationEnd = (a: any) => {
    if (
      this.props.currentState === GAMESTATE.ANIMATING &&
      DiceRoller.rollFlag === false
    ) {
      DiceRoller.rollFlag = true;
      this.props.advance();
    }
  };

  private onDieClicked = (index: number) => {
    this.props.selectDie(index);
  };
}

export default DiceRoller;
