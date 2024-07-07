import React, {useEffect} from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './FAQ.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from './Newsletter';

function FAQ() {

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="container-title">
        <p className="banner-title">F.A.Q</p>
        </div>
       
        <div data-aos="zoom-in" className="accordions">
          <div className="accordion">
            <label className="accordion__title">
              <input type="radio" name="radio" id="radio_1" defaultChecked /> 
              Question 1? <FaAngleDown className='faq-icon'/>
            </label>
            <div className="accordion__text">
              <p>
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed! Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed! Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
              </p>
            </div>
          </div>
          <div className="accordion">
            <label className="accordion__title" htmlFor="radio_2">
              <input type="radio" name="radio" id="radio_2" /> 
              Question 2? <FaAngleDown className='faq-icon'/>
            </label>
            <div className="accordion__text">
              <p>
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed! Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
              </p>
            </div>
          </div>
          <div className="accordion">
            <label className="accordion__title" htmlFor="radio_3">
              <input type="radio" name="radio" id="radio_3" /> 
              Question 3? <FaAngleDown className='faq-icon'/>
            </label>
            <div className="accordion__text">
              <p>
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
              </p>
            </div>
          </div>
        </div>

        <Newsletter/>
      </div>
    </section>
  );
}

export default FAQ;
