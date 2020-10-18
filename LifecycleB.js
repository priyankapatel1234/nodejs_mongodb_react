import React, { Component } from 'react'

 class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'priyanka'
        }
        console.log('lifecyleB constrator')
    }

    static getDerivedStateFromProps(props ,state) {
        console.log('lifecyleB getderivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle BcomponentDid mount')
    }
    
    render() {
        console.log('LifecycleBrender')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
