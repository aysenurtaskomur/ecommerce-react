import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands = createAsyncThunk('filtersSlice/getBrands',async () => {
  const res = await axios(`${process.env.PORT}/companies`)
  return res.data
})

  
export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
      brands: [],
      tags: [],
      sortingOptions: [{id:0,name:"Price low to high",isChecked:true},{id:1,name:"Price high to low",isChecked:false},{id:2,name:"New to old",isChecked:false},{id:3,name:"Old to new",isChecked:false}],
      status: 'idle',
      brandSearchWord: "",
      tagSearchWord: "",
      searchedBrands: [],
      searchedTags: []
    },
    reducers: {
      changeBrandsChecked : (state,action) => {
        state.searchedBrands.forEach(item=>{
            if(item.zip==action.payload.zip ){
                item.isChecked = !action.payload.isChecked
            }
        })
      },
      getTags :(state, action) => {
        let tagsArr = []
        action.payload.forEach((item,index)=>{
            item.tags.forEach(element=>{
              if(tagsArr.includes(element)===false)
                tagsArr.push(element)
            })
        })

        let arr = []
          tagsArr.forEach((i,ind)=>{
            let counter = 0;
            let x = { name: i, count: counter, isChecked: false};
            action.payload.forEach((item,index)=>{
              item.tags.forEach(element=>{
               if(i == element){
                counter++;
               }
              })
          })
          x.count=counter;
          arr.push(x);
        })
        state.tags= arr;
      },
      changeTagsChecked : (state,action) => {
        state.tags.forEach(item=>{
          if(item.name==action.payload.name ){
              item.isChecked = !action.payload.isChecked
          }
        })
      },
      changeSortingChecked : (state,action) => {
        state.sortingOptions.forEach(item=>{
          if(item.name==action.payload.name ){
              item.isChecked = true
          }else{
            item.isChecked = false
          }
        })
      },
      setBrandSearchWord : (state, action) => {
        state.brandSearchWord = action.payload
      },
      searchBrands : (state,action) => {
        state.searchedBrands = state.brands;
        let result = state.brands.filter(data=>data.name.toLocaleLowerCase().includes(state.brandSearchWord));
        state.searchedBrands = result
      },
      setTagSearchWord: (state, action) => {
        state.tagSearchWord = action.payload
      },
      searchTags : (state,action) => {
        state.searchedTags = state.tags;
        let result = state.tags.filter(data=>data.name.toLocaleLowerCase().includes(state.tagSearchWord));
        state.searchedTags = result
      }

    },
    extraReducers: {
      [getBrands.pending] : (state,action) => {
        state.status = 'pending';
      },
      [getBrands.fulfilled] : (state,action) => {
        state.brands=action.payload.map((item)=>item={...item, "isChecked": false});
        state.searchedBrands = action.payload.map((item)=>item={...item, "isChecked": false}); //??
        state.status = 'succeeded'
      },
      [getBrands.rejected] : (state,action) => {
        state.status='failed';
      },
    }
})

export const { changeBrandsChecked, getTags, changeTagsChecked, changeSortingChecked, searchBrands, setBrandSearchWord, searchTags, setTagSearchWord } = filtersSlice.actions

export default filtersSlice.reducer;