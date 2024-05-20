import React, { Component } from "react";

class EventPractice extends Component{

    state = {
        message: ''
    }


    render(){
        const {message} = this.state;
        return(
            
            <div>
                
                <h1>이벤트 연습</h1>
                <h2>메시지: {message}</h2>
                <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={
                    (e) => {
                        this.setState({
                            message: e.target.value
                        })

                    }
                }
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        })
                    }
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;