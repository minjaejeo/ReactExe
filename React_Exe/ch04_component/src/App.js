// import logo from './logo.svg';
import './App.css';

// import MyComponent from './ex06_default_props copy/MyComponent';
// import Child from './ex01_function/Child';
// import Child from './ex02_class/Child';
// import MyComponent from './ex03_props/MyComponent';
// import Library from './ex04_props/Library';
// import MyComponent from './ex05_props/MyComponent';
// import MyComponent from './ex06_default_props/MyComponent';

// import MyComponent from './ex07_children/MyComponent';

// import MyComponent from './ex08_destructing/MyComponent';
// import MyComponent from './ex09_prop_types/MyComponent';
// import MyComponent from './ex10_prop_required/MyComponent';

// import MyComponent from './ex11_prop_class/MyComponent';
// import MyComponent from './ex12_prop_class/MyComponent';
// import Team from './ex13_compose_component/Team';
// import CommentList from './ex18_comment/CommentList';
// import CommentList from './ex19_comment/CommentList';
import CommentList from './ex20_comment/CommentList';


function App() {
  return (
    // <Library title="조선 선비들의" />
    // <>
    //   <MyComponent />
    //   <MyComponent name="전민재" />
    //   <MyComponent name="전민재">리액트 프로그래밍</MyComponent>

    // </>
    // <MyComponent name="Happy Happy">리액트 프로그래밍</MyComponent>
    // <MyComponent name="행운">리액트</MyComponent>
    // <MyComponent name={3}>리액트</MyComponent>
    // <MyComponent name="React_Programming">리액트가 아니라 children입니다..다다ㅏ</MyComponent>
    // <MyComponent name="전민재라고라고라파덕" favoriteNumber={10000000000}>나는 자식이다 그러니까 porps.children의 자식이다.
    // 나를 무시하지 마라.내가 왕이될 상인가</MyComponent>
    <>
      <CommentList />
      <CommentList />
    </>
    
  );
}

export default App;
