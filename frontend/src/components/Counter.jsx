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
        let delay = 50; // Default delay

        if (target < 20) {
          delay = 200; // Increase delay for numbers less than 20
        }

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, delay);
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
