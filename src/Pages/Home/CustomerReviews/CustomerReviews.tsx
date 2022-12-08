import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://myscheduler-server.onrender.com/reviews")
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
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="pb-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary text-center font-bold mb-8">
        Our Satisfied Customers
      </h2>
      <div>
        <Slider {...settings}>
          {reviews?.map(
            (review: {
              name: string;
              position: string;
              image: "file";
              rating: number;
              review: string;
            }) => (
              <div>
                <div className="relative mt-20 w-full text-black ">
                  <div className="bg-gray-100 h-72 p-10 m-5 border rounded-md shadow-lg">
                    <div className="avatar absolute top-[-45px] left-[45px]">
                      <div className="w-20 border-[3px] border-secondary rounded-full">
                        {review.image ? (
                          <img src={review.image} alt="" />
                        ) : (
                          <img
                            src="https://i.ibb.co/RN0yDmq/avator.png"
                            alt="person"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm md:text-lg text-justify mt-4">
                        {review.review.slice(0, 150)}...{" "}
                      </p>
                      <div>
                        <div className="flex items-center gap-2 pt-4">
                          <h2 className="text-sm md:text-lg text-justify font-bold">
                            {review.name}
                          </h2>
                          <h3 className="text-xs md:text-md text-secondary">
                            {review.position}
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
