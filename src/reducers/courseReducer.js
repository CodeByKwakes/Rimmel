import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
    // debugger;

    // can not do this way as it will mutante the state
    /*state.push(action.course);
    return state;*/

    return [...state,
      Object.assign({}, action.course)
    ];

    default:
    return state;
  }
}