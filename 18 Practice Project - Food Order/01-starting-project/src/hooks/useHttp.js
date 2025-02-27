import { use, useCallback, useEffect } from "react";
import { useState } from "react";

async function sendHttpRequest(url, config){
    const response = await fetch(url, config);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Something went wrong...Failed to send equest");
    }

    return data;
}
export default function useHttp(url,config, initialData){
    const [error, setError] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const [data,setData] = useState(initialData);
    const sendRequest = useCallback(async function sendRequest(){
        setIsLoading(true);
        try{
            const resData = await sendHttpRequest(url,config);
            setData(resData);
        } catch(error){
            setError(error.message || "Something went wrong!!");
        }
        setIsLoading(false);
    }, [url,config]);

    useEffect(()=>{
        if(config && (config.method === 'GET' || !config.method) || !config){
            sendRequest(); 
        }
        
    },[sendRequest, config]);

    return{
        data,
        isLoading,
        error,
        sendRequest
    }
    
}