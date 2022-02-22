import React, {Component} from "react";
import LoginFunction from "./functions/LoginFunction";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginFunction/>
            </div>
        )
    }
}

export default Login
