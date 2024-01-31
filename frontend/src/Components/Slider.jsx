
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/App.css';

const CarouselImages = [
  'https://www.rukita.co/stories/wp-content/uploads/2021/05/diy-home-decor.jpeg',
  'https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2020/04/DIY-Home-Decor-Ideas-1080x720.jpeg', // Replace with your second image URL
  'https://d39l2hkdp2esp1.cloudfront.net/img/photo/180218/180218_00_2x.jpg?20190815010553',  // Replace with your third image URL
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {CarouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`}  />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;



