const Footer = () => {
  return (
    <div className="bg-gray-800 w-full h-auto text-white p-3">
      <div className="flex md:flex-row  flex-col h-full gap-2">
        <div className=" w-full md:w-1/3 h-full flex flex-col items-center justify gap-3">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="text-md ">
            We are the best Ayurvedic Guruji in the world
          </p>
        </div>
        <div className=" w-full md:w-1/3 h-full flex flex-col items-center justify-center gap-3">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="text-md ">
            Phone Number: <span className="font-[500] pl-10">7032176288</span>
          </p>
        </div>
        <div className=" w-full md:w-1/3 h-full flex items-center justify-center flex-col gap-3">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <ul className="text-md gap-2 flex flex-col">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            <li className="hover:text-gray-400 cursor-pointer">Services</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 ">
        <p className="text-md">
          © 2022 Famous Ayurvedic Specilist. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
