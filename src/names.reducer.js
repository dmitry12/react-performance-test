import data from './data.js'
import Immutable from 'immutable'

export const DELETE_BY_ID = 'names/DELETE_BY_ID'

const initialState = {
  names: Immutable.fromJS(data),
}

export default (state = initialState, action) => {
  switch (action.type) {

    case DELETE_BY_ID:
      console.log(state, action)
      return {
        ...state,
        names: state.names.filter(n => n.get('_id') !== action.payload.id),
      }

    default:
      return state
  }
}

export const deleteById = (id) => ({
  type: DELETE_BY_ID,
  payload: { id: id },
})
