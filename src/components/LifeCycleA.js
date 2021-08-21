import React, { Component } from 'react'
import { LifeCycleB } from './LifeCycleB';

export class LifeCycleA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Sachintha'
        }
        console.log("Life cycle A constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life cycle A static function');
        return null;
    }

    componentDidMount() {
        console.log('Life cycle A ComponentDidMount');
    }

    render() {
        console.log("Life cycle A Render");
        return (
            <div>
                Life cycle A
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
