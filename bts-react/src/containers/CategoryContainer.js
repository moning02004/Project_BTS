import * as actions from '../actions';
import { connect } from 'react-redux';
import Category from '../components/Category';

const mapStateToProps = (state) => {
    return {
        keyword: state.category.keyword
    }
};

const mapDispatchToProps = (dispatch) => ({
    setCatAll: () => {dispatch(actions.setCatAll())},
    setCatRegular: () => {dispatch(actions.setCatRegular())},
    setCatMini: () => {dispatch(actions.setCatMini())},
    setCatSingle: () => {dispatch(actions.setCatSingle())},
    setCatOST: () => {dispatch(actions.setCatOST())},
});

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);

export default CategoryContainer;