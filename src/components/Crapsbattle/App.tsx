import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameStateModel, {
  GAMESTATE,
  WINNER,
  GAMETYPE,
} from "./data/GameStateModel";
import Player from "./data/Player";
import Die from "./data/DieModel";
import PlayerInfo from "./components/PlayerInfo";
import DamageDisplayTotal from "./components/DamageDisplayTotal";
import {
  Popover,
  Pane,
  Text,
  Button,
  Position,
  Heading,
  Spinner,
} from "evergreen-ui";

interface Props {}
interface State {
  currentState: GAMESTATE;
  showModal: boolean;
  isConnected: boolean;
}

class App extends Component<Props, State> {
  private mGameModel: GameStateModel;

  constructor(props) {
    super(props);

    this.mGameModel = new GameStateModel();
    this.mGameModel.onFight = this.onUpdateState.bind(this);
    this.mGameModel.forceUpdate = this.forceUpdate.bind(this);
    this.state = {
      currentState: this.mGameModel.currentState,
      showModal: false,
      isConnected: false,
    };
  }

  render() {
    const { human, enemyDamage, playerDamage, currentState, isMultiplayer } =
      this.mGameModel;
    const playerDice = human.rolledDice;
    const isEndOfGame = currentState === GAMESTATE.ENDGAME;
    const showDamage =
      currentState === GAMESTATE.ENDGAME || currentState === GAMESTATE.ENDTURN;
    const isStartofNewGame =
      currentState === GAMESTATE.STARTGAME ||
      currentState === GAMESTATE.CONNECTING;

    const { isConnected } = this.state;

    console.log("app.tsx: ", this.state.currentState);

    return (
      <div className="Craps-App">
        <PlayerInfo
          isHuman={false}
          hp={this.mGameModel.enemy.hp}
          maxHp={this.mGameModel.enemy.maxHp}
          currentState={this.mGameModel.currentState}
          reset={this.reset}
          advance={this.advance}
        />

        <div className="damage-display-total__container">
          <DamageDisplayTotal
            currentState={currentState}
            damage={enemyDamage}
          />
        </div>

        {this.renderPopover()}

        <GameBoard
          rollDice={this.rollDice}
          playerDice={playerDice}
          currentTurn={this.mGameModel.turn}
          currentState={this.state.currentState}
          selectDie={this.selectDie}
          advance={this.advance}
          players={this.mGameModel.players}
          lanes={this.mGameModel.lanes}
        />

        <div className="damage-display-total__container">
          <DamageDisplayTotal
            currentState={currentState}
            damage={playerDamage}
          />
        </div>

        <PlayerInfo
          isHuman={true}
          hp={this.mGameModel.human.hp}
          maxHp={this.mGameModel.human.maxHp}
          currentState={this.mGameModel.currentState}
          reset={this.reset}
          advance={this.advance}
        />
      </div>
    );
  }

  private renderPopover = () => {
    const { currentState } = this.mGameModel;
    const isStartofNewGame =
      currentState === GAMESTATE.STARTGAME ||
      currentState === GAMESTATE.CONNECTING;
    const isShown = isStartofNewGame || currentState === GAMESTATE.ENDGAME;

    return (
      <Popover
        content={
          <Pane
            width={340}
            height={340}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            {isStartofNewGame
              ? this.renderStartGamePopover()
              : this.renderEndGamePopover()}
          </Pane>
        }
        position={Position.BOTTOM}
        isShown={isShown}
      >
        <Pane width={0} alignSelf="center" />
      </Popover>
    );
  };

  private renderStartGamePopover = () => {
    const { currentState } = this.mGameModel;

    if (currentState === GAMESTATE.CONNECTING) {
      return (
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={340}
        >
          <Spinner />
          <Text marginY={50}>Connecting...</Text>
        </Pane>
      );
    } else if (currentState === GAMESTATE.STARTGAME) {
      return (
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          height={340}
        >
          <Heading size={900} marginY={25}>
            Craps Battle!
          </Heading>
          <div className="new-game-separator" />
          <Text size={500} marginY={50}>
            Start a New Game
          </Text>
          <Pane
            height={120}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <Button
              onClick={() => {
                this.reset(GAMETYPE.SINGLEPLAYER);
                this.advance();
              }}
            >
              New Single Player Game
            </Button>
            <Button
              disabled
              onClick={() => {
                // this.reset(GAMETYPE.MULTIPLAYER);
                // this.advance();
              }}
            >
              New Multiplayer Game
            </Button>
          </Pane>
        </Pane>
      );
    }
  };

  private renderEndGamePopover = () => {
    return (
      <Pane
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        height={340}
      >
        <Heading size={900}>{this.getWinMessage()}</Heading>
        <Button onClick={() => this.reset()}>Reset</Button>
      </Pane>
    );
  };

  private rollDice = () => {
    this.mGameModel.rollDice();
    this.setState({
      currentState: this.mGameModel.currentState,
    });
  };

  private selectDie = (index: number) => {
    const player: Player = this.mGameModel.players.find(
      (player) => player.isHuman
    );

    player.rolledDice = player.rolledDice.map((aDie: Die, idx: number) => {
      if (idx === index) {
        aDie.selected = !aDie.selected;
      }
      return aDie;
    });

    this.setState({
      currentState: this.mGameModel.currentState,
    });
  };

  private advance = () => {
    let showModal: boolean = false;
    if (this.mGameModel.currentState === GAMESTATE.ENDGAME) {
      this.reset();
    } else {
      console.log("advance before: ", this.mGameModel.currentState);
      this.mGameModel.advance();
      console.log("advance after: ", this.mGameModel.currentState);
      showModal = this.mGameModel.winner !== WINNER.NONE;
      this.setState({
        currentState: this.mGameModel.currentState,
        showModal,
      });
    }
  };

  private reset = (gameType: GAMETYPE = GAMETYPE.SINGLEPLAYER) => {
    this.mGameModel = new GameStateModel(gameType);
    this.mGameModel.onFight = this.onUpdateState.bind(this);
    this.mGameModel.forceUpdate = this.forceUpdate.bind(this);
    this.setState({
      currentState: this.mGameModel.currentState,
    });
  };

  private getWinMessage() {
    if (this.mGameModel.winner === WINNER.PLAYER) {
      return "You Win!";
    } else if (this.mGameModel.winner === WINNER.ENEMY) {
      return "You Lose!";
    } else {
      return "Tie!";
    }
  }

  private onUpdateState() {
    this.setState({ currentState: this.mGameModel.currentState });
  }
}

export default App;
