

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/DzTQtH7Z/1.jpg" className="w-full rounded-xl" />
                <div className="absolute flex justify-end left-5 right-5  bottom-0 transform -translate-y-1/2   ">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex  left-0 top-0 rounded-xl h-full  px-4 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                  <div className="space-y-7 w-1/3">
                    <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn mr-5 btn-secondary">Discover More</button>
                        <button className="btn btn-warning">Latest</button>
                    </div>
                  </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/QxvJqVPc/2.jpg" className="w-full" />
                <div className="absolute flex justify-end left-5 right-5  bottom-0 transform -translate-y-1/2   ">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex  left-0 top-0 rounded-xl h-full  px-4 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                  <div className="space-y-7 w-1/3">
                    <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn mr-5 btn-secondary">Discover More</button>
                        <button className="btn btn-warning">Latest</button>
                    </div>
                  </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/0jFDZHt9/3.jpg" className="w-full" />
                <div className="absolute flex justify-end left-5 right-5  bottom-0 transform -translate-y-1/2   ">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex  left-0 top-0 rounded-xl h-full  px-4 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                  <div className="space-y-7 w-1/3">
                    <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn mr-5 btn-secondary">Discover More</button>
                        <button className="btn btn-warning">Latest</button>
                    </div>
                  </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/05BY8b9h/4.jpg" className="w-full " />
                <div className="absolute flex justify-end left-5 right-5  bottom-0 transform -translate-y-1/2   ">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex  left-0 top-0 rounded-xl h-full  px-4 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                  <div className="space-y-7 w-1/3">
                    <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn mr-5 btn-secondary">Discover More</button>
                        <button className="btn btn-warning">Latest</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;