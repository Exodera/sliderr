import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setpeople] = useState(data);
  const [index, setIndex]=useState(1);

 useEffect(()=>{
  const lastIndex = people.length -1;

  if(index<0){
    setIndex(lastIndex);
  }

  if(index > people.length -1){
    setIndex(0);
  }

 },[people,index])

 useEffect(()=>{
  let slider = setInterval(()=>{
    setIndex(index+1);
  },3000)
  return ()=>{
    clearInterval(slider);
  }

 },[index])

  return(
    <section className="section">
      <div  className="title">
       <h2>
        <span>/</span>reviews
       </h2>
        <div className="underline"></div>

      </div>
      <div className="section-center">
        {people.map((person,personIndex)=>{
          let position = 'nextSlide';

          if(index === personIndex){
            position = 'activeSlide'
          }
          if(personIndex === index -1 || (index === 0 && personIndex === people.length -1) ){
            position = 'lastSlide'
          }
          
          
          return <article className={position}>
            <img className='person-img' src={person.image} alt={person.name}/>
            <h4>{person.name}</h4>
            <p className='title'>{person.title}</p>
            <p className='text'>{person.quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
        })}
        <button className='prev' onClick={()=> setIndex(index -1)}><FiChevronLeft/></button>
        <button className='next' onClick={()=> setIndex(index +1)}><FiChevronRight/></button>
      </div>

    </section> 
   
  )
}

export default App;