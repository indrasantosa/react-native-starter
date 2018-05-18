import {types} from 'mobx-state-tree'

const user = {
  email: 'indrasantosa90@gmail.com'
}

export const Session = types.model({
  email: types.string
})