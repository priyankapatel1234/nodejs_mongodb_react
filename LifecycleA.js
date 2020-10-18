import React, { Component } from 'react'
import LifecycleB from './LifecycleB';


 class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'priyanka'
        }
        console.log('lifecylea constrator')
    }

    static getDerivedStateFromProps(props ,state) {
        console.log('lifecylea getderivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A componentDid mount')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <div> Lifecycle A</div>
            <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
