import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((data) => data.json())
      .then((result) => setReviews(result));
  }, []);

  const settings = {
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-10 my-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral text-center font-bold">
        Our Satisfied Customers
      </h2>
      <div>
        <Slider {...settings}>
          {reviews.map(
            (review: {
              name: string;
              picture: "file";
              rating: number;
              _review: string;
            }) => (
              <div>
                <div className="relative mt-20 w-full text-black ">
                  <div className="bg-gray-100 h-72 p-10 m-5 border rounded-md shadow-lg">
                    <div className="avatar absolute top-[-45px] left-[45px]">
                      <div className="w-20 border-[3px] border-secondary rounded-full">
                        <img src={review.picture} alt="" />
                      </div>
                    </div>
                    <p className="text-sm md:text-lg text-justify mt-4">
                      {review._review}
                    </p>
                    <div className="flex items-center gap-2 pt-4">
                      <h2 className="text-sm md:text-lg text-justify font-bold">
                        {review.name}
                      </h2>
                      <h3 className="text-xs md:text-md text-secondary">
                        Web Designer
                      </h3>
                    </div>
                    <div>
                      <div>
                        <div>
                          <ReactStars
                            size={20}
                            value={review.rating}
                            edit={false}
                          ></ReactStars>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
