import React, { useEffect } from 'react'

const SearchBox = () => {
    const [keyWord,setKeyWord] = React.useState()
    const [countryList, setCountryList] = React.useState()
    const [countryListByDefault, setCountryListByFefault] = React.useState()
    
    const fetchData = async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const result = await response.json()
        setCountryList(result)
        setCountryListByFefault(result)
    }

    const getValue = async(e) => {
        // console.log(e.currentTarget,"--------------")
        const filterList = countryListByDefault.filter((country) => { 
            return  country.name.toLowerCase().includes(keyWord?.toLowerCase())
         })
         console.log(filterList,"this is filter list ");
        setCountryList(filterList) 
    }

    const getTarget = (e) => {
console.log(e.target.value,"-------------")
    }

    useEffect(() => {
        if(keyWord == '' || keyWord == null){
            console.log("running=======")
            fetchData()
        }
    }, [keyWord])

    useEffect(() => {
        fetchData()
      
    }, [])

    return (
        <div>
           {JSON.stringify(keyWord)}
            <input type="search" onChange={(e)=> setKeyWord(e.target.value)} onClick={(e) => getTarget(e)}/>
            <button onClick={(e) => getValue(e)}>Search</button>
            <br />
            {countryList?.map((e) => <li>{e.name}</li>)}
        </div>
    )
}

export default SearchBox
