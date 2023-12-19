const Testimonials = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="font-[fraunces] pt-[3.5rem] tracking-[0.5rem] lg:mt-[10rem] lg:text-[1.5rem]  font-[900] text-Grayish-blue">
        CLIENT TESTIMONIALS
      </h3>
      <div className="grid py-[1rem] lg:mb-[5rem] lg:mx-[5rem] gap-[2rem] grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-3 pb-[5rem] lg:grid-rows-1">
        <div className="flex items-center justify-center flex-col">
          <img
            src="public/images/image-emily.jpg"
            className="rounded-full w-[4.5rem] mt-[4rem]"
          />
          <p className="px-[2rem] text-center py-[1.3rem] font-[barlow] text-Very-dark-grayish-blue lg:py-[4rem] lg:leading-7 lg:text-[1.3rem]">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="text-center">
            <h4 className="py-[0.5rem] font-[fraunces]">Emily.R</h4>
            <p className="font-[barlow] text-[0.8rem] text-Grayish-blue">
              Marketing Director
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <img
            src="public/images/image-thomas.jpg"
            className="rounded-full w-[4.5rem] mt-[4rem]"
          />
          <p className="px-[2rem] text-center py-[1.3rem] font-[barlow] text-Very-dark-grayish-blue lg:py-[4rem] lg:leading-7 lg:text-[1.3rem]">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <div className="text-center">
            <h4 className="py-[0.5rem] font-[fraunces]">Thomas.S</h4>
            <p className="font-[barlow] text-[0.8rem] text-Grayish-blue">
              Chief Operating Officer
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <img
            src="public/images/image-jennie.jpg"
            className="rounded-full w-[4.5rem] mt-[4rem]"
          />
          <p className="px-[2rem] text-center py-[1.3rem] font-[barlow] text-Very-dark-grayish-blue lg:py-[4rem] lg:leading-7 lg:text-[1.3rem]">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="text-center">
            <h4 className="py-[0.5rem] font-[fraunces]">Jenny.F</h4>
            <p className="font-[barlow] text-[0.8rem] text-Grayish-blue">
              Business Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
