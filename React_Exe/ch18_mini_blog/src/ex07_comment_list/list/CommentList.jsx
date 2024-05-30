import React from "react";
import styled from "styled-components";
import CommnetListItem from './CommentListItem';
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child){
        margin-botton: 16px;
    }
`;

function CommentList(props){
    const {comments} = props;
    

    return (
        <Wrapper>
            {comments.map((comment, index)=>{
                return(
                    <CommentListItem key={comment.id} comment={comment}/>
                )
            })}
        </Wrapper>
    );
}

export default CommentList;