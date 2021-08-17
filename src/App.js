import "./App.css";
import { React, useState, useMemo, useEffect,useCallback } from 'react'
import { Provider } from "react-redux";
import store from "./redux/Store/store";
// import FetchApi from "./components/FetchApi";
import SearchBox from "./components/SearchBox";
// import UseCallBack from "./components/UseCallBack";
import UseMemoUse from "./components/UseMemoUse";
import RefUse from "./components/RefUse";
import YoutubeForm from "./components/FormikUse/YoutubeForm";
import FormikContainer from "./components/FormikPractical/FormikContainer";
// import UserContainer from "./components/UserContainer";
// import UseSel from "./components/UseSel";

function App() {

  const [num, setNum] = useState(0)
  const [allData,setData] = useState([])
  const array = useMemo(() => { return [1, 23, 4, 4] }
    , [])

  const fetchData = useCallback(async (type) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
    const data = await res.json()
    setData(data)
     },[])

  useEffect(() => {
    fetchData("todos")
  },[fetchData])  
  return (
    <Provider store={store}>
      <div className="App">
        {/* <button onClick={() => setNum((p) => p + 1)}>Inc</button>
        <button onClick={() => setNum((p) => p - 1)}>Dec</button>
        <UseMemoUse title="hello" arr={array} data={fetchData} res={allData}/>
        <p>Num : {num}</p>
        {allData?.map((e) => <li>{e.title}</li>)}
        {} */}


        {/* <SearchBox /> */}

        {/* <RefUse /> */}

        {/* <YoutubeForm /> */}

        <FormikContainer />
      </div>
    </Provider>
  );
}

export default App;
