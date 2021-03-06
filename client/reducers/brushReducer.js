import { SET_BRUSH_COLOUR, SET_BRUSH_SIZE } from '../actions'

const initialState = {
  colour: {
    r: 239,
    g: 201,
    b: 76,
    a: 255
  },
  size: 20
}

function brushReducer (state = initialState, action) {
  switch (action.type) {
    case SET_BRUSH_COLOUR:
      return {
        colour: action.colour,
        size: state.size
      }
    case SET_BRUSH_SIZE:
      return {
        colour: state.colour,
        size: action.size
      }
    default:
      return state
  }
}

export default brushReducer
