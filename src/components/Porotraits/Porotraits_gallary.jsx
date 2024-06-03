import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import  { ReactComponent as Close} from "../img/icons8-close.svg"
import  { ReactComponent as Previous} from "../img/free-icon-left-arrow-625962 1.svg"
import  { ReactComponent as Next} from "../img/free-icon-right-arrow-625962 1.svg";
import '../CSS/index.css';


const images = [
    "https://static-cdn5-2.vigbo.tech/u6258/7695/blog/1433943/5424332/71446047/1000-AMF-62aa4e4eeaf9090eff728566609950f5.jpg",
    "https://i.pinimg.com/originals/b3/f2/de/b3f2deb97a8025dc7cf4177e8f8efcd3.jpg",
    "https://cs10.pikabu.ru/post_img/big/2019/05/31/4/1559279194170880240.jpg",
    "https://photocrew.ru/images/phocagallery/biznes/img_9917.jpg",
    "https://gallery.alexandersakulin.com/storage/app/media/gallery/_Portrait/2021-Mikhail-Shufutinsky/18-feb_21-MS_port-74078-r-web_1800_60p.jpg",
    "https://img.freepik.com/free-photo/portrait-of-beautiful-albino-woman_23-2150520258.jpg",
    "https://img.freepik.com/premium-photo/a-blond-woman-with-freckled-hair-and-white-blouse-looking-at-camera_90186-213.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717286400&semt=ais_user",
    "https://flomaster.top/uploads/posts/2022-06/1655570101_2-flomaster-club-p-idei-dlya-portreta-krasivo-2.jpg",
    "https://klaudiali.ru/web/wp-content/uploads/2021/05/826A8791-scaled.jpg",
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