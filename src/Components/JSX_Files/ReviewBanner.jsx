import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../CSS_Files/ReviewBanner.css'; 

import card1img from '../_Imgs/Gym2.jpg'
import card2img from '../_Imgs/Gym2.jpg'
import card3img from '../_Imgs/Gym2.jpg'
import card4img from '../_Imgs/Gym2.jpg'
import card5img from '../_Imgs/Gym2.jpg'
import card6img from '../_Imgs/Gym2.jpg'
import card7img from '../_Imgs/Gym2.jpg'
import card8img from '../_Imgs/Gym2.jpg'
import card9img from '../_Imgs/Gym2.jpg'
import card10img from '../_Imgs/Gym2.jpg'

const ReviewBanner = () => {
  const cardData = [
    { id: 1, text: 'Card 1', imageUrl: { card1img } },
    { id: 2, text: 'Card 2', imageUrl: { card2img } },
    { id: 3, text: 'Card 2', imageUrl: { card3img } },
    { id: 4, text: 'Card 2', imageUrl: { card4img } },
    { id: 5, text: 'Card 2', imageUrl: { card5img } },
    { id: 6, text: 'Card 2', imageUrl: { card6img } },
    { id: 7, text: 'Card 2', imageUrl: { card7img } },
    { id: 8, text: 'Card 2', imageUrl: { card8img } },
    { id: 9, text: 'Card 2', imageUrl: { card9img } },
    { id: 10, text: 'Card 2', imageUrl: { card10img } },
    { id: 1, text: 'Card 1', imageUrl: { card1img } },
    { id: 2, text: 'Card 2', imageUrl: { card2img } },
    { id: 3, text: 'Card 2', imageUrl: { card3img } },
    { id: 4, text: 'Card 2', imageUrl: { card4img } },
    { id: 5, text: 'Card 2', imageUrl: { card5img } },
    { id: 6, text: 'Card 2', imageUrl: { card6img } },
    { id: 7, text: 'Card 2', imageUrl: { card7img } },
    { id: 8, text: 'Card 2', imageUrl: { card8img } },
    { id: 9, text: 'Card 2', imageUrl: { card9img } },
    { id: 10, text: 'Card 2', imageUrl: { card10img } },
    
  ];

  return (
    <>

      <div className="carousel-container">
        {/* <div className="supplements"><h1>Supplements</h1></div> */}
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={70 / cardData.length}
        >
          {cardData.map((card) => (
            <div key={card.id} className="card">
              <img src={card.imageUrl} alt={card.text} />
              <p>{card.text}</p>
            </div>
          ))}
        </Carousel>
      </div>

    </>
  );
};


export default ReviewBanner;
