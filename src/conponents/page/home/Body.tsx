import Carousel from "@/utils/Carousel";
import { motion } from "motion/react";

const HomeBody = () => {
  return (
    <div className="font-poppins flex items-center justify-center  ">
      <div className=" w-full md:w-[80%]  flex flex-col items-center justify-center h-auto pt-2 gap-2">
        {/* 0 Item carousel*/}
        <div className=" w-full h-auto relative">
          <Carousel />
          <div className="absolute top-10 md:top-[40%]  flex items-center justify-center w-full">
            <h3 className="text-md p-2 font-bold bg-amber-300 text center">
              Welcome TO Famous Ayurvedic Specilist
            </h3>
          </div>
        </div>
        {/* 1 Item */}
        <div className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-4">
          <h1 className="text-3xl font-bold">
            Welcome To Best Ayurvedic Guruji
          </h1>
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center h-[250px]"
          >
            <img
              src="https://i.ytimg.com/vi/hzxHuuR_DYE/maxresdefault.jpg"
              alt="Maruku Mandu"
              className="w-full md:w-1/2 hover:object-left-top hover:transition-all hover:duration-300"
            />
          </motion.div>
          <div>
            <h3 className="text-xl font-[500]">
              🔮 వశీకరణ తంత్రాల్లో మారుగుమందు ఉపయోగాలు & అనుబంధ సాధనలు:
            </h3>
            <div className="flex flex-col gap-3 mt-2">
              <p className="text-md break-words text-justify font- [500] ">
                <span className="font-[600]"> 1. శ్రీ పురుష వశీకరణం :</span>
                ఇది సాధారణంగా ఒక పురుషుడిని ఆకర్షించేందుకు, అతని మనస్సును
                తనవైపుకు తిప్పేందుకు ఉపయోగించే తంత్ర పద్ధతి. మారుగుమందు ద్వారా
                శరీర శుద్ధి జరిగి, సద్బుద్ధి, ఆత్మ విశ్వాసం పెరుగుతుంది. ఈ
                సాధనకు ముందు మారుగుమందు సేవించి, లక్ష్యంగా ఉన్న వ్యక్తి పేరుతో
                జపము చేయడం ఫలితాన్ని వేగవంతం చేస్తుంది.
              </p>
              <p className="text-md break-words text-justify font-[500] ">
                <span className="font-bold"> 2. లింగీయ వశీకరణం :</span>
                ఇది శారీరక, లైంగిక ఆకర్షణను పెంచే తంత్రం. ముఖ్యంగా భాగ్యాన్ని,
                మానసిక స్థైర్యాన్ని పెంచే మూలికలతో తయారైన మారుగుమందు, శరీరంలోని
                స్వాధిష్ఠాన చక్రాన్ని శక్తివంతం చేస్తుంది. ఈ తంత్రానికి ముందు
                మారుగుమందు సేవించి, వశీకరణ సుగంధద్రవ్యాల జపం చేయడం వల్ల
                శక్తివంతమైన ఫలితాలు వస్తాయని నిపుణులు చెబుతారు.
              </p>
              <p className="text-md break-words text-justify font-[500] ">
                <span className="font-bold"> 3. కామ వశీకరణం :</span>
                ప్రేమ సంబంధాలలో ఆకర్షణను పెంచేందుకు. మారుగుమందు ద్వారా
                రక్తసంచారాన్ని, శరీర తాపాన్ని సమతుల్యం చేయడం ద్వారా కామశక్తిని
                నియంత్రణలోకి తేవచ్చు.
              </p>
              <p className="text-md break-words text-justify font-[500] ">
                <span className="font-bold"> 4. వ్యాపార / ప్రజా వశీకరణం:</span>
                ప్రజలలో గుర్తింపు, ప్రభావాన్ని పెంచుకోవడంలో సహాయపడే వశీకరణం.
                మారుగుమందు సేవించి, వ్యక్తిత్వం స్పష్టంగా, ఆకర్షణీయంగా
                మారినప్పుడు మాట్లాడే మాటలు కూడా శక్తివంతంగా పనిచేస్తాయి.
              </p>
            </div>
            <div className="md:mx-auto md:w-1/2 w-full   flex flex-col gap-3 px-10 py-5">
              <span className="text-xl font-semibold font-">
                📿 మారుగుమందుతో వశీకరణ సాధన:
              </span>
              <ul className="list-disc">
                <li>
                  సాధనకు ముందు శుద్ధ శరీరంతో మారుగుమందు సేవించడం ద్వారా చైతన్యం
                  పెరుగుతుంది.
                </li>
                <li>
                  మంత్ర జపంలో ఉన్న అడ్డంకులను తొలగించి, సిద్ధి వేగంగా పొందే
                  శక్తిని ఇచ్చే సహాయక శక్తిగా మారుతుంది.
                </li>
                <li>
                  కొన్ని ప్రత్యేక తంత్రాలలో, మారుగుమందులో తక్కువ మోతాదులో
                  గంధద్రవ్యాలు కలిపి సేవించడం సూచిస్తారు (తంత్ర నిపుణుల
                  మార్గదర్శనంతో మాత్రమే).
                </li>
              </ul>
            </div>

            <div className="flex justify-center ">
              <a href="tel:+917032176288">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded px-20 shadow-lg">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* 2 Item */}
        <div className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-3">
          {/* <h1 className="text-3xl font-bold">Welcome to My App</h1> */}
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.6,
              ease: "easeout",
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <img
              src="https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/integrative-medicine/essential-oils-teaser.jpg?h=260&iar=0&mh=260&mw=380&w=380&hash=37BC59D0A7736CCB0BBB26CD6235A7BF"
              alt="Maruku Mandu"
              className="w-[500px] h-[250px] md:h-auto rounded"
            />
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="text-2xl font-bold text-center">
              We aim to spread natural healing to every home
            </h4>
            <p className="text-lg break-words text-justify ">
              your trusted gateway to ancient healing. Rooted in India’s
              5000-year-old wisdom, our mission is to bring natural, holistic
              wellness into every home. In a world filled with chemicals and
              fast fixes, Ayurveda offers balance, purity, and lasting relief.
              Here, you’ll discover time-tested remedies, powerful herbs, and
              lifestyle guidance tailored to your body and mind. Whether you’re
              looking to heal, prevent illness, or simply live better – you're
              in the right place. Let nature be your medicine, and tradition be
              your guide.
            </p>
          </div>
          <div className="flex justify-center ">
            <a href="tel:+917032176288">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded px-20 shadow-lg">
                Call Now
              </button>
            </a>
          </div>
        </div>

        {/* 3 Item */}
        <div className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-3">
          <h1 className="text-3xl font-bold">Ayurvedic Products</h1>
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <img
              src="https://www.travancoreayurveda.com/wp-content/uploads/2023/12/ayurveda-treatments.jpg"
              alt="Maruku Mandu"
              className="w-full md:w-1/2 h-[250px] md:h-auto"
            />
          </motion.div>

          <div>
            <p className="text-lg break-words text-justify ">
              we don’t just believe in natural healing — we create it. All our
              Ayurvedic products are carefully crafted using traditional
              formulas, pure herbs, and age-old techniques passed down through
              generations. From immunity boosters to skin care, digestion
              support to stress relief, each product is made with love, purity,
              and purpose. We proudly offer what we use ourselves — because your
              health is our priority. ✨ Start your healing journey today with
              100% authentic Ayurvedic products from Our Famous Ayurveda.
            </p>
          </div>
          <div className="flex justify-center ">
            <a href="tel:+917032176288">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded px-20 shadow-lg">
                Call Now
              </button>
            </a>
          </div>
        </div>

        {/* 4 Item */}

        <div className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-3">
          <h1 className="text-3xl font-bold">Ayurvedic Products</h1>
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <img
              src="https://tour2wellness.com/images/treatments/shirodhara-ayurveda-treatment-tour2wellness.webp"
              alt="Maruku Mandu"
              className="w-full md:w-1/2 rounded h-[250px] md:h-auto"
            />
          </motion.div>

          <div>
            <p className="text-lg break-words text-justify ">
              we don’t just believe in natural healing — we create it. All our
              Ayurvedic products are carefully crafted using traditional
              formulas, pure herbs, and age-old techniques passed down through
              generations. From immunity boosters to skin care, digestion
              support to stress relief, each product is made with love, purity,
              and purpose. We proudly offer what we use ourselves — because your
              health is our priority. ✨ Start your healing journey today with
              100% authentic Ayurvedic products from Our Famous Ayurveda.
            </p>
          </div>
          <div className="flex justify-center ">
            <a href="tel:+917032176288">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded px-20 shadow-lg">
                Call Now
              </button>
            </a>
          </div>
        </div>

        {/* 5 Item */}

        <div className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-3">
          <h1 className="text-3xl font-bold">Ayurvedic Products</h1>
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center h-[250px]"
          >
            <img
              src="https://hiims.in/blog/wp-content/uploads/2024/08/Healthy-Living-Ayurvedic-Lifestyle-Tips-for-Everyday-Wellness.png"
              alt="Maruku Mandu"
              className="w-full md:w-1/2 rounded md:h-auto"
            />
          </motion.div>

          <div>
            <p className="text-lg break-words text-justify ">
              we don’t just believe in natural healing — we create it. All our
              Ayurvedic products are carefully crafted using traditional
              formulas, pure herbs, and age-old techniques passed down through
              generations. From immunity boosters to skin care, digestion
              support to stress relief, each product is made with love, purity,
              and purpose. We proudly offer what we use ourselves — because your
              health is our priority. ✨ Start your healing journey today with
              100% authentic Ayurvedic products from Our Famous Ayurveda.
            </p>
          </div>
          <div className="flex justify-center ">
            <a href="tel:+917032176288">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded px-20 shadow-lg">
                Call Now
              </button>
            </a>
          </div>
        </div>

        {/* 6 Item */}
        <div className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-3">
          <h1 className="text-3xl font-bold">Ayurvedic Products</h1>
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center h-[250px] md:h-auto"
          >
            <img
              src="https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg"
              alt="Maruku Mandu"
              className="w-full md:w-1/2 rounded  "
            />
          </motion.div>

          <div>
            <p className="text-lg break-words text-justify ">
              At Our Famous Ayurveda, every product is a tribute to ancient
              wisdom, handcrafted with pure herbs, time-tested formulas, and
              love passed down through generations. Whether you're looking to
              boost immunity, improve digestion, care for your skin, or find
              inner calm — we’ve got you covered. 🌿 Authentic. Honest. Healing.
              🌿 We use what we offer — because your well-being is our promise.
              Begin your healing journey today with 100% genuine Ayurvedic care.
            </p>
          </div>
          <div className="flex justify-center ">
            <a href="tel:+917032176288">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded px-20 shadow-lg">
                Call Now
              </button>
            </a>
          </div>
        </div>

        {/* 7 Item */}
        <div className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-3">
          <h1 className="text-3xl font-bold">Ayurvedic Products</h1>
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center h-[250px] md:h-auto"
          >
            <img
              src="https://assets.clevelandclinic.org/transform/2d536049-b17c-4b88-b1e3-85f78f7d9fea/Ayurveda-173877738-770x533-1_jpg"
              alt="Maruku Mandu"
              className="w-full md:w-1/2 rounded  "
            />
          </motion.div>

          <div>
            <p className="text-lg break-words text-justify ">
              Ayurvedic medicines are a part of every Malayali's medicine kit.
              They come in gel, powder and liquid forms and have diverse
              therapeutic applications, ranging from aiding post-partum care to
              curing nervous disorders and ailments of the digestive tract. Some
              of the most popular Ayurvedic medicines and their uses are
              presented here for the benefit of those uninitiated to Ayurvedic
              treatment practices. However, its intent is purely informational,
              and medicines must be consumed only under the guidance of a
              certified vaidyan, or Ayurvedic physician.
            </p>
          </div>
          <div className="flex justify-center ">
            <a href="tel:+917032176288">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded px-20 shadow-lg">
                Call Now
              </button>
            </a>
          </div>
        </div>

        {/* 8 Item */}
        {/* <div className=" w-full h-auto flex flex-col items-center justify-center gap-3 p-3">
          <h1 className="text-3xl font-bold">Ayurvedic Products</h1>
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center h-[250px] md:h-auto"
          >
            <img
              src="https://www.ayurveda.com/wp-content/uploads/2023/02/What-is-Ayurveda-1024x683.jpg"
              alt="Maruku Mandu"
              className="w-full md:w-1/2 rounded  "
            />
          </motion.div>
        </div> */}

        {/* 9 Item */}
        <div className="h-auto m-3">
          <div>
            <h1 className=" text-center text-xl">
              <span className="font-bold text-black">Philosophy</span>
              <br />
              and
              <br />
              <span className="font-bold text-orange-400">human pathology</span>
            </h1>
          </div>
          {/* 1 box */}
          <div className="w-full border-2 border-black relative md:h-[300px] h-auto rounded">
            <h3 className="text-2xl font-bold text-center">Human Pathology</h3>
            <p className="md:w-2/3 px-5 py-2">
              Any sickness can be treated with a deeper understanding of our own
              self. Our body reacts to a large number of internal and external
              factors and any imbalance or impurity created by these causes
              illness
            </p>
            <div className="md:absolute md:top-2 md:right-[-10%] h-auto ">
              <img
                src="https://www.keralatourism.org/images/ayurveda/static-banner/home-image/Human_Pathology-27022020121526.jpg"
                alt=""
                className="md:w-[500px] md:h-[300px] rounded"
              />
            </div>
          </div>
          {/* 2 box */}
          <div className="w-full border-2 border-black relative md:h-[300px] h-auto rounded mt-2 mb-5 flex flex-col justify-center  items-end">
            <h3 className="text-2xl font-bold text-center w-full">
              Philosophy
            </h3>
            <p className="md:w-2/3 px-5 py-2">
              Ayurveda is believed to be strongly inspired by Sage Kapila and
              the Sankhya school of philosophy. It is said that everything that
              exists in the physical universe originates from the union of
              Prakriti
            </p>
            <div className="md:absolute md:top-2 md:left-[-10%] h-auto">
              <img
                src="https://www.keralatourism.org/images/ayurveda/static-banner/home-image/Philosophy-27022020121721.jpg"
                alt=""
                className="md:w-[500px] md:h-[300px] rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
