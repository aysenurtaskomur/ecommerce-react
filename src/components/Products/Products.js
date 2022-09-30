import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ItemTypes from '../ItemTypes/ItemTypes';
import ProductList from '../ProductList/ProductList';
import {getProducts} from '../../redux/product/productsSlice'

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.productsSlice.products)
    const status = useSelector(state=>state.productsSlice.status)

    useEffect(()=>{
       if(status === 'idle'){
        dispatch(getProducts())
       } 
    },[dispatch,status])

    return(
        <Container>
            <Title>Products</Title>
            <ItemTypes/>
            <ProductList/>
        </Container>
    )
}

const Container = styled.div({
});

const Title = styled.h4({
    fontFamily: 'Heading / H4',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    color:'#6F6F6F',
    letterSpacing:0.25,
});


export default Products