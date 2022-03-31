import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'
import ResultView from '../ResultView'
import OptionItem from '../OptionItem'

// const constantValue = {won: 'YOU WON', loss: 'YOU LOSS', draw: 'IT IS DRAW'}

class PlayView extends Component {
  state = {score: 0, clicked: false, clickedId: '', randomId: ''}

  onClickOption = id =>
    this.setState(prevState => ({
      clicked: !prevState.clicked,
      clickedId: id,
      randomId: ['PAPER', 'ROCK', 'SCISSORS'][Math.floor(Math.random() * 3)],
    }))

  onClickPlayAgain = () => this.setState({clicked: false})

  wonGame = () => this.setState(prevState => ({score: prevState + 1}))

  onLossGame = () => this.setState(prevState => ({score: prevState - 1}))

  render() {
    const {clicked, score, clickedId, randomId} = this.state
    const {choicesList} = this.props
    if (
      (clickedId === 'PAPER' && randomId === 'ROCK') ||
      (clickedId === 'ROCK' && randomId === 'SCISSORS') ||
      (clickedId === 'SCISSORS' && randomId === 'PAPER')
    ) {
      this.wonGame()
      console.log('Won')
    } else if (clickedId === randomId) {
      console.log('Tie')
    } else {
      console.log('Loss')
      this.onLossGame()
    }
    return (
      <div className="app-container">
        <div className="game-container">
          <div className="game-score-bar">
            <h1 className="options">Rock Paper Scissors</h1>
            <div className="score-card">
              <p className="score-text">Score</p>
              <p className="score">{score}</p>
            </div>
          </div>
          {clicked ? (
            <ResultView
              onClickPlayAgain={this.onClickPlayAgain}
              clickedId={clickedId}
              choicesList={choicesList}
              randomId={randomId}
              wonGame={this.onWonGame}
              lossGame={this.onLossGame}
            />
          ) : (
            <div className="game-options-container">
              <ul className="options-cont">
                {choicesList.map(each => (
                  <OptionItem
                    key={each.id}
                    item={each}
                    onClickItem={this.onClickOption}
                  />

                  /* <li key={each.id} onClick={this.onClickOption}>
                    <img
                      id={each.id}
                      src={each.image}
                      alt="images"
                      className="option-image"
                    />
                  </li> */
                ))}
              </ul>
            </div>
          )}
          <Popup
            modal
            trigger={
              <button type="button" className="rules-btn">
                Rules
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="popup-page">
                <div className="popup-container">
                  <button
                    type="button"
                    className="cancel"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </button>

                  <img
                    className="rules-img"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default PlayView
