import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItemsWrapper from './RelatedItemsWrapper.jsx';
import RelatedItemCarousel from './RelatedItemCarousel.jsx';
import CompareItem from './CompareItem.jsx';
import StarRating from './StarRating.jsx';
import '@testing-library/jest-dom';
import store from '../../redux/store/store.js';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, {wrapper: BrowserRouter});
};

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
    expect(screen.getByText('Your Outfits').toBeInTheDocument);
    expect(screen.getByText('Related Products').toBeInTheDocument);
  });
});

describe('RelatedItemCarousel', () => {
  test('renders error message when retrieving related product data resulted in error', async () => {
    const route = '/product/60600';
    renderWithRouter(<RelatedItemCarousel currentProduct={{}}/>, {route});
    await expect(screen.findByText('Error Retrieving Related Items. Please Try Again.').toBeInTheDocument);
  });
  test('renders no related products message when the item has no related products', async () => {
    const route = '/product/63618';
    renderWithRouter(<RelatedItemCarousel currentProduct={{}}/>, {route});
    await expect(screen.findByText('No related products found.').toBeInTheDocument);
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
  test('renders a new outfit item when the \'add outfit\' card is clicked', () => {
  });
  test('removes a previously-added outfit item when the \'remove outfit\' symbol is clicked', () => {
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

describe('OutfitItem', () => {
  test('renders all props passed in', () => {
  });
});

describe('RelatedItem', () => {
  test('renders all props passed in', () => {
  });
  test('when popup event is triggered, the compare window render', () => {
  });
  test('when popup event is triggered twice, the compare window no longer renders', () => {
  });
  test('when handleProductInit is triggered and the compare window renders, the current product will be the previously related product', () => {
  });
  test('if props have not yet been passed in, the loading image renders', () => {
  });
});