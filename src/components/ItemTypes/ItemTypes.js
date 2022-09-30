import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItemType } from '../../redux/product/productsSlice';

const ItemTypes = () => {
    const dispatch = useDispatch();
    const itemTypes = useSelector(state => state.productsSlice.itemTypes)
    const activeItemType = useSelector(state => state.productsSlice.activeItemType)

    const clickItemTypes = (item) => {
        dispatch(setActiveItemType(item))
    }

    return (
        <Container>
            {
                itemTypes.map((item,index) => (
                    item === activeItemType ? 
                        <ChipsActive key={index} onClick={() => clickItemTypes(item)}>{item}</ChipsActive>
                     : 
                        <Chips key={index} onClick={() => clickItemTypes(item)}>{item}</Chips>
                    
                ))
            }
        </Container>
    )
}

const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
    height: 30,
    width: 129,
});

const ChipsActive = styled.button({
    border: 'none',
    width: 61,
    height: 30,
    backgroundColor: '#1EA4CE',
    color: '#F2F0FD',   
    fontSize: 13,
    fontWeight: 600, 
    marginRight:10
})

const Chips = styled.button({
    border: 'none',
    width: 61,
    height: 30,
    marginRight:10,
    backgroundColor: '#F2F0FD',
    color: '#1EA4CE',
    fontSize: 13,
    fontWeight: 600, 

})






export default ItemTypes