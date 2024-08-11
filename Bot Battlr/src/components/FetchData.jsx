import React, {useEffect}from 'react'
import axios from 'axios'

function FetchData() {

    useEffect(() => {
        axios.get('http://localhost:8001/bots')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, []);
  return (
    <div>console</div>
  )
}

export default FetchData