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
    <div>
        <div>
            <h2>Bots Collection</h2>
            {/* <Table /> */}

            <div>
                <h2>My Army</h2>
                {/* <Table /> */}
            </div>
        </div>
    </div>
  )
}

export default FetchData