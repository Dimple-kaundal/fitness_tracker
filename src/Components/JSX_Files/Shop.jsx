import React from "react";
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../CSS_Files/Shop.css';

import supplement1 from "../_Imgs/Gym2.jpg";
import supplement2 from "../_Imgs/Gym2.jpg";
import supplement3 from "../_Imgs/Gym2.jpg";
import supplement4 from "../_Imgs/Gym2.jpg";
import supplement5 from "../_Imgs/Gym2.jpg";
import supplement6 from "../_Imgs/Gym2.jpg";
import supplement7 from "../_Imgs/Gym2.jpg";
import supplement8 from "../_Imgs/Gym2.jpg";
import supplement9 from "../_Imgs/Gym2.jpg";
import supplement10 from "../_Imgs/Gym2.jpg";

import Equipment1 from "../_Imgs/Gym2.jpg";
import Equipment2 from "../_Imgs/Gym2.jpg";
import Equipment3 from "../_Imgs/Gym2.jpg";
import Equipment4 from "../_Imgs/Gym2.jpg";
import Equipment5 from "../_Imgs/Gym2.jpg";
import Equipment6 from "../_Imgs/Gym2.jpg";
import Equipment7 from "../_Imgs/Gym2.jpg";
import Equipment8 from "../_Imgs/Gym2.jpg";
import Equipment9 from "../_Imgs/Gym2.jpg";
import Equipment10 from "../_Imgs/Gym2.jpg";

import smartwearable1 from "../_Imgs/Gym2.jpg";
import smartwearable2 from "../_Imgs/Gym2.jpg";
import smartwearable3 from "../_Imgs/Gym2.jpg";
import smartwearable4 from "../_Imgs/Gym2.jpg";
import smartwearable5 from "../_Imgs/Gym2.jpg";
import smartwearable6 from "../_Imgs/Gym2.jpg";
import smartwearable7 from "../_Imgs/Gym2.jpg";
import smartwearable8 from "../_Imgs/Gym2.jpg";
import smartwearable9 from "../_Imgs/Gym2.jpg";
import smartwearable10 from "../_Imgs/Gym2.jpg";
import Add from "../Comp/Add";

