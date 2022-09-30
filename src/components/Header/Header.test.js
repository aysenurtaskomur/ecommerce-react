import React from 'react';
import { screen } from '@testing-library/react';
import Header from '../Header/Header'
import { renderWithProviders } from '../../test-utils.js'

describe('the header component', ()=>{
        test('check header logo', () => {
            renderWithProviders(<Header />)
            const logo = screen.getAllByRole('img')[0];
            expect(logo).toHaveAttribute('src', "Logo.svg");
          })
  })