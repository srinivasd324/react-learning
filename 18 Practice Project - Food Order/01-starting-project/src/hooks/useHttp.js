import { useState } from "react";

async function sendHttpRequest(url, config){
    const response = await fetch(url, config);
    const data = await response.data();

    if(!response.ok){
        throw new Error(data.message || "Something went wrong...Failed to send equest");
    }

    return data;
}
export default function useHttp(){
    useState();
    function sendRequest(){
        try{
            const resData = sendHttpRequest();
        } catch(error){
            
        }
        
    }
    
}