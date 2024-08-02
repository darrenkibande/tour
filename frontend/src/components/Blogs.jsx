import React, {useEffect} from 'react';
import './Blogs.css'

import AOS from "aos";
import "aos/dist/aos.css";

import blog1 from '../assets/alex-boyd-HA0Rgl-ISko-unsplash.jpg'
import blog2 from '../assets/alex-boyd-HA0Rgl-ISko-unsplash.jpg'
import blog3 from '../assets/alex-boyd-HA0Rgl-ISko-unsplash.jpg'
import blog4 from '../assets/alex-boyd-HA0Rgl-ISko-unsplash.jpg'
import blog5 from '../assets/alex-boyd-HA0Rgl-ISko-unsplash.jpg'
import blog6 from '../assets/alex-boyd-HA0Rgl-ISko-unsplash.jpg'
import Newsletter from './Newsletter';

function Blog() {

  useEffect(() =>{
  AOS.init();
  AOS.refresh();
  window.scrollTo(0,0);
},[]);

  return ( 
   <div className="blog-header">
    
    <div className="banner-blog">
        <div className="banner-sect">
          <p className='banner-title'>Latest In The Blogs</p>
        </div>
      </div>

    <div className="blog-container-top" data-aos="zoom-in-up">      

    <div class="card_blog">
    <div class="temporary_text"> 
        <img src={blog1} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">The Importance of Modern Techniques in Agriculture</span>
        <span class="card_blog_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_blog_description">
        In today's world, it is more important than ever to use modern techniques in agriculture. These techniques can help farmers to produce more food while using fewer resources. This is essential to feeding a growing global population.

In this blog post, we will discuss some of the most important modern techniques in agriculture. We will also explain how these techniques can help farmers to produce more food while reducing their environmental impact.
          </p>
    
      </div>
      </div>   
    
      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog2} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">The Top 10 Health Benefits of Eating Fruits and Vegetables</span>
        <span class="card_blog_subtitle">Why you should make fruits and vegetables a staple of your diet</span>
        <p class="card_blog_description">
        Eating fruits and vegetables offers a multitude of health benefits. They are rich in essential vitamins, minerals, and fiber, promoting overall well-being. These nutrient-packed foods can help lower the risk of chronic diseases like heart disease and diabetes, support weight management, and enhance digestion. Additionally, their antioxidants protect against cell damage, boosting the immune system and slowing aging. The abundance of natural phytochemicals in fruits and veggies further aids in reducing inflammation and improving skin health. Incorporating these colorful foods into your diet is a delicious way to nurture your body and achieve optimal health.
          </p>
    
      </div>
      </div>

      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog3} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">How to Choose the Freshest Fruits and Vegetables</span>
        <span class="card_blog_subtitle">Tips for picking the best produce at the grocery store</span>
        <p class="card_blog_description">
        To select the freshest fruits and vegetables, start by examining their appearance. Look for vibrant colors, firm textures, and no visible blemishes or bruises. Smell plays a key role; ripe produce should have a pleasant aroma. Check for weight and heft—denser fruits and vegetables are usually fresher. Additionally, consult in-season charts for your region to guide your choices, as seasonal produce tends to be fresher and more flavorful. Finally, consider buying from local markets or trusted suppliers for the best chances of enjoying the freshest and tastiest produce.
          </p>
    
      </div>
      </div> 

      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog4} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title"> How to Store Fruits and Vegetables Properly</span>
        <span class="card_blog_subtitle">Keep your produce fresh and flavorful for longer</span>
        <p class="card_blog_description">
        Proper storage of fruits and vegetables is crucial to maintain freshness and extend their shelf life. Keep fruits like apples, oranges, and bananas in a cool, dry place, away from direct sunlight, to prevent overripening. Store berries and delicate items in the refrigerator, but avoid washing until use to prevent mold. Ethylene-producing fruits, like avocados, should be kept separate from ethylene-sensitive produce. Regularly check and remove any spoiled items to prevent spoilage from spreading.
          </p>
    
      </div>
      </div>

      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog5} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">How to Grow Your Own Fruits and Vegetables</span>
        <span class="card_blog_subtitle">Tips for starting your own garden</span>
        <p class="card_blog_description">
        To grow your own fruits and vegetables, start by selecting a sunny spot with well-drained soil. Choose appropriate crops for your climate and space, considering factors like water availability and seasonality. Prepare the soil by adding compost or organic matter for nutrients. Plant seeds or young plants at the right depth and spacing, and provide consistent watering. Weed regularly, mulch to retain moisture, and protect against pests with natural solutions. Monitor growth, adjust care as needed, and enjoy the satisfaction of harvesting your own fresh, healthy produce for a sustainable and rewarding gardening experience.
          </p>
    
      </div>
      </div>

      <div class="card_blog">
    <div class="temporary_text">
        <img src={blog6} alt="" />
    </div>
      <div class="card_blog_content">
    <span class="card_blog_title">The Best Fruits and Vegetables for Weight Loss</span>
        <span class="card_blog_subtitle">Incorporate these healthy foods into your diet to reach your goals</span>
        <p class="card_blog_description">
        The best fruits and vegetables for weight loss are nutrient-packed and low in calories. Leafy greens like spinach and kale provide fiber and vitamins while keeping calorie intake in check. Berries, like blueberries and strawberries, offer antioxidants and sweetness without excess sugar. Apples and pears provide satisfying fiber and hydration. Cruciferous veggies, such as broccoli and cauliflower, boost metabolism and promote fullness. Citrus fruits like oranges and grapefruits aid digestion and reduce appetite. These natural choices support a healthy, balanced diet, making it easier to shed pounds while staying nourished and satisfied.
          </p>
    
      </div>   
      

      </div>         
    </div> 
    <Newsletter/> 
   </div>
  )
}

export default Blog