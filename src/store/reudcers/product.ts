import { UPDATETODOLIST, DELETEITEM, COMPLETEITEM } from '@/store/constants'
import produce from 'immer'

export interface ListProps {
  key: string
  content: string
  completed: boolean
}

export interface ListStateProps {
  listInfo: ListProps[]
}

export const defaultState: ListStateProps = {
  listInfo: [
    {
      key: 'react',
      content: 'react',
      completed: false
    },
    {
      key: 'vue',
      content: 'vue',
      completed: false
    }
  ]
}

interface Iactions {
  type: string
  value: any
}

export default produce((draftState = defaultState, action: Iactions): ListStateProps => {
  switch (action.type) {
    case UPDATETODOLIST:
    case DELETEITEM:
    case COMPLETEITEM:
      draftState.listInfo = action.value
      break
    default:
      return draftState
  }
  return draftState
})
