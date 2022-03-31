import './index.css'

const ResultView = props => {
  const {
    onClickPlayAgain,
    clickedId,
    choicesList,
    randomId,
    wonGame,
    lossGame,
  } = props
  //   console.log(clickedId, choicesList)

  const your = choicesList.filter(each => each.id === clickedId)

  console.log(your[0].id, '------', randomId)
  const {image} = your[0]
  //   let status = ''
  //   if (
  //     (your[0].id === 'PAPER' && choicesList[randomId].id === 'ROCK') ||
  //     (your[0].id === 'ROCK' && choicesList[randomId].id === 'SCISSORS') ||
  //     (your[0].id === 'SCISSORS' && choicesList[randomId].id === 'PAPER')
  //   ) {
  //     // wonGame()
  //     status = 'Won'
  //     console.log('Won')
  //   } else if (your[0].id === choicesList[randomId].id) {
  //     status = 'Tie'
  //     console.log('Tie')
  //   } else {
  //     status = 'Loss'
  //     console.log('Loss')
  //     // lossGame()
  //   }
  const imgg = choicesList.filter(each => each.id === randomId)
  //   console.log('imggg', imgg)
  const onClickPlay = () => onClickPlayAgain()
  return (
    <div className="result">
      <div className="optionsChoice">
        <div>
          <h3>You</h3>
          <img src={image} alt="you" className="yourOption" />
        </div>
        <div>
          <h3>Opponent</h3>
          <img src={imgg[0].image} alt="opponent" className="yourOpponent" />
        </div>
      </div>
      {/* <h1 className="gameStatus">{status}</h1> */}
      <button type="button" onClick={onClickPlay} className="playAgainBtn">
        Play Again
      </button>
    </div>
  )
}
export default ResultView
