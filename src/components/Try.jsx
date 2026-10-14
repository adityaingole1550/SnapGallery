import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Try = (e) => {
    const [Data, setData] = useState([])
    const [API, setAPI] = useState("https://picsum.photos/v2/list?page=")
    const getData = async ()=>{
        const response = await axios.get(API+e.Page)
        setData(response .data);
    }

    useEffect(()=>{getData()},[])

    const getImages = ()=>{
        
      return Data.map((e)=>(
      <div 
      onClick={()=>setPage(2)} 
      className='h-35 w-43 lg:h-35 lg:w-42 xl:h-60 xl:w-74 overflow-hidden'
      ><img className="w-full h-full object-cover" src={e.download_url}/>
      </div>
      ));  
    };
  return (
    <div className='flex flex-wrap justify-betwee p-4 gap-4'>
       {getImages()}
    </div>
  )
}

export default Try
