
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { item } from './add';



const reducer = combineReducers({
    item,
    form: formReducer
})
export default reducer;
