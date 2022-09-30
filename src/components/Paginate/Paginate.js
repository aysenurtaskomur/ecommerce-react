import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'rc-pagination';
import '../../styles/components/pagination.scss'
import { setCurrentPage } from '../../redux/product/productsSlice';

const Paginate = () => {
    const dispatch = useDispatch();
 
    const filteredAndSortedProducts = useSelector(state => state.productsSlice.filteredAndSortedProducts)
    const currentPage = useSelector(state => state.productsSlice.currentPage)

    const onChange = page => {
        dispatch(setCurrentPage(page))
    };

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button><i className="fa fa-angle-double-left"></i></button>;
        }
        if (type === 'next') {
            return <button><i className="fa fa-angle-double-right"></i></button>;
        }
        return originalElement;
    }

    return (
       <>
            <Pagination
             className="pagination-data"
             onChange={onChange}
             current={currentPage}
             total={filteredAndSortedProducts.length}
             itemRender={PrevNextArrow}
             pageSize={16}
        />
        </>
    )
}

export default Paginate