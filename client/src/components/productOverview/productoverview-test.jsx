import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { Cart } from './Cart.jsx';
import { Style } from './Style.jsx';
import { Description } from './Description.jsx';

const server = setupServer(
  rest.get('/api/styles', (req, res, ctx) => {
    return res(ctx.json({
      "product_id": "63611",
      "results": [
        {
          "product_id": "63611",
          "results": [
              {
                  "style_id": 391656,
                  "name": "Black",
                  "original_price": "40.00",
                  "sale_price": null,
                  "default?": true,
                  "photos": [
                      {
                          "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                          "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                      }
                  ],
                  "skus": {
                      "2275525": {
                          "quantity": 8,
                          "size": "XS"
                      },
                      "2275526": {
                          "quantity": 16,
                          "size": "S"
                      }
                  }
              },
              {
                  "style_id": 391657,
                  "name": "Grey",
                  "original_price": "40.00",
                  "sale_price": null,
                  "default?": false,
                  "photos": [
                      {
                          "thumbnail_url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                          "url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
                      }
                  ],
                  "skus": {
                      "2275531": {
                          "quantity": 8,
                          "size": "XS"
                      },
                      "2275532": {
                          "quantity": 16,
                          "size": "S"
                      }
                  }
              },
              {
                  "style_id": 391658,
                  "name": "Goldenrod",
                  "original_price": "40.00",
                  "sale_price": "35.00",
                  "default?": false,
                  "photos": [
                      {
                          "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                          "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                      }
                  ],
                  "skus": {
                      "2275537": {
                          "quantity": 8,
                          "size": "XS"
                      }
                  }
              },
              {
                  "style_id": 391659,
                  "name": "Maroon",
                  "original_price": "40.00",
                  "sale_price": "35.00",
                  "default?": false,
                  "photos": [
                      {
                          "thumbnail_url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                          "url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                      }
                  ],
                  "skus": {
                      "2275543": {
                          "quantity": 8,
                          "size": "XS"
                      },
                      "2275544": {
                          "quantity": 16,
                          "size": "S"
                      }
                  }
              },
              {
                  "style_id": 391660,
                  "name": "Chartreuse",
                  "original_price": "40.00",
                  "sale_price": "25.00",
                  "default?": false,
                  "photos": [
                      {
                          "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                          "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                      }
                  ],
                  "skus": {
                      "2275549": {
                          "quantity": 8,
                          "size": "XS"
                      },
                      "2275550": {
                          "quantity": 16,
                          "size": "S"
                      }
                  }
              },
              {
                  "style_id": 391661,
                  "name": "White",
                  "original_price": "40.00",
                  "sale_price": null,
                  "default?": false,
                  "photos": [
                      {
                          "thumbnail_url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                          "url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                      },
                  ],
                  "skus": {
                      "2275555": {
                          "quantity": 8,
                          "size": "XS"
                      },
                      "2275556": {
                          "quantity": 16,
                          "size": "S"
                      }
                  }
              }
          ]
      }
      ]
    })
    );
  }),
  // add more rest.get here
)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('DescriptionWrapper', () => {

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

  test('should render default price if no sale', async () => {
    const { debug } = render(
      <Description product={testProduct} />
    )
   await waitFor(() => {
     expect(screen.getByText('59.00').toBeInTheDocument)
   });
  });
});
