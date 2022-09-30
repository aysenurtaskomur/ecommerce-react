import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 import Products from '../Products/Products'
import { renderWithProviders } from '../../test-utils.js'

describe('the products component', ()=>{
  test('check products title', async () => {
    renderWithProviders(<Products/>)
    expect(screen.getByText(/Products/i)).toBeInTheDocument()
  })


})




