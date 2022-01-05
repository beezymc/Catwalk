import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import QAWrapper from './QAWrapper.jsx';
import AnswersList from './AnswersList.jsx';
import QAList from './MainList.jsx';
import ModalQuestions from'./ModalQuestions.jsx';
import modalAnswers from './modalAnswers';



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
  }),

  rest.post('/api/questions/553807/answers', (req, res, ctx) => {
    return res({});
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('QAWrapper', () => {

  const testProduct = {
    "id": 63611,
    "campus": "hr-sfo",
    "name": "Summer Shoes",
    "slogan": "A risky call in the spring or fall",
    "description": "Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.",
    "category": "Kicks",
    "default_price": "59.00",
    "created_at": "2021-12-21T17:19:40.556Z",
    "updated_at": "2021-12-21T17:19:40.556Z",
    "features": [
      {
        "feature": "Sole",
        "value": "Rubber"
      },
    ]
  }

  test('should render questions', async () => {
    const { debug } = render(
      // <QAWrapper currentProduct="63611" />
      <QAWrapper currentProduct={testProduct} />
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

describe('ModalQuestions', () => {
  test('test form submit', async () => {
    const { getByPlaceholderText, getByText } = render(<ModalQuestions showModal='true' productId="63611" />);

    const emailInput = getByPlaceholderText('Example: jack@email.com');
    fireEvent.change(emailInput, { target: { value: "annasarafanova91@gmail.com" } });

    const questionInput = getByPlaceholderText(/Ask your question/i);
    fireEvent.change(questionInput, { target: { value: "Is it oversized" } });

    const nameInput = getByPlaceholderText('Example: jackson11');
    fireEvent.change(nameInput, { target: { value: "anna" } });

    const submitButton = getByText(/Submit Question/i);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailInput.toBeInTheDocument)
      expect(questionInput.toBeInTheDocument)
      expect(nameInput.toBeInTheDocument)
      expect(submitButton.toBeInTheDocument)
    });

    });
});

describe('modalAnswers', () => {
  test('Test form submit', async () => {
    const { getByPlaceholderText, getByText } = render(<modalAnswers showModal='true' question_id="553807" />);

    const emailInput = getByPlaceholderText(/Example: jack@email.com/i);
    fireEvent.change(emailInput, { target: { value: "annasarafanova91@gmail.com" } });

    const answerInput = getByPlaceholderText(/Your answer/i);
    fireEvent.change(questionInput, { target: { value: "Is it oversized" } });

    const nameInput = getByPlaceholderText('Example: jack543!');
    fireEvent.change(nameInput, { target: { value: "anna" } });

    const submitButton = getByText(/Submit Answer/i);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailInput.toBeInTheDocument)
      expect(answerInput.toBeInTheDocument)
      expect(nameInput.toBeInTheDocument)
      expect(submitButton.toBeInTheDocument)
    });

    });
});