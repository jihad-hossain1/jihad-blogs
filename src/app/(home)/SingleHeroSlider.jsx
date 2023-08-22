import TextModifier from "react-text-modifier";

const SingleHeroSlider = ({ slider }) => {
  const { bg, title } = slider;
  // console.log(slider);
  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        abc
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
        <TextModifier
          text={title}
          as="h1"
          renderSeparator={() => <div className="mt-1 md:mt-4" />}
          className="font-bold text-3xl md:text-4xl lg:text-5xl"
          highlight={["Easy", "Shop"]}
          highlightClassName="text-4xl md:text-5xl lg:text-6xl text-orange-500"
        />
      </div>
      {/* 
      <img src={bg} alt="bg photo" />
      <h2>{title}</h2> */}
    </>
  );
};

export default SingleHeroSlider;
