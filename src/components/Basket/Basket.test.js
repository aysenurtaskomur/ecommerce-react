import React from 'react';
import { screen } from '@testing-library/react';
import Basket from '../Basket/Basket'
import { renderWithProviders } from '../../test-utils.js'

describe('the basket component', ()=>{
  test('check right props', async () => {
    renderWithProviders(<Basket totalPrice={39.99} />)
    expect(screen.getByText(/39.99/i)).toBeInTheDocument()
  })

  test('check exit img', () => {
    renderWithProviders(<Basket />)
    expect(screen.getByRole("img")).toBeInTheDocument();
  })

  test('check basket icon', () => {
    renderWithProviders(<Basket />)
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('src', "basket.svg");
  })
})




