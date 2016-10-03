import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const photos = [
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/12501993_1504179163220771_2060674913_n.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/1516572_445736812276082_2116173059_n.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/10723795_1149927178351091_1859033096_n.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg",
    title: "Totally need to try this.",
    author: "heavymetaladam"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg",
    title: "Wes. WE should have lunch.",
    author: "jdaveknox"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg",
    title: "#adults",
    author: "jdaveknox"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg",
    title: "@jdaveknox yes!",
    author: "wesbos"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12331739_1671776806423597_995664526_n.jpg",
    title: "😍 love Hamilton!",
    author: "willowtreemegs"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg",
    title: "Those are cute! They're like silver dollar pancakes.",
    author: "rrsimonsen"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg",
    title: "I like baby pancakes but gluten free please!! I'll bring the coffee!! See you in 6 days!!!!!! 😝😛😝♥️",
    author: "terzisn"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg",
    title: "... and apparently growing baby. 👀. Yum.",
    author: "henrihelvetica"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg",
    title: "@wesbos 👍 my daughter is a pancake eating machine!",
    author: "brentoage"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg",
    title: "Nice stove!",
    author: "haaps"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg",
    title: "Genius bottle use! Do you make a single batch of batter or make a lot and freeze it?",
    author: "gobananna"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg",
    title: "@gobananna I just made a batch and put in in a FIFO bottle. Keeps in the fridge for a few days.",
    author: "wesbos"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg",
    title: "@haaps thanks! It's a Jenn air - so nice to cool with!",
    author: "wesbos"
  },
  {
    img: "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg",
    title: "Where would you go and for how long, if you had location freedom? - Greg 🌎",
    author: "world_greg"
  }
];

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