const Shop = ({ value, setValue }) => {
    const handleAddButton = () => {
        setValue(value + 1);
    }
    const supplementData = [
        { id: 1, text: 'Supplement 1', MRP: '1000', Price: '500/-', imageUrl: supplement1 },
        { id: 2, text: 'Supplement 2', MRP: '1000', Price: '500/-', imageUrl: supplement2 },
        { id: 3, text: 'Supplement 3', MRP: '1000', Price: '500/-', imageUrl: supplement3 },
        { id: 4, text: 'Supplement 4', MRP: '1000', Price: '500/-', imageUrl: supplement4 },
        { id: 5, text: 'Supplement 5', MRP: '1000', Price: '500/-', imageUrl: supplement5 },
        { id: 6, text: 'Supplement 6', MRP: '1000', Price: '500/-', imageUrl: supplement6 },
        { id: 7, text: 'Supplement 7', MRP: '1000', Price: '500/-', imageUrl: supplement7 },
        { id: 8, text: 'Supplement 8', MRP: '1000', Price: '500/-', imageUrl: supplement8 },
        { id: 9, text: 'Supplement 9', MRP: '1000', Price: '500/-', imageUrl: supplement9 },
        { id: 10, text: 'Supplement 10', MRP: '1000', Price: '500/-', imageUrl: supplement10 },

    ];

    const equipmentData = [
        { id: 1, text: 'Equipment 1', MRP: '1000', Price: '500/-', imageUrl: Equipment1 },
        { id: 2, text: 'Equipment 2', MRP: '1000', Price: '500/-', imageUrl: Equipment2 },
        { id: 3, text: 'Equipment 3', MRP: '1000', Price: '500/-', imageUrl: Equipment3 },
        { id: 4, text: 'Equipment 4', MRP: '1000', Price: '500/-', imageUrl: Equipment4 },
        { id: 5, text: 'Equipment 5', MRP: '1000', Price: '500/-', imageUrl: Equipment5 },
        { id: 6, text: 'Equipment 6', MRP: '1000', Price: '500/-', imageUrl: Equipment6 },
        { id: 7, text: 'Equipment 7', MRP: '1000', Price: '500/-', imageUrl: Equipment7 },
        { id: 8, text: 'Equipment 8', MRP: '1000', Price: '500/-', imageUrl: Equipment8 },
        { id: 9, text: 'Equipment 9', MRP: '1000', Price: '500/-', imageUrl: Equipment9 },
        { id: 10, text: 'Equipment 10', MRP: '1000', Price: '500/-', imageUrl: Equipment10 },
    ];

    const wearableData = [
        { id: 1, text: 'Smart Wearable 1', MRP: '1000', Price: '500/-', imageUrl: smartwearable1 },
        { id: 2, text: 'Smart Wearable 2', MRP: '1000', Price: '500/-', imageUrl: smartwearable2 },
        { id: 3, text: 'Smart Wearable 3', MRP: '1000', Price: '500/-', imageUrl: smartwearable3 },
        { id: 4, text: 'Smart Wearable 4', MRP: '1000', Price: '500/-', imageUrl: smartwearable4 },
        { id: 5, text: 'Smart Wearable 5', MRP: '1000', Price: '500/-', imageUrl: smartwearable5 },
        { id: 6, text: 'Smart Wearable 6', MRP: '1000', Price: '500/-', imageUrl: smartwearable6 },
        { id: 7, text: 'Smart Wearable 7', MRP: '1000', Price: '500/-', imageUrl: smartwearable7 },
        { id: 8, text: 'Smart Wearable 8', MRP: '1000', Price: '500/-', imageUrl: smartwearable8 },
        { id: 9, text: 'Smart Wearable 9', MRP: '1000', Price: '500/-', imageUrl: smartwearable9 },
        { id: 10, text: 'Smart Wearable 10', MRP: '1000', Price: '500/-', imageUrl: smartwearable10 },
    ];

    return (
        <div className="page">
            <div className="carousel-container">
                <h2>Supplement</h2>
                <div className='carousel'>
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        swipeable={true}
                        emulateTouch={true}
                        centerMode={true}
                        autoPlay={true}
                        showIndicators={false}
                        stopOnHover={true}
                        useKeyboardArrows={true}
                        width={"84vw"}
                        centerSlidePercentage={333 / supplementData.length}
                    >
                        {supplementData.map((item) => (
                            <div key={item.id} className="card">
                                <img src={item.imageUrl} alt={item.text} style={{ width: '40vh' }} />
                                <p style={{ marginTop: '15px' }}>{item.text}</p>
                                <p><del>MRP. {item.MRP}/-</del></p>
                                <p>Rs.{item.Price}</p>
                                {/* <Add /> */}
                                <button>Add</button>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="carousel-container">
                <h2>Equipment</h2>
                <div className='carousel'>
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        swipeable={true}
                        emulateTouch={true}
                        centerMode={true}
                        autoPlay={true}
                        showIndicators={false}
                        stopOnHover={true}
                        useKeyboardArrows={true}
                        width={"85vw"}
                        centerSlidePercentage={333 / supplementData.length}
                    >
                        {equipmentData.map((item) => (
                            <div key={item.id} className="card">
                                <img src={item.imageUrl} alt={item.text} style={{ width: '40vh' }} />
                                <p style={{ marginTop: '15px' }}>{item.text}</p>
                                <p><del>MRP. {item.MRP}/-</del></p>
                                <p>Rs.{item.Price}</p>
                                <Add />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>


            <div className="carousel-container">
                <h2>Smart Wearable</h2>
                <div className='carousel'>
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        swipeable={true}
                        emulateTouch={true}
                        centerMode={true}
                        autoPlay={true}
                        showIndicators={false}
                        stopOnHover={true}
                        useKeyboardArrows={true}
                        width={"85vw"}
                        centerSlidePercentage={333 / supplementData.length}
                    >
                        {wearableData.map((item) => (
                            <div key={item.id} className="card">
                                <img src={item.imageUrl} alt={item.text} style={{ width: '40vh' }} />
                                <p style={{ marginTop: '15px' }}>{item.text}</p>
                                <p><del>MRP. {item.MRP}/-</del></p>
                                <p>Rs.{item.Price}</p>
                                <Add />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>


        </div >
    );
};

export default Shop;
