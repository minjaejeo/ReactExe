// 1) 리액트는 '사용자 정의 태그를 만드는 기술이다'
// 2) 사용자 정의 태그 === 컴포넌트 === jsx객체
// 3) 프론트 App을 컴포넌트의 조립형태로 구조화

function Header(){
  // 헤더 부분을 가져온다.
}
function Nav(){
  // 네비게이션 부분을 가져온다.
}
function Article(){
  // 아티클 부분을 가져온다.
}

export default function SubApp(){
    return (
        <div>
            {/* ------------- 헤더 부분 -------------*/}
          <header>
            <h1><a href='/'>WEB</a></h1>
          </header>
          {/* ------------- 네비게이션 부분 -------------*/}
          <nav>
            <ol>
              <li><a href='/read/1'>html</a></li>
              <li><a href='/read/2'>css</a></li>
              <li><a href='/read/3'>js</a></li>
            </ol>
          </nav>
          {/* ------------- 본문 영역 부분 -------------*/}
          <article>
            <h2>Welcome</h2>
            Hello, WEB
          </article>
        </div>
      );
}