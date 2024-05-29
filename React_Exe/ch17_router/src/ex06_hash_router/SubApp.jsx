import Home from './Home';
import Topics from './Topics';
import Contact from './Contact';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes, Link} from 'react-router-dom';


function SubApp(){
    return(
        // 웹서버는 URL뒤의 #을 무시한다. 그러므로 항상 처음 시작 페이지는 동일하다.
        // HashRouter는 사용자가 어떤 주소로 들어와도, 처음에 동일한 페이지를 보여주고
        // 싶을 때 사용한다.
        <HashRouter>
            <div>
                <h1>Hello React Router DOM</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/topics'>Topics</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/topics' element={<Topics/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    {/* 위에 주소와 연결된 컴포넌트를 제외한 나머지는 아래에서 모두 처리한다. */}
                    <Route path='/*' element={'Not Found'}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default SubApp;