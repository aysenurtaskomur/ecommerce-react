import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test-utils.js'
import Product from './Product';

describe('the product component', ()=>{
  test('check right props', () => {
    renderWithProviders(<Product name="Rustic Ocean Mug" price={9.99} />)

    expect(screen.getByText(/Rustic Ocean Mug/i)).toBeInTheDocument()
    expect(screen.getByText(/9.99/i)).toBeInTheDocument()
  })

  test('check img', () => {
    renderWithProviders(<Product />)
    expect(screen.getByRole("img")).toBeInTheDocument();
  })

  test('check add button', () => {
    renderWithProviders(<Product />)
    expect(screen.getByRole("button")).toBeInTheDocument("Add");
  })

})