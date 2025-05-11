import Footer from "@/conponents/Footer";
import Header from "@/conponents/Header";
import HomeBody from "./Body";
import Form from "@/conponents/Form";

const Home = () => {
  return (
    <div className="mt-[60px]">
      <Header />
      <HomeBody />
      <Footer />
      <Form />
    </div>
  );
};

export default Home;
