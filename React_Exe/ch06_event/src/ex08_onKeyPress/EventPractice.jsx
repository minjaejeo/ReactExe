import { Component } from "react";

class EventPractice extends Component{

    state = {
        username: '',
        message: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render(){

        return (
            <div>
                <h1>이벤트 연습</h1>
                {/* username과 message의 변화값 모두 this.handleChange에 전달됨*/}
                <input type="text" name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}/>
                <input type="text" name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}/>
                    <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;