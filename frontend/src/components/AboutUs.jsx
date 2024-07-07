import React, {useEffect} from 'react'
import './AboutUs.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from './Newsletter';
import img1 from '../assets/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg'

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   <div className="about-container">
     <div className="banner-about">
      <div className="banner-sect">
      <p className='banner-title'>About us</p>
      </div>    
    </div>
    <div className="about-content">

    <p data-aos="fade-up" className='txt_p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus totam, fuga est rem veritatis corporis dolorum? Repellat asperiores nostrum alias deserunt reprehenderit autem doloremque et, saepe itaque, rem ipsam? Minus?</p>

    <div className="about-grid">
        <div data-aos="fade-left" className="content-grid">
            <img src={img1} alt="" className='img_gal'/>
        </div>
        <div data-aos="fade-right"className="content-grid">
          <p className='title-primary'>Lorem ipsum dolor.</p>
            <p className='txt_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia officiis placeat iure, laboriosam in consectetur cum eveniet delectus harum deserunt, autem totam rerum magnam saepe sint ullam tenetur voluptas dolor qui! Debitis, quos deserunt. Soluta quasi, tenetur laborum eos excepturi sequi aliquid et alias exercitationem error enim? Nesciunt, corrupti.</p>
        </div>
        <div data-aos="fade-right" className="content-grid">
        <p className='title-primary'>Lorem ipsum dolor.</p>
            <p className='txt_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illum itaque. Temporibus perspiciatis, vero consequatur dolor, praesentium dolorem quae laudantium odio, illo non quis aperiam! Sint nihil, repellat praesentium architecto earum alias molestiae magni suscipit at sit quos similique velit quis aliquid ratione voluptatem. Maxime, tempore commodi. Porro, vitae mollitia.</p>
        </div>
        <div data-aos="fade-left" className="content-grid">
        <img src={img1} alt="" className='img_gal' />
        </div>
    </div>

    <p data-aos="fade-up" className='txt_p'style={{marginBottom:"3rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus dignissimos harum praesentium provident mollitia natus, distinctio exercitationem, ducimus atque eos id eum, enim culpa magnam eligendi iusto itaque! Consectetur labore doloremque eaque fugit sunt nisi deserunt perspiciatis culpa nostrum!</p>
   </div>
   <Newsletter/>
   </div>
  )
}

export default AboutUs