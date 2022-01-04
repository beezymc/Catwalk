import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import QAWrapper from './QAWrapper.jsx';
import AnswersList from './AnswersList.jsx';
import QAList from './MainList.jsx';


const server = setupServer(
  rest.get('/api/questions', (req, res, ctx) => {
    return res(ctx.json({
      "product_id": "63611",
      "results": [
        {
          "question_id": 553807,
          "question_body": "Where does this product ship from?",
          "question_date": "2017-11-04T00:00:00.000Z",
          "asker_name": "toofast",
          "question_helpfulness": 23,
          "reported": false,
          "answers": {
            "5181622": {
              "id": 5181622,
              "body": "Mine was delivered from Oklahoma",
              "date": "2017-11-04T00:00:00.000Z",
              "answerer_name": "toofast",
              "helpfulness": 27,
              "photos": []
            },
            "5181633": {
              "id": 5181633,
              "body": "It ships from the facility in Tulsa",
              "date": "2017-11-04T00:00:00.000Z",
              "answerer_name": "toofast",
              "helpfulness": 23,
              "photos": []
            }
          }
        }
      ]
    })
    );
  }),
  rest.get('/api/questions/553807/answers', (req, res, ctx) => {
    const count = req.url.searchParams.get('count')
    const page = req.url.searchParams.get('page')

    return res(ctx.json({
      "question": "553807",
      "page": "1",
      "count": "2",
      "results": [
        {
          "answer_id": 5181622,
          "body": "Mine was delivered from Oklahoma",
          "date": "2017-11-04T00:00:00.000Z",
          "answerer_name": "toofast",
          "helpfulness": 27,
          "photos": []
        },
        {
          "answer_id": 5181633,
          "body": "It ships from the facility in Tulsa",
          "date": "2017-11-04T00:00:00.000Z",
          "answerer_name": "toofast",
          "helpfulness": 23,
          "photos": []
        }
      ]
    })
    );
  }),
  rest.post('/api/questions/', (req, res, ctx) => {
    return res({});
  })
)


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('QAList', () => {
  test('should render questions', async () => {
    const { debug } = render(
      <QAList productId="63611" />
    )
    //todo: add more verifications
    await waitFor(() => {
      expect(screen.getByText('Q: Where does this product ship from?').toBeInTheDocument)
      expect(screen.getByText('Helpful?').toBeInTheDocument)
      expect(screen.getByText('Yes(23)').toBeInTheDocument)
    });
  });

});


describe('AnswersList', () => {
  test('should render answers', async () => {
    const { debug } = render(
      <AnswersList question_id="553807" />
    )
    //todo: add more verifications
    await waitFor(() => {
      //string should 100% match otherwise use regexp /string/
      expect(screen.getByText('Mine was delivered from Oklahoma').toBeInTheDocument)
      expect(screen.getByText('Yes(27)').toBeInTheDocument)
      expect(screen.getByText('It ships from the facility in Tulsa').toBeInTheDocument)
      expect(screen.getByText('Yes(23)').toBeInTheDocument)
    });
  });

});

