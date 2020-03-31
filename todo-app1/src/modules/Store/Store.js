import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router'

const sessionReducer = (state={loggedIn:false,user:null},payload) => {
return state;
};

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            session: sessionReducer,
            router: connectRouter(history),
        }),
        applyMiddleware(routerMiddleware(history))
    )
}
