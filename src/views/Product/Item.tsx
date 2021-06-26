import React, { ReactText } from 'react'
import { Item } from './style'
import { Button, Checkbox } from 'antd'

interface Iprops {
  key: string
  index: ReactText
  content: string
  completed: boolean
  deleteItem: (index: ReactText) => void
  setCompleted: (completed: boolean, index: ReactText) => void
}

const TodoListItem: React.FC<Iprops> = props => {
  const onChange = () => {
    props.setCompleted(!props.completed, props.index)
  }
  return (
    <div className="list-item-wrap" key={props.key}>
      <Checkbox onChange={onChange} checked={props.completed} />
      <Item className={props.completed ? 'completed' : ''}>{props.content}</Item>
      <Button
        className=""
        onClick={() => {
          props.deleteItem(props.index)
        }}
      >
        删除
      </Button>
    </div>
  )
}

export default React.memo(TodoListItem)
