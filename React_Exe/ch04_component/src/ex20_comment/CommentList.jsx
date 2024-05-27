import Comment from "./Comment";

// 데이터를 서버에서 받아왔다고 가정하고, 배열에 저장
const comments = [
    {
        name: "전민재",
        comment: "라고 합니다"
    },
    {
        name: "전",
        comment: "이라고"
    },
    {
        name: "민",
        comment: "고라파덕"
    },
    {
        name: "재",
        comment: "민전"
    },
    {
        name: "존민재",
        comment: "님이 입장했습니다"
    },
]

function CommentList(props){
    return(
        <div>
            {
                comments.map((comment) => {
                    return(
                        <Comment name={comment.name} comment={comment.comment}/>
                    )
                })
            }
        </div>
    )
}

export default CommentList;