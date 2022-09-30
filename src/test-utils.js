import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import basketSlice from '../src/redux/basket/basketSlice'
import filtersSlice from '../src/redux/filters/filtersSlice'
import productsSlice from '../src/redux/product/productsSlice'


export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { 
        basketSlice: basketSlice,
        filtersSlice: filtersSlice,
        productsSlice: productsSlice
    }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}