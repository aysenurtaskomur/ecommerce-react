import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './product/productsSlice'
import filtersSlice from './filters/filtersSlice'
import basketSlice from './basket/basketSlice'

export default configureStore({
  reducer: {
    productsSlice : productsSlice,
    filtersSlice : filtersSlice,
    basketSlice : basketSlice
  }
})