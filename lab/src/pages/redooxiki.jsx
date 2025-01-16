import { Provider } from 'react-redux';
import FirstContainer from '../Components/firstContainer/firstContainerComp.jsx';
import FoodComponent from '../Components/cactus/cactus.jsx';
import User from '../Components/users/user.jsx';
import  store from '../Redux/index.js'

export default function Redooxiki(){
    return(
        <>
        <Provider store={store}>
        <FirstContainer/>
        
         <User/>
         <FoodComponent/>
        </Provider>
        </>
    )
}