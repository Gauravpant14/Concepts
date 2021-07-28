import React,{useEffect} from 'react'


const UseMemoUse = props => {
    console.log("child component rendered")
    console.log(props.res);
    useEffect(() => {
        props.data("users")
    }, [])
    return (
        <div>
            <h3>{props.title}</h3>
            <p>child component</p>
            {props.res?.map((e) => e.name)}

        </div>
    )
}

export default React.memo(UseMemoUse)
