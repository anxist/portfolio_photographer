import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import  { ReactComponent as Close} from "../img/icons8-close.svg"
import  { ReactComponent as Previous} from "../img/free-icon-left-arrow-625962 1.svg"
import  { ReactComponent as Next} from "../img/free-icon-right-arrow-625962 1.svg";
import '../CSS/index.css';

const images = [
    "https://i.pinimg.com/originals/85/03/74/8503744b925296441c4232177da9893e.jpg",
    "https://i.pinimg.com/originals/4a/03/8a/4a038a570f002949b5dbc6fee669ab9b.jpg",
    "https://i.pinimg.com/736x/1a/73/d1/1a73d1300ee4361deaa15d8a576c4872.jpg",
    "https://i.pinimg.com/736x/41/aa/b3/41aab3b8765bba49497f55f95c837fac.jpg",
    "https://yesyes.ua/uploads/news/52e55efe237731c07ad5b0a3a2b6d8ea_59058.jpg",
    "https://i.pinimg.com/736x/71/70/f4/7170f497b90e04b486ee07e1cd37afa9.jpg",
    "https://trikky.ru/wp-content/blogs.dir/1/files/2021/08/19/1616685745-26-p-estetika-krasivo-29.jpg",
    "https://i.pinimg.com/736x/30/53/a2/3053a2a80a0c1d378eb9b60f6a4e867d.jpg",
]

const Gallery = () => {

    const [data, setData] = useState({ img: '', i: 0 });
    const viewImage = (image, i) => {
        setData({ img: image, i: i }); // Fixed img to image
    }
    const imgAction = (action) => {
        let i = data.i;
        if(action === 'next-img') {
            setData({img: images[i +1], i: i + 1});
        }
        if(action === 'previous') {
            setData({img: images[i -1], i: i - 1});
        }
        if(!action) {
            setData({img: '', i: 0});
        }
    }

    return (
        <>
            {data.img &&
                <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}>
                    <button onClick={()=> imgAction()} style={{ position: 'absolute', top: 0, right: 0,  border: 'none',
                        background: 'none',
                        padding: 10,
                        margin: 0,
                        outline:'none',
                        width: '50px'}}>
                        <Close style={{ width: "25px",  height: "25px",}}/>
                    </button>
                    <button onClick={()=> imgAction('previous')} style={{ top: 0, right: 0,  border: 'none',
                        background: 'none',
                        padding: 0,
                        margin: 0,
                        outline:'none',
                        width: '50px'}}>
                        <Previous style={{ width: "50px", height: "50px"}}/>
                    </button>
                    <img src={data.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} />
                    <button onClick={()=> imgAction('next-img')} style={{ top: 0, right: 0,  border: 'none',
                        background: 'none',
                        padding: 0,
                        margin: 0,
                        outline:'none',
                        width: '50px'}}>
                        <Next style={{ width: "50px", height: "50px"}}/>
                    </button>
                </div>
            }
            <div className="masonry">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block", cursor: "pointer" }}
                                alt="photo"
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
};

export default Gallery;