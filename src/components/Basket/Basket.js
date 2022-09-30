import styled from 'styled-components';
import BasketIcon from '../../assets/images/basket.svg'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBasket, increaseQuantity, decreaseQuantity, calculateBasket } from '../../redux/basket/basketSlice';
import { useEffect } from 'react';


const Basket = ({totalPrice}) => {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basketSlice.basketItems)
    const checkBasketIsOpen = useSelector(state => state.basketSlice.checkBasketIsOpen)

    useEffect(()=>{
        dispatch(calculateBasket())
    },[dispatch,basketItems])
    
    const clickBasketBtn = () => {
        dispatch(toggleBasket())
    }

    const increaseCount = (item) => {
        dispatch(increaseQuantity(item))
    }

    const decreaseCount = (item) => {
        dispatch(decreaseQuantity(item))
    }
    
    const BasketContent = () => {
        return(
          <BasketContentContainer data-testid="basket-testid">
            {
                basketItems.length > 0 ? 
                <div>
                    {
                      basketItems.map((item,index)=>(
                        <BasketRow key={index}>
                            <BasketContentInfo>
                                <Name>{item.name}</Name> 
                                <Price>₺{item.price}</Price>
                            </BasketContentInfo>
                           <ProductIncDec>
                                <Button onClick={()=> decreaseCount(item)}>-</Button>
                                <Count>{item.count}</Count>
                                <Button data-testid="increase-button"  onClick={()=> increaseCount(item)}>+</Button>
                           </ProductIncDec>
                           
                        </BasketRow>
                    ))  
                    }
                    <TotalButton>₺{totalPrice}</TotalButton>
                </div>
                 : 
                    <div>sepette ürününüz bulunmamaktadır</div>
            }
          </BasketContentContainer>
        )
    }

    return(
        <>
        <BasketButton onClick={()=>clickBasketBtn()}>
            <BasketImg src={BasketIcon}/>
            <BasketAmount> ₺{totalPrice}</BasketAmount>
        </BasketButton>
        {checkBasketIsOpen && BasketContent()}
        </>
    )
}

const BasketAmount = styled.span({
    color: '#fff',
    fontFamily: 'Body / Short 01 - SemiBold',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 600,
    letterSpacing: 0.16
    
});

const BasketButton = styled.div({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#147594',
    position: 'absolute',
    left: '83.82%',
    right: '7.22%',
    top: '0%',
    bottom: '0%',
    cursor: 'pointer'
});

const BasketImg = styled.img({
    height: 24.5,
    width: 24,
});

const BasketContentContainer = styled.div({
    border: '8px solid #1EA4CE',
    borderRadius: 2,
    position: 'absolute',
    left: '73.82%',
    right: '10%',
    top: '120%',
    padding: 30,
    width:296
})

const BasketRow = styled.div({
    display:'flex',
    flexDirection: 'row',
    marginBottom: 20,
})

const BasketContentInfo = styled.div({

})

const Name = styled.div({
    color: '#191919',
    fontSize: 14,
    fontWeight: 400
})

const Price = styled.div({
    color: '#1EA4CE',
    fontSize: 14,
    fontWeight: 600
})

const ProductIncDec = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    right: 10
})

const Count = styled.div({
    textAlign:'center',
    backgroundColor: '#1EA4CE',
    color:'#fff',
    width: 32,
    height: 32,
    fontSize:15,
    fontWeight: 700,
    
})

const Button = styled.button({
    border: 'none',
    backgroundColor: '#FAFAFA',
    color: '#1EA4CE',
    fontSize:20,
    fontWeight: 600,
})

const TotalButton = styled.button({
    position: 'absolute',
    bottom: 10,
    right: 20,
    border: '2px solid #1EA4CE',
    width: 92,
    height: 51.2,
    backgroundColor: '#FAFAFA',
    color: '#1EA4CE',
    fontSize:14,
    fontWeight: 600

})


Basket.propTypes = {
    totalPrice: PropTypes.number
}

export default Basket;