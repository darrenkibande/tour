import React, { useEffect, useState } from 'react';
import './Counter.css'

function Counter() {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    setCounters(counters);
  }, []);

  useEffect(() => {
    counters.forEach((counter) => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 50); // Increase the delay to slow down the counter
        } else counter.innerText = target;
      };
      updateCounter();
    });
  }, [counters]);

  return (
    <div className="cont">
      <div className="counter-container">
        <div className="counter" data-target="10"></div>
        <span className='count-txt'>National awards</span>
      </div>
      <div className="counter-container">
        <div className="counter" data-target="5000"></div>
        <span className='count-txt'>Hours on projects</span>
      </div>
      <div className="counter-container">
        <div className="counter" data-target="10"></div>
        <span className='count-txt'>Years of experience</span>
      </div>
    </div>
  );
}

export default Counter;
