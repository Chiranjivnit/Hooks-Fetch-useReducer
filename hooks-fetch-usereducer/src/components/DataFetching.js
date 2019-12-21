import React,{useState,useEffect} from 'react';
import API from '../apiService/apiService';
import { CircularProgress} from '@material-ui/core';

const DataFetch = ()=>{

    const [loading,setLoading] = useState(true);
    const [err,setErr] = useState('');
    const [sucess,setSucess] = useState([]);

    useEffect(()=>{
      API.get(`1`)
      .then((res)=>{
          console.log(res)
          setLoading(false)
          setSucess(res.data)
      })
      .then((err)=>{
          console.log(err)
          setLoading(false);
          setErr(`something went wrong`);
      })
    },[])
    return(
        <div>
        { loading ?<CircularProgress size={34}/>  :<h1>{sucess.title}</h1>}
        {err ? !err : null}
        </div>
    )
}
export default DataFetch;