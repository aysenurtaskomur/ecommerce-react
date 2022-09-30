import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addBasket, openBasket } from '../../redux/basket/basketSlice';
import GetirLogo from '../../assets/images/getir-logo.png'

const Product = ({name,price,}) => {
    const dispatch = useDispatch();

    const addProduct = () => {
        dispatch(addBasket({
            name: name,
            price: price,
        }))
        dispatch(openBasket())
    }
    
    return(
        <Container>
            <ImgContainer>
                <ProductImage src={GetirLogo}></ProductImage>
            </ImgContainer>
            <ProductPrice> ₺{price}</ProductPrice>
            <ProductName>{name}</ProductName>
            <AddBtn onClick={()=>addProduct()}>Add</AddBtn>
        </Container>
    )
}

const Container = styled.div({
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#fff',
    width:150,
    padding:20,
});

const ImgContainer = styled.div({
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     width: 124,
     height: 124,
     border: '1.18px solid #F3F0FE',
     borderRadius: '10%',
})

const ProductPrice = styled.div({
    fontFamily:'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop:9,
    paddingBottom:3,
    color: '#1EA4CE'
})

const ProductName = styled.div({
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontsize: 14,
    color: '#191919',
})

const AddBtn = styled.button({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:12,
    fontWeight: 600,
    width: 124,
    height: 22,
    backgroundColor:'#1EA4CE',
    border:'none',
    color:'#fff',
    marginTop: 5,
})

const ProductImage = styled.img({
    backgroundColor:'#C4C4C4',
    width:92,
    height: 92,
    margin:16,
    backgroundColor: 'none'
})

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number
}

export default Product