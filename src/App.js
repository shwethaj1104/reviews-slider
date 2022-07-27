import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1)
    }
    if (index > people.length - 1) {
      setIndex(0)
    }
  }, [index])
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider)
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          Reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //more stuff
          let position = 'nextSlide';
          if (personIndex === index) { position = 'activeSlide' }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length)) { position = 'lastSlide' }

          return <article className={position} key={id}>
            <img src={image} className='person-img'></img>
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        })}
        <button onClick={() => setIndex(index - 1)} className='prev'><FiChevronLeft /></button>
        <button onClick={() => setIndex(index + 1)} className='next'><FiChevronRight /></button>
      </div>
    </section>
  );
}

export default App;
