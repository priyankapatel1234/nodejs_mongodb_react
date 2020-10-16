import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div> Welcome Priyanka</div>

/*        return  this.state.isLoggedIn ? (
            <div> Welcome priyanka</div> 
            ) : (
            <div>Welcome guest</div>

        )

 /*       let message
        if(this.state.isLoggedIn) {
            message =<div> Welcome priyanka</div>
        }else {
            message =<div>Welcome guest</div>
        }

        return <div>{message}</div>

  /*      if(this.state.isLoggedIn) {
            return(
                <div>
                    welcome priyanka
                </div>
            )
        } else {
            return(
                <div>
                    welcome guest
                </div>
            )
        }
  /*      return (

            <div>
            <div> Welcome priyanka</div>   
            <div> welcome guest</div>
            </div>
        )  */
    }
}

export default UserGreeting
