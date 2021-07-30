import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            IsLogIn: false
        }
    }


    render() {
        return (
            this.state.IsLogIn ? <div>Hello sachintha</div> : <div>Hello Geust</div>
        )
        // let message;
        // if (this.state.IsLogIn) {
        //     message = <div>Hello Sachintha</div>
        // } else {
        //     message = <div>Hello Geust</div>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )
    }
}

export default UserGreeting
