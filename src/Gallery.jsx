const Gallery = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:h-auto lg:grid-cols-2 lg:grid-rows-1">
      <div className="bg-[url('public/images/mobile/image-graphic-design.jpg')] lg:bg-[url('public/images/desktop/image-graphic-design.jpg')] h-[40rem] w-auto lg:bg-cover lg:bg-center lg:w-[50vw] bg-cover bg-center">
        <div className="flex items-center justify-end mt-[25rem] flex-col px-[2rem] text-center">
          <h3 className="font-[fraunces] text-[1.7rem] py-[1rem] text-Dark-desaturated-cyan">
            Graphic Design
          </h3>
          <p className="font-[barlow] text-Dark-desaturated-cyan font-[1.1rem] lg:mx-[9rem]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>

      <div className="bg-[url('public/images/mobile/image-photography.jpg')] lg:h-auto h-[40rem] lg:bg-[url('public/images/desktop/image-photography.jpg')] lg:bg-cover lg:bg-center w-auto bg-cover bg-center">
        <div className="flex items-center justify-end mt-[25rem] flex-col px-[2rem] text-center">
          <h3 className="font-[fraunces] text-[1.7rem] py-[1rem] text-Dark-desaturated-cyan">
            Graphic Design
          </h3>
          <p className="font-[barlow] text-Dark-desaturated-cyan font-[1.1rem] lg:mx-[9rem]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
