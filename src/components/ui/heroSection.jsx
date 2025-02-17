import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <>
      <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore the world, One country at a time
            </h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis libero, odic, nesciunt minima consectetur fuga
              cupiditate quae expedita iusto amet ipsum rerum quis optio ad nisi
              similique, suscipit inventore. Voluptas!
            </p>
            <NavLink to="/country">
              <button>
                Start Exploring <FaLongArrowAltRight />
              </button>
            </NavLink>
          </div>
          <div className="hero-image">
            <img
              src="https://png.pngtree.com/background/20230522/original/pngtree-detailed-image-of-the-earth-at-night-picture-image_2694038.jpg"
              alt="world image"
              className="banner-image"
            />
          </div>
        </div>
      </main>
    </>
  );
};
