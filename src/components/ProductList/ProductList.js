import { useState,useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import Paginate from '../Paginate/Paginate';

const ProductList = () => {
    const [paginatedProducts, setPaginatedProducts] = useState([])
    const filteredAndSortedProducts = useSelector(state=>state.productsSlice.filteredAndSortedProducts)
    const currentPage = useSelector(state=>state.productsSlice.currentPage)

    useEffect(() => {
        setPaginatedProducts(filteredAndSortedProducts.slice((currentPage-1)*16, (currentPage*16)))
    },[currentPage,filteredAndSortedProducts])

    return(
        <Container>
         <Section>
            {
                paginatedProducts.map((item,index)=>(
                    <Product key={index} name={item.name} price={item.price}/>
                ))
            }
        </Section>
        <Paginate/>

        </Container>
       
    )
}

const Section = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'row',
    width:608,
    backgroundColor:'#fff',

});

const Container = styled.div({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

});


export default ProductList