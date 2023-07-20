import React, {useState} from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import './App.css'

const img = [
	{
		id:1,
		img: 'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:2,
		img: 'https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:3,
		img: 'https://images.pexels.com/photos/16971317/pexels-photo-16971317/free-photo-of-a-woman-standing-between-columns-at-the-karnak-temple-complex-in-luxor-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:4,
		img: 'https://images.pexels.com/photos/16641083/pexels-photo-16641083/free-photo-of-iguana-banana.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:5,
		img: 'https://images.pexels.com/photos/16550602/pexels-photo-16550602/free-photo-of-an-egret-in-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:6,
		img: 'https://images.pexels.com/photos/10518307/pexels-photo-10518307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:7,
		img: 'https://images.pexels.com/photos/14337686/pexels-photo-14337686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:8,
		img: 'https://images.pexels.com/photos/7026306/pexels-photo-7026306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:9,
		img: 'https://images.pexels.com/photos/1554663/pexels-photo-1554663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:10,
		img: 'https://images.pexels.com/photos/17591278/pexels-photo-17591278/free-photo-of-wood-light-road-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:11,
		img: 'https://images.pexels.com/photos/17649918/pexels-photo-17649918/free-photo-of-deer-in-the-wood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:12,
		img: 'https://images.pexels.com/photos/17427998/pexels-photo-17427998/free-photo-of-flowers-and-mountain-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:13,
		img: 'https://images.pexels.com/photos/15762336/pexels-photo-15762336/free-photo-of-narrow-passage-in-old-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:13,
		img: 'https://images.pexels.com/photos/15762336/pexels-photo-15762336/free-photo-of-narrow-passage-in-old-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:14,
		img: 'https://images.pexels.com/photos/17029370/pexels-photo-17029370/free-photo-of-guacamayo-lindo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:15,
		img: 'https://images.pexels.com/photos/13766623/pexels-photo-13766623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:16,
		img: 'https://images.pexels.com/photos/16958903/pexels-photo-16958903/free-photo-of-hills-with-lake-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:17,
		img: 'https://images.pexels.com/photos/17467020/pexels-photo-17467020/free-photo-of-sea-beach-vacation-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:18,
		img: 'https://images.pexels.com/photos/14145530/pexels-photo-14145530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:19,
		img: 'https://images.pexels.com/photos/17127423/pexels-photo-17127423/free-photo-of-two-palm-trees-in-front-of-old-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id:20,
		img: 'https://images.pexels.com/photos/14868982/pexels-photo-14868982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === img.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? img.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slider-container">
      <button className='btn1' onClick={handlePrevSlide}><GrPrevious/></button>
      <img src={img[currentSlide].img} alt={`Slide ${currentSlide + 1}`} />
      <button className='btn2' onClick={handleNextSlide}><GrNext/></button>
    </div>
  );
}
