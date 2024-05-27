
import Student from "./Student";

// 컴포넌트 합성

function Team(props){
    return(
        <>
            <h1>프로젝트 주제는 {props.title}입니다.</h1>
            <Student name="전민재" work="개발자" />
        </>
    )
}

export default Team;
