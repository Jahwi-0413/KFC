import ReactDom from 'react-dom'
const EditorModal = (props) =>
{
  return (
    <div>
      <div>
        <button type="button" onClick={props.close}>close</button>
      </div>
    </div>
  )
}

export default EditorModal