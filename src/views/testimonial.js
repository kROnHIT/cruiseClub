import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";
function Overview() {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:px-48 px-5 py-16">
        <h1 className="font-extrabold text-2xl lg:text-4xl vl">Testimonial</h1>
        <p className="mb-8 mt-2">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <div>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 360,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className="bg-white w-11/12 border border-gray-300 rounded-md text-left py-8 px-8 text-base font-semibold leading-8">
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex mt-10">
                <img
                  className="w-24 h-24 rounded-full"
                  src={require(`../assets/image/user2.jpeg`)}
                />
                <div className="ml-6">
                  <p className="text-lg font-bold">Jacob Williamson</p>
                  <p className="text-sm text-gray-500">
                    Web Developer, Hyerabad
                  </p>
                  <div>
                    <FaStar className="inline text-sm text-yellow-500 mr-1" />
                    <FaStar className="inline text-sm text-yellow-500 mr-1" />
                    <FaStar className="inline text-sm text-yellow-500 mr-1" />
                    <FaStar className="inline text-sm text-yellow-500 mr-1" />
                    <FaStar className="inline text-sm text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-11/12 border border-gray-300 rounded-md text-left py-8 px-8 text-base font-semibold leading-8">
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex mt-10">
                <img
                  className="w-24 h-24 rounded-full"
                  src={require(`../assets/image/user.webp`)}
                />
                <div className="ml-6">
                  <p className="text-lg font-bold">Adam Woodkin</p>
                  <p className="text-sm text-gray-500">
                    UI Designer, Bengaluru
                  </p>
                  <div>
                    <FaStar className="inline text-sm text-yellow-500 mr-1" />
                    <FaStar className="inline text-sm text-yellow-500 mr-1" />
                    <FaStar className="inline text-sm text-yellow-500 mr-1" />
                    <FaStar className="inline text-sm text-yellow-500 mr-1" />
                    <FaStar className="inline text-sm text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Overview;
