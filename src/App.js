
import './App.css';
import React,{useState} from "react";

const App=()=> {
 

  const dummyData = [
    {
        id : 1,
        title : "Nike",
        price : "Orbital Keys",
        desc : " Chandigarh",
    },
    {
      id : 2,
      title : "Patagonia",
      price : "XPress Bottle",
      desc : " Chennai",
  },
  {
    id : 3,
    title : "Amazon",
    price : "Swish Wallet",
    desc : " Kolkata",
},
{
  id : 4,
  title : "Monocle",
  price : "Sharpy Knife",
  desc : " Bangalore",
},
{
  id : 5,
  title : "Apple",
  price : "Handy Mop",
  desc : "New York ",
},
{
  id : 6,
  title : "Greyhound",
  price : " ONEset",
  desc : "Surat ",
},
{
  id : 7,
  title : "Greyhound",
  price : " Vortex Bottle",
  desc : " Kanpur",
},
{
  id : 8,
  title : "Xerox",
  price : " Terra Shsave",
  desc : "Indore ",
},
{
  id : 9,
  title : "Adidas",
  price : "Snap It",
  desc : "Bhopal ",
},
{
  id : 10,
  title : "Google",
  price : " Wallet",
  desc : " 	Memphis",
},
{
  id : 11,
  title : "Pixar",
  price : "Swish Wallet",
  desc : "	Albuquerque ",
},
{
  id : 12,
  title : "UPS",
  price : " Terra ",
  desc : " 	Portland",
},
{
  id : 13,
  title : "GEICO",
  price : "Scruncho",
  desc : " 	Chicago",
},
{
  id : 14,
  title : "HP",
  price : " Stickem",
  desc : " 	Columbus",
}
  ]
  const[value,setValue]=useState("");
  const[dataSource,setDataSource]=useState(dummyData);
  const[tableFilter,setTableFilter]=useState([ ]);


  const filterData=(e)=>{
    if(e.target.value!=""){
      setValue(e.target.value);
      // callback function ka variable
      // const o;
      const filterTable=dataSource.filter(o=>Object.keys(o).some(k=>
      String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
      ));
      setTableFilter([...filterTable])
    }else{
      setValue(e.target.value);
      setDataSource([...dataSource])
    }
    }
  


  return (
   <>
   <div class="input-group flex-nowrap dark">
  {/* <span class="input-group-text" id="addon-wrapping">@</span> */}
  <input style={{backgroundColor:"#a8e9a5de"}} 
  type="text" 
  value={value}

  onChange={filterData}

  class="form-control"
   placeholder="Search..." 
   aria-label="Username" 
   aria-describedby="addon-wrapping"/>
</div>

<table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Brand Name</th>
      <th scope="col">Product Name</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
  
   
    {value.length > 0 ? tableFilter.map((data)=>{
      return(
        <tr>
          <td >{data.id}</td>
          <td >{data.title }</td>
          <td >{data.price}</td>
          <td >{data.desc}</td>
        </tr>
      )
    })
  : 
  dataSource.map((data,index)=>{
    return(
      <tr>
        <td>{data.id}</td>
        <td >{data.title }</td>
        <td >{data.price}</td>
        <td>{data.desc}</td>
      </tr>
    )
  })
}
  </tbody>
</table>
   
   </>
  );
}


export default App;
