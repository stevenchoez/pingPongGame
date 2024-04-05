import React, {useState, useEffect} from 'react';
import axios from 'axios';

const URL = 'http: //localhost:8000/users'

const CompUser =() =>{

    const [users, setUsers] = useState([])
    useEffect( ()=>{
      getUsers()
    }, [])

    const getUsers = async () => {
      const res = await axios.get(URL)
      setUsers(res.data)
    }

    return(users)

  }

  export default CompUser