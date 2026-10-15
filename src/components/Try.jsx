import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Try = (e) => {
    const getData = async ()=>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${e.Page}`)
        e.setData(response .data);
    }

    useEffect(()=>{getData()},[e.Page])

    const getImages = ()=>{
        
      return e.Data.map((e)=>(
      <div 
      className='h-35 w-43 lg:h-35 lg:w-42 xl:h-60 xl:w-74 overflow-hidden'
      ><img className="w-full h-full object-cover" src={e.download_url} alt={e.author} loading="eager"/>
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
