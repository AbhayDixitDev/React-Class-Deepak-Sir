import { useEffect, useState } from 'react'
import axios from 'axios'
const Data = () => {
    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/info').then((items)=>setJsonData(items.data));
    }, [])

  return (
    <>
   { console.log(jsonData)}
    </>
  )
}

export default Data
