import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import RelatedItemsWrapper from './RelatedItemsWrapper.jsx';
import RelatedItemCarousel from './RelatedItemCarousel.jsx';
import CompareItem from './CompareItem.jsx';
import StarRating from './StarRating.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import '@testing-library/jest-dom';
import store from '../../redux/store/store.js';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, {wrapper: BrowserRouter});
};

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
  test('renders error message when retrieving related product data resulted in error', async () => {
    const route = '/product/60600';
    renderWithRouter(<RelatedItemCarousel currentProduct={{}}/>, {route});
    await expect(screen.findByText('Error Retrieving Related Items. Please Try Again.')).toBeInTheDocument();
  });
  test('renders no related products message when the item has no related products', async () => {
    const route = '/product/63618';
    renderWithRouter(<RelatedItemCarousel currentProduct={{}}/>, {route});
    await expect(screen.findByText('No related products found.')).toBeInTheDocument();
  });
  // test('renders related products when the item has related products', async () => {
    // const testProduct = {
    //   "id": 63617,
    //   "campus": "hr-sfo",
    //   "name": "Summer Shoes",
    //   "slogan": "A risky call in the spring or fall",
    //   "description": "Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.",
    //   "category": "Kicks",
    //   "default_price": "59.00",
    //   "created_at": "2021-12-21T17:19:40.556Z",
    //   "updated_at": "2021-12-21T17:19:40.556Z",
    //   "features": [
    //     {
    //       "feature": "Sole",
    //       "value": "Rubber"
    //     },
    //   ]
    // }
  //   const route = '/product/63617';
  //   //this product has 6 related products
  //   renderWithRouter(<RelatedItemCarousel currentProduct={testProduct} handleProductInit={() => {}}/>, {route});
  //   const displayedImages = await screen.findAllByRole('img');
  //   expect(displayedImages.length).toEqual(6);
  // });
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
    setMockRefElement({ offsetWidth: 300, scrollWidth: 1500, scrollLeft: 0 });
    render(<OutfitCarousel currentProduct={testProduct} currentProductStyles={testProductStyles} currentProductReviews={testProductReviews} />);
    fireEvent.click(screen.getByText('Add New Outfit'));
    expect(screen.queryByTitle('Left Arrow')).not.toBeInTheDocument();
    expect(screen.getByTitle('Right Arrow')).toBeInTheDocument();
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
  test('renders original price only if no sale', () => {
  });
  test('renders sale and original price if on sale', () => {
  });
  test('when popup event is triggered, the compare window renders', () => {
  });
  test('when popup event is triggered twice, the compare window no longer renders', () => {
  });
  test('when handleProductInit is triggered and the compare window renders, the current product will be the previously related product', () => {
  });
  test('if props have not yet been passed in, the loading image renders', () => {
  });
});