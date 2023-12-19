const Firstsection = () => {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-1">

      <div className="h-[24rem] lg:mx-[5rem] lg:text-left lg:h-auto w-auto flex items-center justify-center p-[2rem] flex-col order-last">
        <h2 className="font-[fraunces] lg:text-[3rem] lg:leading-[3.5rem] lg:text-left text-[2rem] text-center">
          Transform your brand
        </h2>
        <p className="font-[barlow] lg:text-left lg:pt-[2rem] text-center pt-[1rem]  text-Dark-grayish-blue leading-8">
          We are a full service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketting for you.
        </p>
        <a
          href="/"
          className="pt-[1.5rem] font-[fraunces] font-[900] lg:pt-[2rem] underline decoration-8 decoration-Yellow"
        >
          LEARN MORE
        </a>
      </div>

      <img
        className="h-[24rem] w-auto lg:w-[50vw] lg:h-auto lg:order-last"
        src="public/images/mobile/image-transform.jpg"
        alt=""
      />
    </div>
  );
};

export default Firstsection;
