import React from "react";
import Slider from "react-slick";
import { CgQuote } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";

export default function Testimonial() {
  const testimonials = [
    {
      text:
        "It was an absolute pleasure to be working with KangWei as he did what he had written in the proposal, which is make the front end pixel perfect and even implement some changes. Also, he was always very prompt and kind in his communications.",
      source:
        "https://www.linkedin.com/posts/yewyewxd_see-how-i-can-get-your-project-done-on-upwork-activity-6709339082209792000-RWFU",
    },
    {
      text:
        "Great developer! He is extremely passionate and knowledgeable about the work he does.",
      source:
        "https://www.linkedin.com/posts/yewyewxd_see-how-i-can-get-your-project-done-on-upwork-activity-6710509017812357120-i5Lo",
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonial" className="text-center  py-5">
      <div className="container my-sm-5 my-3">
        <h1 className="mb-0">Testimonial</h1>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial py-5" data-aos="fade-in" key={index}>
              <p className="mb-3">
                <CgQuote className="position-relative quote-icon" />
                {testimonial.text}
              </p>
              <a
                href={testimonial.source}
                target="_blank"
                rel="noopener noreferrer"
                className="post-link mt-md-4 all-center"
              >
                <FiArrowRight className="mr-1" /> See post
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
