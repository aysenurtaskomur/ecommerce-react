import styled from 'styled-components';
import Sorting from '../Sorting/Sorting';
import Brands from '../Brands/Brands'
import Tags from '../Tags/Tags';

const FilterContainer = styled.div({
    marginLeft: 102,
    height:780,
    marginRight:16,
    width: 296,
});

const Filters = () => {
    return(
        <FilterContainer>
            <Sorting/>
            <Brands/>
            <Tags/>
        </FilterContainer>
    )
}

export default Filters