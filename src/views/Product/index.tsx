import React, { useState, ReactText, Dispatch } from 'react'
import { TodoList } from './style'
import { Input, Button } from 'antd'
import TodoListItem from './Item'
import { useSelector, useDispatch } from 'react-redux'
import { ListProps, ListStateProps } from '@/store/reudcers/product'
import { updateTodoList, deleteListItem, completeItem } from '@/store/actions/product'

// interface List {
//   key: string
//   content: string
//   completed: boolean
// }

const Product: React.FC = () => {
  const [value, setValue] = useState('')
  // const [list, setList] = useState<List[]>([])
  const list = useSelector((state: { product: ListStateProps }) => state.product.listInfo)
  const dispatch: Dispatch<Function> = useDispatch()

  const addItem = () => {
    // setList([
    //   ...list,
    //   {
    //     key: value,
    //     content: value,
    //     completed: false
    //   }
    // ])
    const temp = {
      key: value,
      content: value,
      completed: false
    }
    dispatch(updateTodoList(list, temp))
    setValue('')
    console.log('success')
  }

  const deleteItem = (index: ReactText) => {
    dispatch(deleteListItem(list, index))
    // list.splice(Number(index), 1)
    // setList([...list])
  }

  const setCompleted = (completed: boolean, index: ReactText) => {
    dispatch(completeItem(list, completed, index))
    // list[Number(index)]['completed'] = completed
    // setList([...list])
  }

  return (
    <TodoList>
      <div className="title">Todo-List</div>
      <div className="input">
        <Input
          placeholder="Basic usage"
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        />
        <Button className="input-btn" onClick={addItem}>
          添加
        </Button>
      </div>
      <div className="list">
        {list.map((e: ListProps, index: ReactText) => {
          return (
            <TodoListItem
              key={e.key}
              index={index}
              content={e.content}
              completed={e.completed}
              deleteItem={deleteItem}
              setCompleted={setCompleted}
            />
          )
        })}
      </div>
    </TodoList>
  )
}

export default React.memo(Product)
