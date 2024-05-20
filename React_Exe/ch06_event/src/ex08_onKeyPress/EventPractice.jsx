import React, { Component } from "react";

class EventPractice extends Component{

    state = {
        message: '',
        username: ''
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            message: '',
            username: ''
        });
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render(){
        const {message} = this.state;
        return(
            
            <div>
                
                <h1>이벤트 연습</h1>
                <h2>메시지: {message}</h2>

                <input 
                type="text"
                name="username"
                placeholder="사용자명"
                value={this.state.username}
                onChange={
                    this.handleChange
                }
                />
                <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={
                    this.handleChange
                }
                onKeyDown={this.handleKeyDown}
                />
                
                <button onClick={
                    this.handleClick
                }>확인</button>

            </div>
        );
    }
}

export default EventPractice;