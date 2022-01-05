import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import RelatedItemsWrapper from './RelatedItemsWrapper.jsx';
import RelatedItemCarousel from './RelatedItemCarousel.jsx';
import RelatedItem from './RelatedItem.jsx';
import CompareItem from './CompareItem.jsx';
import StarRating from './StarRating.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import OutfitItem from './OutfitItem.jsx';
import '@testing-library/jest-dom';
import { MemoryRouter, BrowserRouter, Routes, Route, Router, Link, ReactRouter } from 'react-router-dom';
import {createMemoryHistory} from 'history';

afterEach(() => {
  jest.resetAllMocks();
});

describe('RelatedItemsWrapper', () => {
  const testProduct = {
    "id": 63617,
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
  test('renders loading bar when the current product is empty', () => {
    render(<RelatedItemsWrapper currentProduct={{}} />);
    const displayedImage = screen.getByRole('img');
    expect(displayedImage).toHaveAttribute('src', 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg');
  });
  test('renders two carousels when the current product is present', () => {
    render(<RelatedItemsWrapper currentProduct={testProduct} />);
    expect(screen.getByText('Your Outfits')).toBeInTheDocument();
    expect(screen.getByText('Related Products')).toBeInTheDocument();
  });
});

describe('RelatedItemCarousel', () => {
  const testProduct = {
    id: 63617,
    campus: "hr-sfo",
    name: "Summer Shoes",
    slogan: "A risky call in the spring or fall",
    description: "Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.",
    category: "Kicks",
    default_price: "59.00",
    created_at: "2021-12-21T17:19:40.556Z",
    updated_at: "2021-12-21T17:19:40.556Z",
    features: [
      {
        feature: "Sole",
        value: "Rubber"
      },
    ]
  }
  test('renders error message when retrieving related product data resulted in error', async () => {
    render(
      <MemoryRouter initialEntries={['/product/1337']}>
        <RelatedItemCarousel currentProduct={{}}/>
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText('Error Retrieving Related Items. Please Try Again.'));
    expect(screen.getByText('Error Retrieving Related Items. Please Try Again.')).toBeInTheDocument();
  });
  test('renders no related products message when the item has no related products', async () => {
    render(
      <MemoryRouter initialEntries={['/product/63618']}>
        <RelatedItemCarousel currentProduct={{}}/>
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText('No related products found.'));
    expect(screen.getByText('No related products found.')).toBeInTheDocument();
  });
  test('renders related products when the item has related products', async () => {
    // const history = createMemoryHistory();
    // history.push('/product/63617');
    // jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ productId: 63617})
    // render(
    //   <MemoryRouter location={history.location} navigator={history} history={history}>
    //     <RelatedItemCarousel currentProduct={testProduct} handleProductInit={() => {}}/>
    //   </MemoryRouter>
    // );
    // await waitFor(() => screen.getAllByRole('img'));
    // expect(screen.getAllByRole('img')).toEqual(6);
  });
  test('if the carousel isn\'t overflowing, arrows should be hidden', () => {
  });
  test('if the carousel is overflowing and at the left edge, the left arrow should be hidden and the right visible', () => {
  });
  test('if the carousel is overflowing and at the right edge, the right arrow should be hidden and the left visible', () => {
  });
  test('if the carousel is overflowing and at neither edge, both arrows should be visible', () => {
  });
  test('if the right arrow is visible and clicked, the carousel will shift right the card width', () => {

  });
  test('if the left arrow is visible and clicked, the carousel will shift left the card width', () => {

  });
});

describe('CompareItem', () => {
  const testProductA = {
    "name": "Summer Shoes",
    "features": [
      {
        "feature": "Sole",
        "value": "Rubber"
      },
    ]
  }
  const testProductB = {
    "name": "Summer Shoes",
    "features": []
  }
  test('renders two checkmarks if products have a matching feature', () => {
    render(<CompareItem currentProduct={testProductA} relatedItem={testProductA} togglePopup={() => {}}/>);
    const count = screen.getAllByText('✔');
    expect(count.length).toEqual(2);
  });
  test('renders one checkmark if currentProduct has a feature relatedItem doesn\'t', () => {
    render(<CompareItem currentProduct={testProductA} relatedItem={testProductB} togglePopup={() => {}}/>);
    const count = screen.getAllByText('✔');
    expect(count.length).toEqual(1);
  });
  test('renders one checkmark if relatedItem has a feature currentProduct doesn\'t', () => {
    render(<CompareItem currentProduct={testProductB} relatedItem={testProductA} togglePopup={() => {}}/>);
    const count = screen.getAllByText('✔');
    expect(count.length).toEqual(1);
  });
});

describe('StarRating', () => {
  test('renders five svgs upon receiving a rating of 5.00', () => {
    render(<StarRating rating={5.00} />);
    const count = screen.getAllByTitle('Filled Star');
    expect(count.length).toEqual(5);
  });
  test('renders five svgs upon receiving a rating of 3.75', () => {
    render(<StarRating rating={3.75} />);
    const countFilled = screen.getAllByTitle('Filled Star');
    const countThreeQuart = screen.getAllByTitle('Three Quarter Star');
    const countEmpty = screen.getAllByTitle('Empty Star');
    expect(countFilled.length).toEqual(3);
    expect(countThreeQuart.length).toEqual(1);
    expect(countEmpty.length).toEqual(1);
  });
  test('renders five svgs upon receiving a rating of 2.25', () => {
    render(<StarRating rating={2.25} />);
    const countFilled = screen.getAllByTitle('Filled Star');
    const countQuart = screen.getAllByTitle('Quarter Star');
    const countEmpty = screen.getAllByTitle('Empty Star');
    expect(countFilled.length).toEqual(2);
    expect(countQuart.length).toEqual(1);
    expect(countEmpty.length).toEqual(2);
  });
  test('renders five svgs upon receiving a rating of 1.5', () => {
    render(<StarRating rating={1.5} />);
    const countFilled = screen.getAllByTitle('Filled Star');
    const countHalf = screen.getAllByTitle('Half Star');
    const countEmpty = screen.getAllByTitle('Empty Star');
    expect(countFilled.length).toEqual(1);
    expect(countHalf.length).toEqual(1);
    expect(countEmpty.length).toEqual(3);
  });
});

describe('OutfitCarousel', () => {
  const testProduct = {
    category: "Kicks",
    default_price: "450.00",
    id: 63616,
    name: "YEasy 350",
  }
  const testProductReviews = {
    ratings: {
      1: '3',
      3: '3',
      4: '3',
      5: '5'
    }
  }
  const testProductStyles = {
    results: [
      {
        original_price: "120.00",
        photos: [
          {
            thumbnail_url: "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            url: "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          }
        ],
        sale_price: null
      }
    ]
  }
  const setMockRefElement = (node) => {
    const mockRef = {
      get current() {
        return node;
      },
      set current(_value) {},
    };
    jest.spyOn(React, 'useRef').mockReturnValue(mockRef);
  };

  test('renders a new outfit item when the \'add outfit\' card is clicked', () => {
    render(<OutfitCarousel currentProduct={testProduct} currentProductStyles={testProductStyles} currentProductReviews={testProductReviews} />);
    fireEvent.click(screen.getByText('Add New Outfit'));
    expect(screen.getByText('Kicks')).toBeInTheDocument();
  });
  test('renders only one outfit if the \'add outfit\' card is clicked when one outfit with that id is already rendered', () => {
    render(<OutfitCarousel currentProduct={testProduct} currentProductStyles={testProductStyles} currentProductReviews={testProductReviews} />);
    fireEvent.click(screen.getByText('Add New Outfit'));
    fireEvent.click(screen.getByText('Add New Outfit'));
    expect(screen.getAllByText('Kicks').length).toEqual(1);
  });
  test('removes a previously-added outfit item when the \'remove outfit\' symbol is clicked', () => {
    render(<OutfitCarousel currentProduct={testProduct} currentProductStyles={testProductStyles} currentProductReviews={testProductReviews} />);
    fireEvent.click(screen.getByText('Add New Outfit'));
    expect(screen.getByText('Kicks').toBeInTheDocument);
    fireEvent.click(screen.getByText('X'));
    expect(screen.queryByText('Kicks')).toEqual(null);
  });
  test('if the carousel isn\'t overflowing, arrows should be hidden', () => {
    setMockRefElement({ clientWidth: 1500, scrollWidth: 1500 });
    render(<OutfitCarousel />);
    expect(screen.queryByTitle('Left Arrow')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Right Arrow')).not.toBeInTheDocument();
  });
  test('if the carousel is overflowing and at the left edge, the left arrow should be hidden and the right visible', () => {
    // setMockRefElement({ offsetWidth: 300, scrollWidth: 1500, scrollLeft: 0 });
    // render(<OutfitCarousel currentProduct={testProduct} currentProductStyles={testProductStyles} currentProductReviews={testProductReviews} />);
    // fireEvent.click(screen.getByText('Add New Outfit'));
    // expect(screen.queryByTitle('Left Arrow')).not.toBeInTheDocument();
    // expect(screen.getByTitle('Right Arrow')).toBeInTheDocument();
  });
  test('if the carousel is overflowing and at the right edge, the right arrow should be hidden and the left visible', () => {
  });
  test('if the carousel is overflowing and at neither edge, both arrows should be visible', () => {
  });
  test('if the right arrow is visible and clicked, the carousel will shift right the card width', () => {

  });
  test('if the left arrow is visible and clicked, the carousel will shift left the card width', () => {

  });
});

describe('OutfitItem', () => {
  test('renders original price only if no sale', () => {
  });
  test('renders sale and original price if on sale', () => {
  });
});

describe('RelatedItem', () => {
  const testRelatedItem = {
    data: {
      category: 'Jackets',
      default_price: "140.00",
      features: [
        {
          feature: "Fabric",
          value: "Canvas"
        },
        {
          feature: "Buttons",
          value: "Brass"
        }
      ],
      id: 63609,
      name: "Camo Onesie"
    }
  }
  const testCurrentProduct = {
    category: 'Dress Shoes',
    default_price: "120.00",
    features: [
      {
        feature: "Fabric",
        value: "Canvas"
      },
      {
        feature: "Buttons",
        value: "Brass"
      }
    ],
    id: 63615,
    name: "Blues Suede Shoes"
  }
  const testRelatedStyle = {
    data: {
      results: [
        {
          original_price: "140.00",
          sale_price: null,
          photos: [
            {
              thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            }
          ]
        }
      ]
    }
  }
  const testRelatedItemReview = {
    data: {
      ratings: {
        1: "8",
        3: "1",
        4: "19",
        5: "36"
      }
    }
  }
  test('renders original price only if no sale', async () => {
    // const history = createMemoryHistory();
    // history.push('/product/63615');
    // render(
    //   <Router location={history.location} navigator={history} history={history}>
    //     <RelatedItem
    //       key={63609}
    //       currentProduct={testCurrentProduct}
    //       relatedItem={testRelatedItem}
    //       relatedStyle={testRelatedStyle}
    //       relatedItemReview={testRelatedItemReview}
    //       handleProductInit={() => {}}
    //     />
    //   </Router>
    // );
    // await waitFor(() => screen.getByText('140.00'));
    // expect(screen.getByText('140.00')).toBeInTheDocument();
  });
  test('renders sale and original price if on sale', () => {
  });
  test('when popup event is triggered, the compare window renders', () => {
  });
  test('when popup event is triggered twice, the compare window no longer renders', () => {
  });
  test('if props have not yet been passed in, the loading image renders', () => {
  });
});