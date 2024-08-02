import React, { useEffect, useState, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './FAQ.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details className="accordion-item" open={isOpen} onClick={toggleAccordion}>
      <summary>
        <span className="txt_p">{title}</span>
        <span className="accordion-icon">
          <FaAngleDown />
        </span>
      </summary>
      <div className="txt_p" ref={contentRef}>
        {content}
      </div>
    </details>
  );
};

function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  const accordionData = [
    {
      title: 'What is the universe?',
      content:
        'The universe is the entirety of all objects and spaces that exist in time and space. It is the largest known system and is believed to be approximately 13.8 billion years old.',
    },
    {
      title: 'What is dark matter?',
      content:
        'Dark matter is a form of matter that cannot be seen directly but can be inferred by its influence on galaxy formation and the speed of star rotation. It is believed to make up 27% of the total mass of the universe.',
    },
    {
      title: 'What is the Big Bang?',
      content:
        'The Big Bang is the event that marked the beginning of the universe, approximately 13.8 billion years ago. It is believed to have been a moment when the entire universe rapidly expanded from an infinitely dense and hot point.',
    },
    {
      title: 'What is dark energy?',
      content:
        "Dark energy is a form of energy that cannot be seen directly but can be inferred by its influence on the universe's expansion. It is believed to make up 68% of the total energy of the universe.",
    },
    {
      title: 'What is the cosmic horizon?',
      content:
        "The cosmic horizon is the farthest limit that can be seen from Earth. It is the most distant point visible due to the universe's expansion and the speed of light. All stars and galaxies beyond this point are beyond human sight.",
    },
  ];

  return (
    <div className="accordion-container">
       <div className="faq-cont">
        <div className="cont-title">
          <p className="banner-title">F.A.Q</p>
        </div>
        </div>

        <div className="faq-div">      

      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}

      </div>
    </div>
  );
}

export default FAQ;
