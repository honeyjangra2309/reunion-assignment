import React,{useState} from 'react'
import { DownArrow } from '../assets'
import houses from  "../assets/Data"

function Hero() {
  const [Houses,setHouses]= useState([]);
  const [data, setdata] = useState({
    location: "",
    price: "",
    type: ""
  })
  
  const showData =() => {
    console.log(data);
    console.log(houses);
    let list=[];
    let min_price=data.price.split(',')[0];
    let max_price=data.price.split(',')[1];
    console.log(min_price,max_price);
    houses.map(house => {
      if(house.location === data.location && house.type === data.type && house.price>=min_price && house.price<=max_price )
       list.push(house);
    })
    setHouses(list);
  }
    
  return (
    <section className='w-full py-6 px-12 bg-[#F7F7F7]'>
        <div className='flex sm:flex-row flex-col items-center justify-between py-6 px-12'>
           <span className='font-poppins text-[30px] font-semibold text-primary'>Search Properties to rent</span>
           <button className='flex sm:my-0 my-2 flex-row justify-between items-center px-3 rounded-[8px] border-2 border-solid border-#E0DEF7 px-3 py-1 outline-none'>
                <span className='font-poppins text-[16px] mx-3'>Search with SearchBar</span>
                <img src={DownArrow} alt="" />
           </button>
        </div>
        <div className='flex sm:flex-row flex-col  items-center justify-between py-6 px-12 bg-white rounded-[10px]'>
            <div className='p-1 flex flex-col items-start border-right-1 border-solid border-grey'>
               <label htmlFor="" className='font-poppins'>Location : </label>
               <select className='font-poppins' onChange={e => setdata(prev => ({location: e.target.value, type: prev.type, price: prev.price}))}>
                <option value="null" className='hidden'></option>
                 <option value="Illinois">Illinois</option>
                 <option value="Pennsylvania">Pennsylvania</option>
               </select>
           </div> 
            <div className='p-1 flex flex-col items-start border-right-1 border-solid border-grey'>
               <label htmlFor="" className='font-poppins sm:my-0 my-2'>Property Type : </label>
               <select className='font-poppins w-full' onChange={e => setdata(prev => ({location: prev.location, type: e.target.value, price: prev.price}))}>
               <option value="null" className='hidden'></option>
                 <option value="Rental">Rental</option>
                 <option value="house">house</option>
               </select>
           </div> 
            <div className='p-1 flex flex-col items-start justify-start border-right-1 border-solid border-grey'>
               <label htmlFor="" className='font-poppins sm:my-0 my-2'>Price : </label>
               <select className='font-poppins' onChange={e => setdata(prev => ({location: prev.location, type: prev.type, price: e.target.value}))}>
               <option value="null" className='hidden'></option>
                 <option value="500,1250">$500-$1250</option>
                 <option value="1300,3000">$1300-$3000</option>
               </select>
           </div> 
           <div>
            <button className='font-poppins py-3 px-6 bg-[#7065F0] text-white rounded-[10px] sm:my-0 my-2' onClick={showData}>Search</button>
           </div>
        </div>
         <div className='flex flex-row items-center justify-between py-6 px-12'>
           {
             Houses.map((house,index) => {
               return <div className='flex flex-col justify-start items-start bg-white rounded-[10px]' key={index}>
                  <img src={house.image} alt="" className='w-[100%] h-[200px] rounded-t-[10px] object-cover' />
                  <span className='font-poppins px-3 py-2'>$ <span className='font-poppins text-[30px]'>{house.price}</span>/month</span>
                  <span className='font-poppins pb-2 px-3'>{house.address}</span>
               </div>
             })
           }
         </div>
    </section>
   
  )
}

export default Hero
