import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import photos from './photoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  photos,
  ajaxCallsInProgress
});

export default rootReducer;
