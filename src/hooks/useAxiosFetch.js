import axios from "axios";
import { useEffect, useState } from 'react'

const useAxiosFetch = (dataUrl) => {
  const [data, setData]= useState([])
  const [fetchError, setFetcherror]= useState(null)
  const [isLoading, setIsloading] = useState(false)

  useEffect( ()=>{
    let isMounted = true
    const source = axios.CancelToken.source()

    const fetchData = async (url) =>{
        setIsloading(true)
        try{
            const response = await axios.get(url,{
                cancelToken: source.token
            })
            if(isMounted){
                setData(response.data)
                setFetcherror(null)
            }
        }catch(err){
            if(isMounted){
                setFetcherror(err.message)
                setData([])
            }
        }finally{
            isMounted && setIsloading(false)
        }
    }
    fetchData(dataUrl)

    const cleanUp= () =>{
        isMounted=false
        source.cancel()
    }
    return cleanUp
  }, [dataUrl])

  return ({data, fetchError, isLoading})
}

export default useAxiosFetch