import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

//currentProduct, relatedProducts, QuestionsAndAnswers, Reviews

//currentProduct
// {
//   "id": 63609,
//   "campus": "hr-sfo",
//   "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//   "category": "Jackets",
//   "default_price": "140.00",
//   "created_at": "2021-12-21T17:19:40.556Z",
//   "updated_at": "2021-12-21T17:19:40.556Z",
//   "features": [
//       {
//           "feature": "Fabric",
//           "value": "Canvas"
//       },
//       {
//           "feature": "Buttons",
//           "value": "Brass"
//       }
//   ]
// }

// related products list
//[
//   {
//     "id": 63610,
//     "campus": "hr-sfo",
//     "name": "Bright Future Sunglasses",
//     "slogan": "You've got to wear shades",
//     "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
//     "category": "Accessories",
//     "default_price": "69.00",
//     "created_at": "2021-12-21T17:19:40.556Z",
//     "updated_at": "2021-12-21T17:19:40.556Z",
//     "features": [
//         {
//             "feature": "Lenses",
//             "value": "Ultrasheen"
//         },
//         {
//             "feature": "UV Protection",
//             "value": null
//         },
//         {
//             "feature": "Frames",
//             "value": "LightCompose"
//         }
//     ]
// },
// {
//   "id": 63611,
//     "campus": "hr-sfo",
//     "name": "Morning Joggers",
//     "slogan": "Make yourself a morning person",
//     "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
//     "category": "Pants",
//     "default_price": "40.00",
//     "created_at": "2021-12-21T17:19:40.556Z",
//     "updated_at": "2021-12-21T17:19:40.556Z",
//     "features": [
//         {
//             "feature": "Fabric",
//             "value": "100% Cotton"
//         },
//         {
//             "feature": "Cut",
//             "value": "Skinny"
//         }
//     ]
// },
// {
//   "id": 63615,
//   "campus": "hr-sfo",
//   "name": "Blues Suede Shoes",
//   "slogan": "2019 Stanley Cup Limited Edition",
//   "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
//   "category": "Dress Shoes",
//   "default_price": "120.00",
//   "created_at": "2021-12-21T17:19:40.556Z",
//   "updated_at": "2021-12-21T17:19:40.556Z",
//   "features": [
//       {
//           "feature": "Sole",
//           "value": "Rubber"
//       },
//       {
//           "feature": "Material",
//           "value": "FullControlSkin"
//       },
//       {
//           "feature": "Stitching",
//           "value": "Double Stitch"
//       }
//   ]
// }
// ]

const initialState = {}; //initial state to be determined. Hardcoded sample data for now.

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;