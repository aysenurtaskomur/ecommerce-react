import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getTags, changeTagsChecked, setTagSearchWord, searchTags } from '../../redux/filters/filtersSlice';
import { filterTags } from '../../redux/product/productsSlice';
import Vector from '../../assets/images/Vector.svg'
import '../../styles/components/filters.scss'

const Tags = () => {
    const dispatch = useDispatch();
    const [searchWord, setSearchWord] = useState("")
    const products = useSelector(state => state.productsSlice.products)
    const tags = useSelector(state => state.filtersSlice.tags)
    const searchedTags = useSelector(state => state.filtersSlice.searchedTags)


    useEffect(() => {
        dispatch(getTags(products))
    }, [dispatch, products])


    useEffect(() => {
        dispatch(searchTags())
    }, [searchWord, tags])

    useEffect(() => {
        const selectedTags = searchedTags.filter(item => item.isChecked)
        dispatch(filterTags(selectedTags))
    }, [dispatch, searchedTags])

    const search = (e) => {
        setSearchWord(e)
        dispatch(setTagSearchWord(e))
    }

    return (
        <TagsContainer>
            <Title>Tags</Title>
            <Container>
                <Search value={searchWord} onChange={(event) => search(event.target.value)} placeholder="Search tag" />
                <div className="custom-checkboxes ">
                    {
                        searchedTags.map((item, ind) => (
                            <div key={item.name}>
                                <input id={item.name} type="checkbox" name="scales" value={item.isChecked} onClick={() => dispatch(changeTagsChecked(item))} />
                                <label htmlFor={item.name}>
                                    <span>
                                        <img src={Vector} alt="Checked Icon" />
                                    </span>
                                    {item.name}
                                </label>
                            </div>
                        ))}
                </div>

            </Container>
        </TagsContainer>
    )
}


const TagsContainer = styled.div({
    marginTop: 120,
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


export default Tags