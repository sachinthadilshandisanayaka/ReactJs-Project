import React, {Component} from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ''
        }
    }

    //method
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    //method
    incrementCountPrevState = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    addName = () => {
        this.setState({
            name: 'Kamal'
        })
    }

    render() {
        const {count, name} = this.state;
        return (
            <div>
                <button onClick={this.incrementCount}>
                    Count {this.state.count}
                </button>
                <button onClick={this.addName}>
                    {name ? name : 'Set name'}
                </button>
            </div>
        )
    }
}

export default ClassCounter
