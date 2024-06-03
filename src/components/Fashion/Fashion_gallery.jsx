import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import  { ReactComponent as Close} from "../img/icons8-close.svg"
import  { ReactComponent as Previous} from "../img/free-icon-left-arrow-625962 1.svg"
import  { ReactComponent as Next} from "../img/free-icon-right-arrow-625962 1.svg";
import '../CSS/index.css';


const images = [
    "https://gallery.alexandersakulin.com/storage/app/uploads/public/1b1/47f/df5/thumb__0_800_0_0_auto.jpg",
    "https://i.pinimg.com/564x/e0/70/b5/e070b52b63fa64da1a07bcbe32317936.jpg",
    "https://mobile.photoprocenter.ru/uimages/73a416fdfb23f01d1e858ca6d9b56e18.jpg",
    "https://www.etoday.ru/assets/2016/5/20/Nina-Agdal-CR-Fashion-Book-Food-2016-Photos04.jpg",
    "https://i.pinimg.com/736x/00/1c/97/001c9799bb0c4b4d160f11d86b3b74ac.jpg",
    "https://i.pinimg.com/564x/00/3f/d2/003fd2af1e9fa13d568129bd146e7d79.jpg",
    "https://i.pinimg.com/564x/84/d2/88/84d2880af84d7ce6036ee9c9578c9eb0.jpg",
    "https://i.pinimg.com/564x/0f/c4/7a/0fc47a343c335bf3700a023d4a4c3036.jpg",
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
                <ResponsiveMasonry className="my-masonry-grid"
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