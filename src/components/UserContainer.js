import React from 'react'
import { connect } from 'react-redux'
import  {counterAction} from './../redux/index'
const UserContainer = (props) => {
    return (
        <div>
            <h1>Counter {props.cakeCounter} </h1>
            <button onClick={props.counterAction1}>Click Here</button>
        </div>
    )
}


//state from the redux store
const mapStateToProps = state => {
    console.log(state);
    return {
        cakeCounter : state
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        counterAction1 : () => dispatch(counterAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
