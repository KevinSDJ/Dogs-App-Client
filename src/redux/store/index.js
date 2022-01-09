import {compose,applyMiddleware,createStore} from 'redux';
import root from '../reducer';
import thunk from 'redux-thunk';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const store= createStore(root,composeEnhancers(applyMiddleware(thunk)))

export{store}