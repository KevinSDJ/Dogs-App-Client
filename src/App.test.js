import {render,screen} from '@testing-library/react'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './redux/store/index'


test('renders routes text',()=>{
    render(
        <Provider store={store}>
             <App/>
        </Provider>)
    const rout= screen.getByText(/register/i);
    expect(rout).toBeInTheDocument();
})