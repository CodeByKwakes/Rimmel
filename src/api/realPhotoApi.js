import delay from './delay';
import axios from 'axios';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const photos = axios.get('http://www.mocky.io/v2/57f25dee0f00000917e252c7')
.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
//This would be performed on the server in a real app. Just stubbing in.
const generateId = (photo) => {
  return photo.firstName.toLowerCase() + '-' + photo.lastName.toLowerCase();
};

class PhotoApi {
  static getAllPhotos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], photos));
      }, delay);
    });
  }

  static savePhoto(photo) {
	photo = Object.assign({}, photo); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPhotoNameLength = 3;
        if (photo.firstName.length < minPhotoNameLength) {
          reject(`First Name must be at least ${minPhotoNameLength} characters.`);
        }

        if (photo.lastName.length < minPhotoNameLength) {
          reject(`Last Name must be at least ${minPhotoNameLength} characters.`);
        }

        if (photo.id) {
          const existingPhotoIndex = photos.findIndex(a => a.id == photo.id);
          photos.splice(existingPhotoIndex, 1, photo);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new photos in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          photo.id = generateId(photo);
          photos.push(photo);
        }

        resolve(photo);
      }, delay);
    });
  }

  static deletePhoto(photoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPhotoToDelete = photos.findIndex(photo => {
          photo.photoId == photoId;
        });
        photos.splice(indexOfPhotoToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PhotoApi;
