import { useEffect,useState } from "react";

const axios = require('axios');

function useFetch(url){

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [data,setData]=useState([]);


    useEffect(()=>{

        setLoading(true);

        
            getData(url);
            setLoading(false)
       
       

    },[])

    const getData=async(url)=>{

        try{
            await axios.get(url)
            .then(function (response) {
              
              console.log("fetch call",response.data.data);
          
              setData(response.data.data)
              
    
            })
        }
        catch(err)
        {
            setLoading(false)
            setError(err);
        }
        

    }


    return {loading,error,data}
}

export {useFetch}