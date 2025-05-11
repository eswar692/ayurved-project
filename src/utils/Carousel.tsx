import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <div className=" overflow-hidden  mx-auto] relative w-full" ref={emblaRef}>
      <div className="flex 0  h-[400px] w-full  ">
        {[
          "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/03/19112117/Indias-First-Ayurvedic-Cafe-Opens-in-Delhi.jpg",
          "https://i.pinimg.com/736x/ca/a3/0a/caa30a2580786c6b7373b7792fb794b0.jpg",
          "https://i.pinimg.com/736x/c1/8a/9d/c18a9d1c89ccd8c7eb1a215459d14720.jpg",
        ].map((src, i) => (
          <div
            key={i}
            className="flex-[0_0_100%] min-w-0 flex justify-center items-center h-auto "
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-[100%] h-[100%]  rounded "
            />
          </div>
        ))}
      </div>

      {/* carosel button */}
      {/* <div className="w-full flex justify-between px-5 absolute top-50">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
          1
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ml-4">
          2
        </button>
      </div> */}
    </div>
  );
}
export default Carousel;
