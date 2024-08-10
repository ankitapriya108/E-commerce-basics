import React,{useEffect,useState} from 'react'           
import axios from 'axios'
import './home.css'


function Home() {
const[data,setData] = useState([]);

useEffect(()=>
{ 
  axios.get("https://dummyjson.com/products")
  .then((result)=>{
   setData(result.data.products)   
    })
},[])
console.log(data); 


  return (
    <div className='box'>
      {data.map((value,index)=>
      {
        return <div className='product' key={index}> 
        <img src={value.thumbnail} alt=""/>
        <h3>{value.id}</h3>
          <h2>{value.title}</h2>

        </div>                      
      })}
    </div>
  )
}
export default Home





