import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello world'
        }
    }
    clickHandler() {
        this.setState({
            message: 'Good bye'
        })
    }

    clickHandler2 = () => {
        this.setState({
            message: 'Second function'
        })
    }

    render() {
        return (
            <div>
                <p> {this.state.message} </p>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
                <button onClick={() => this.clickHandler()}>Click</button>
                <button onClick={() => this.clickHandler2()}>Click</button>
            </div>
        )
    }
}

export default EventBind
