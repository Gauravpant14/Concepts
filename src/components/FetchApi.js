import React,{useEffect} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import { fetchUsers } from './../redux/index'
import { loadMoreUsers } from './../redux/index'
 
const FetchApi = () => {
    const state = useSelector(state => state.users)
    console.log("state is " + state.map(e => e))
    const dispatch = useDispatch()
   
    return (
        <div>
            <h2>Fetching Api using Axious and Thunk MiddleWare </h2>
            <ul>
               
             {state.map((e) => <li> Name: {e.name}</li> )}
              
            </ul>
            <button onClick={() => dispatch(fetchUsers())}>Fetch Api</button>
            <button onClick={() =>dispatch(loadMoreUsers()) }>Load More</button>
        </div>
    )
}

export default FetchApi
