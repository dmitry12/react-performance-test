import data from './data.js'

export const DELETE_BY_ID = 'names/DELETE_BY_ID'

const initialState = {};
const initialIds = [];

for (let i = 0; i < data.length; i++) {
  initialState[data[i]['_id']] = data[i]
  initialIds.push(data[i]['_id']);
}

function ids(state = initialIds, action) {
  switch (action.type) {

    case DELETE_BY_ID:
      return state.filter(n => n !== action.payload.id)

    default:
      return state
  }
}

const names = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default (state = {}, action) => {
  return {
    ids: ids(state.ids, action),
    names: names(state.names, action),
  }
}

export const deleteById = (id) => ({
  type: DELETE_BY_ID,
  payload: { id: id },
})
