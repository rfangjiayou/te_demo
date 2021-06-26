import { UPDATETODOLIST, DELETEITEM, COMPLETEITEM } from '@/store/constants'
import { List } from 'antd/lib/form/Form'
import { ReactText } from 'react'
import { ListProps } from '../reudcers/product'

export const completeItem = (list: ListProps[], completed: boolean, index: ReactText) => {
  return (dispatch: any) => {
    const temp = JSON.parse(JSON.stringify(list))
    temp[Number(index)]['completed'] = completed
    const arr = {
      type: COMPLETEITEM,
      value: temp
    }
    dispatch(arr)
  }
}

export const deleteListItem = (list: ListProps[], index: ReactText) => {
  return (dispatch: any) => {
    const temp = [...list]
    temp.splice(Number(index), 1)
    const arr = {
      type: DELETEITEM,
      value: temp
    }
    dispatch(arr)
  }
}

export const updateTodoList = (list: ListProps[], res: ListProps) => {
  return (dispatch: any) => {
    const temp = [...list]
    temp.push(res)
    const arr = {
      type: UPDATETODOLIST,
      value: temp
    }
    dispatch(arr)
  }
}
