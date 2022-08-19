import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../App.css';

export default function CarouselReviews() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        <div className='review'>
          <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Pharetra magna ac placerat vestibulum lectus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Blandit massa enim nec dui nunc mattis enim ut tellus." <br /> - Jamie F.</p>
        </div>

        <div className='review'>
          <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." <br /> - Jessica A.</p>
        </div>

        <div className='review'>
          <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." <br /> - Maya S.</p>
        </div>

        <div className='review'>
          <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          <p>"Turpis massa sed elementum tempus egestas. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Massa sed elementum tempus egestas sed sed risus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Eget nunc scelerisque viverra mauris in aliquam. Nulla facilisi etiam dignissim diam quis enim lobortis." <br />- John R. </p>
        </div>

        <div className='review'>
          <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          <p>"I was hesitant on going to Fitness Corp, I pass by their gym all of the time since I live near by. I decided to do my research and look up their site, boy was I in for a treat! 🤩 Their website was desktop friendly and I was able to register and access the classes in no time. Their website convinced me to join and I was finally able to go into Fitness Corp! The staff are super friendly and the gym has such a great environment plus it was spotless. I'm going to recommend Fitness Corp to my friends and family. #gainz #AwesomeSite"</p>
          <p>Bob B.</p>
        </div>

      </Carousel>
    </div>
  );
}
