import Header from "../../components/Header/Header"
import styled from 'styled-components';
import Products from '../../components/Products/Products'
import Filters from '../../components/Filters/Filters'

const Home = () => {
    return(
        <Base>
            <Header/>
            <Content>
                <Filters/>
                <Products/>
            </Content>
        </Base>
    )
}

const Content = styled.div({
    display:'flex',
    flexDirection:'row',
    marginTop:38.36,
    paddingBottom:32
});

const Base = styled.div({
    minHeight:'100vh',
    backgroundColor:'#FAFAFA'
});

export default Home