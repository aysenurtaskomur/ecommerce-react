import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/components/filters.scss'
import Vector from '../../assets/images/Vector.svg'
import { getBrands, changeBrandsChecked, searchBrands, setBrandSearchWord } from '../../redux/filters/filtersSlice'
import { filterBrands } from '../../redux/product/productsSlice'

const Brands = () => {
    const dispatch = useDispatch();
    const [searchWord, setSearchWord] = useState("")
    const searchedBrands = useSelector(state => state.filtersSlice.searchedBrands)

    const status = useSelector(state => state.filtersSlice.status)
    const filteredAndSortedProducts = useSelector(state => state.productsSlice.filteredAndSortedProducts)

    useEffect(() => {
        if (status == 'idle') {
            dispatch(getBrands())
        }
    }, [dispatch, status])

    useEffect(()=>{
        dispatch(searchBrands())
      },[searchWord])

    useEffect(()=>{
        const selectedBrands = searchedBrands.filter(item=>item.isChecked)
        dispatch(filterBrands(selectedBrands))

    },[searchedBrands])

    const search = (e) => {
        setSearchWord(e)
        dispatch(setBrandSearchWord(e))
    }

    return (
        <BrandsContainer>
            <Title>Brands</Title>
            <Container>
                <Search value={searchWord} onChange={(event)=>search(event.target.value)} placeholder="Search brand"/>
                <div className="custom-checkboxes">
                    {
                        searchedBrands.map((item, index) => (
                                <div key={item.slug}>
                                    <input id={item.slug} type="checkbox" name="scales" value={item.isChecked} onClick={() => dispatch(changeBrandsChecked(item))} />
                                    <label htmlFor={item.slug}>
                                        <span>
                                            <img src={Vector} alt="Checked Icon" />
                                        </span>
                                        {item.name}
                                    </label>
                                </div>
                        ))
                    }


                </div>

            </Container>
        </BrandsContainer>
    )
}

const BrandsContainer = styled.div({
    marginTop: 36,
    marginBottom: 36,
    maxHeight: 244,
    height: 244,
})

const Title = styled.div({
    fontFamily: 'Heading / H4',
    fontWeight: 600,
    fontSize: 13,
    color: '#697488',
    marginBottom: 12,
    letterSpacing: 0.16
})

const Container = styled.div({
    backgroundColor: '#fff',
    padding: 25,
});

const Search = styled.input`
    border: 2px solid #E0E0E0;
    padding: 13px;
    margin-bottom: 20px;

    ::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.15px;
    }
`

export default Brands