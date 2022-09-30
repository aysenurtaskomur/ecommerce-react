import {useEffect} from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Vector from '../../assets/images/BlueVector.svg';
import '../../styles/components/sorting.scss'
import {changeSortingChecked} from '../../redux/filters/filtersSlice'
import {filterSorting} from '../../redux/product/productsSlice'

const Sorting = () => {
    const dispatch = useDispatch();
    const sortingOptions = useSelector(state=>state.filtersSlice.sortingOptions)
    const filteredAndSortedProducts = useSelector(state=>state.productsSlice.filteredAndSortedProducts)

    useEffect(()=>{
        const selectedSort = sortingOptions.find(item=>item.isChecked)
        dispatch(filterSorting(selectedSort))

    },[dispatch,sortingOptions,filteredAndSortedProducts])

    return(
        <>
            <Title>Sorting</Title>
            <Container>
            <div className="custom-radios">
                {
                    sortingOptions.map((item,index)=>(
                        <div key={index}>
                            <input id={item.name} type="radio" name={item} value={item.isChecked} checked={item.isChecked} onChange={() => dispatch(changeSortingChecked(item))} />
                            <label htmlFor={item.name}>
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
        </>
    )
}

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
    padding:25
});


export default Sorting