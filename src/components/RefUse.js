import React,{useRef,useEffect,useState} from 'react'

const RefUse = () => {
    const [oldVal,setOldVal] = useState()
    const [count,setCount] = useState(1)
    const ref = useRef()
    const changeVal = () => {
      if(count === 1 ){
          setOldVal(ref.current.innerHTML)
          setCount((p) => p+1)
      }
     ref.current.innerHTML = "I am Changed"
    }

    const getOldVal = () => {
        ref.current.innerHTML = oldVal
    }

    return (
        <div>
            {/* {JSON.stringify(oldVal)} */}
            <h3 ref={ref}>OLD VALUE</h3>
            <button onClick={()=> changeVal()}>Change Value</button>
            {
          count > 1 && (
          <button onClick={() => getOldVal()}>
              Old Value
          </button>
          )
            }
            
            
        </div>
    )
}

export default RefUse
