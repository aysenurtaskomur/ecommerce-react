import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('productsSlice/getProducts', async () => {
  const res = await axios('/products')
  const response = {
    data: res.data,
    header: res.headers
  }
  return response
})


export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    filteredAndSortedProducts: [],
    currentPage: 1,
    itemTypes: [],
    activeItemType: ""
  },
  reducers: {
    filterBrands: (state, action) => {
      const x = []
      if (action.payload.length) {
        action.payload.forEach(element => {
          state.filteredAndSortedProducts.forEach(item => {
            if (item.manufacturer === element.slug) {
              x.push(item)
            }
          })
        });
        state.filteredAndSortedProducts = x;
      } else {
        state.filteredAndSortedProducts = state.products;
      }
    },
    filterTags: (state, action) => {
      if (action.payload.length) {

        const x = [];
        action.payload.forEach(element => {
          state.filteredAndSortedProducts.forEach(item => {
            if (item.tags.some(i => i == element.name)) {
              x.push(item)
            }
          })
        });
        state.filteredAndSortedProducts = x;
      }
      else {
        state.filteredAndSortedProducts = state.products;
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    filterSorting: (state, action) => {
      let filtered= [];
        if(action.payload.id === 0){
          filtered = state.filteredAndSortedProducts.sort((a,b)=>a.price-b.price)
        }else if(action.payload.id === 1){
          filtered = state.filteredAndSortedProducts.sort((a,b)=>b.price-a.price)
        }else if(action.payload.id === 2){
          filtered = state.filteredAndSortedProducts.sort((a,b)=>b.added-a.added)
        }else{
          filtered = state.filteredAndSortedProducts.sort((a,b)=>b.added-a.added)
        }
        state.filteredAndSortedProducts = filtered;
    },
    setActiveItemType : (state,action) => {
      
      let cloneArr =[...state.filteredAndSortedProducts]
      state.filteredAndSortedProducts = cloneArr
      state.activeItemType= action.payload;
      
        state.filteredAndSortedProducts = state.filteredAndSortedProducts.filter(item=>item.itemType.includes(action.payload))
  
     
    }

  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.filteredAndSortedProducts = action.payload.data;
      state.itemTypes = [...new Set(action.payload.data.map(item=>item.itemType))]
      state.activeItemType= state.itemTypes[0]
      state.status = 'succeeded'
    },
    [getProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
})

export const { filterBrands, setCurrentPage, filterTags, filterSorting, setActiveItemType } = productsSlice.actions

export default productsSlice.reducer;