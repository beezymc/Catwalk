// import React from 'react';
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
// import {render, fireEvent, waitFor, screen} from '@testing-library/react';
// import '@testing-library/jest-dom';
// import QAWrapper from './QAWrapper.jsx';
// import QAList from './MainList.jsx';
// import 'regenerator-runtime/runtime';


// const server = setupServer(
//   rest.get('/greeting', (req, res, ctx) => {
//     return res(ctx.json({greeting: 'hello there'}));
//   }),
//   rest.get('/api/questions', (req, res, ctx) => {
//     return res(ctx.json({
//       'product_id': '63609',
//       'results': [
//         {
//           'question_id': 563233,
//           'question_body': 'Hello I spilled milk on this product and I can\'t believe it doesn\'t clean itself',
//           'question_date': '2022-01-03T00:00:00.000Z',
//           'asker_name': 'Eric L',
//           'question_helpfulness': 18,
//           'reported': false,
//           'answers': {
//             '5269280': {
//               'id': 5269280,
//               'body': 'nevermind I gave it to my cat he loves it',
//               'date': '2022-01-03T00:00:00.000Z',
//               'answerer_name': 'Eric L',
//               'helpfulness': 7,
//               'photos': []
//             },
//             '5269287': {
//               'id': 5269287,
//               'body': 'hello does anyone know of carpet cleaning services in my area?',
//               'date': '2022-01-03T00:00:00.000Z',
//               'answerer_name': 'Eric L',
//               'helpfulness': 4,
//               'photos': [
//                 'Not a valid url'
//               ]
//             }
//           }
//         }
//       ]
//     })
//     );
//   }
//   )
// );


// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());


// // describe('QAWrapper', () => {
// //   test('renders QAWrapper component', () => {
// //     render(<QAWrapper />);
// //   });
// // });


// describe('QAList', () => {
//   test('renders QAList component', () => {
//     render(<QAList />);
//   });

//   //main list needs an id on props
//   test('renders 1 question when provided 1 question', () => {
//     render(<QAList productId={63609} />);
//   });
// });







// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// // import QAWrapper from './QAWrapper.jsx';
// // import QAList from './MainList.jsx';
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
// import 'regenerator-runtime/runtime'

// // declare which API requests to mock
// const server = setupServer(
//   // capture "GET /greeting" requests
//   rest.get('/api/questions', (req, res, ctx) => {
//     // respond using a mocked JSON body
//     return res(ctx.json({greeting: 'hello there'}))
//   }),
// )

// // establish API mocking before all tests
// beforeAll(() => server.listen())
// // reset any request handlers that are declared as a part of our tests
// // (i.e. for testing one-time error scenarios)
// afterEach(() => server.resetHandlers())
// // clean up once the tests are done
// afterAll(() => server.close())


// test('handlers server error', async () => {
//   server.use(
//     // override the initial "GET /greeting" request handler
//     // to return a 500 Server Error
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(200))
//     }),
//   )

//   // ...
// })












// //describe
// //test if up to 4 initial questions are rendered

// // describe('QAListEntry', () => {
// //   test('renders QAListEntry component', () => {
// //     render(<QAListEntry />)
// //   });
// // });


// __tests__/fetch.test.js




// WORKING EXAMPLE
/*
const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)
test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})

test('handles server error', async () => {
  server.use(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )

  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toBeDisabled()
})
*/

