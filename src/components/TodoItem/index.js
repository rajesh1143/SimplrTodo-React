import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails

  const onClickDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button className="delete-btn" type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
