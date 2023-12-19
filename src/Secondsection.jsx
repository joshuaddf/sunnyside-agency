const Secondsection = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:grid-rows-1  lg:grid-cols-2 lg: lg:grid-rows-1">
        <img
          className="h-[24rem] lg:w-[50vw] lg:h-auto w-auto "
          src="public/images/mobile/image-stand-out.jpg"
          alt=""
        />
        <div className="h-[24rem] lg:mx-[5rem] md:order-first lg:order-1 lg:h-auto w-auto flex items-center justify-center p-[2rem] flex-col">
          <h2 className="font-[fraunces] text-[2rem] lg:text-left lg:text-[3rem] lg:leading-[3.5rem] text-center">
            Stand out to the right audience
          </h2>
          <p className="font-[barlow] lg:pt-[2rem] lg:text-[1.2rem] text-center pt-[1rem] text-Dark-grayish-blue leading-8 lg:text-left">
          Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand to digital places.
          </p>
          <a
            href="/"
            className="pt-[1.5rem] font-[fraunces] lg:pt-[2rem] lg:text-start font-[900] underline decoration-8 decoration-Soft-red"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
