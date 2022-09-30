import styled from 'styled-components';
import HeaderLogo from '../../assets/images/Logo.svg'
import Basket from '../Basket/Basket';
import { useSelector } from 'react-redux';

const Header = () => {
    const totalPrice = useSelector(state => state.basketSlice.totalPrice)
    return (
        <Banner>
            <Logo src={HeaderLogo} />
            <Basket totalPrice={totalPrice} />
        </Banner>
    )
}

const Banner = styled.div({
    backgroundColor: '#1EA4CE',
    position: 'relative',
    width: '100%',
    left: 0,
    height: '10vh',
    border: 'none',
});

const Logo = styled.img({
    position: 'absolute',
    width: 141.25,
    height: 40.32,
    left: '45%',
    top: 17,
})

export default Header;