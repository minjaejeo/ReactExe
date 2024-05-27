import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name={"Albert"} comment={"나의 컴포넌트입니다."}/>
            <Comment name={"전민재"} comment={"님이 입장했습니다"}/>
        </div>
    )
}

export default CommentList;