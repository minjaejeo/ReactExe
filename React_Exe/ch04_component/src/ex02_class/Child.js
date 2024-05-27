
import "./Child.css";
import { Component } from "react";

// 함수 컴포넌트 제작

class Child extends Component {
    render() {
        const name = "React";
        return <div className="react">{name}</div>;
    }
}

export default Child;