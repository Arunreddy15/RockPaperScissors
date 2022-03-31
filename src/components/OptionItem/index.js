import '../PlayView/index.css'

const OptionItem = props => {
  const {item, onClickItem} = props
  const {id, image} = item

  const onClickOption = () => onClickItem(id)
  return (
    <li>
      <button
        type="button"
        onClick={onClickOption}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <img id={id} src={image} alt="images" className="option-image" />
      </button>
    </li>
  )
}
export default OptionItem
