import React, {useEffect, useState} from 'react'
import axios from 'axios'

function FetchData() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8001/bots')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);
  return (
    <div>console</div>
  )
}

export default FetchData