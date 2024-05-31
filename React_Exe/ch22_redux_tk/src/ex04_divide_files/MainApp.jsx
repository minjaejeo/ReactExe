
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './store/shareStore';

function Counter(){
    const dispatch = useDispatch(); 
    const count = useSelector(state=> state.counter.value); 
    const mCount = useSelector(state=> state.counter.mValue);
    const str = useSelector(state=> state.append.value);
    return(

            <div>
                <button onClick={()=>{
                    dispatch({type:'counterSlice/up', step:2});  // reducer의 action에 객체 전달
                }}>+</button>{count}
                <button onClick={()=>{
                    dispatch({type:'counterSlice/down', step:2});  // reducer의 action에 객체 전달
                }}>-</button>
                {mCount}
                <button onClick={()=>{
                    dispatch({type:'strSlice/append', ch: '0'});  // reducer의 action에 객체 전달
                }}>append</button>
                {str}
            </div>

    )
}

function MainApp(){
    return(
        <Provider store={store}>
            <div>
                <Counter/>
            </div>
        </Provider>
    )
}

export default MainApp;