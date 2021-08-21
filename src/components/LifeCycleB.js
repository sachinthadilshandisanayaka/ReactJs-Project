import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Dilshan'
        }
        console.log("Life cycle B constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life cycle B static function');
        return null;
    }

    componentDidMount() {
        console.log('Life cycle B ComponentDidMount');
    }

    render() {
        console.log("Life cycle B Render");
        return (
            <div>
                Life cycle B
            </div>
        )
    }
}

export default LifeCycleB
