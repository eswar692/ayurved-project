import useEmblaCarousel from 'embla-carousel-react'

 function Carousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="overflow-hidden w-full justify-center items-center" ref={emblaRef}>
      <div className="w-screen flex   h-[400px] ">
        <div className="flex-[0_0_100%] min-w-0 w-screen ml-10 md:m-auto">
            <img className='w-[80%] md:w-[50%] h-[400px]' src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/03/19112117/Indias-First-Ayurvedic-Cafe-Opens-in-Delhi.jpg" alt="" />
        </div>

        <div className="flex-[0_0_100%] min-w-0 w-screen ml-10 md:mx-auto">
            <img className='w-[80%] md:w-[50%] h-[400px]' src="https://i.pinimg.com/736x/ca/a3/0a/caa30a2580786c6b7373b7792fb794b0.jpg" alt="" />
        </div>

        <div className="flex-[0_0_100%] min-w-0 w-screen ml-20 md:mx-auto">
            <img className='w-[80%] md:w-[50%] h-[400px]' src="https://i.pinimg.com/736x/c1/8a/9d/c18a9d1c89ccd8c7eb1a215459d14720.jpg" alt="" />
        </div>

      
      </div>
    </div> 
  )
}
export default Carousel
