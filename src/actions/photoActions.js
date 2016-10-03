/*This file hold our Course related Action Creators*/
import * as types from './actionTypes';
// import CourseApi from '../api/mockCourseApi';
// import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

/*export function createCourse(course){
  return { type: types.CREATE_COURSE, course};
}*/
export function loadPhotosSussess(photos){
  return { type: types.LOAD_PHOTOS_SUCCESS, photos};
}

/*export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}
*/

/*Thunk*/
// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.

/*export function loadPhotos(){
  return function(dispatch){
    // dispatch(beginAjaxCall());
    return CourseApi.getAllPhotos().then(photos => {
      dispatch(loadPhotosSussess(photos));
    }).catch(error => {
      throw(error);
    });
  };
}*/

/*export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
*/
