import { motion } from "motion/react";

const ServicesBody = () => {
  return (
    <div className="md:w-[80%] px-6 py-5 m-auto">
      <h1 className="text-center text-3xl font-bold">Ayurvedic medicines</h1>

      <ItemsRender />
    </div>
  );
};

export default ServicesBody;

interface ItemsProps {
  h: string;
  p: string;
  img: string;
}
const Items = ({ h, p, img }: ItemsProps) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center mt-5">
      <h3 className="text-center font-bold text-xl">{h}</h3>
      <p className="text-justify">{p}</p>
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
        <img src={img} alt="" className="rounded" />
      </motion.div>
      <div className="flex justify-center ">
        <a href="tel:+917032176288">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded px-20 shadow-lg">
            Call Now
          </button>
        </a>
      </div>
    </div>
  );
};

const ItemsRender = () => {
  return (
    <>
      <Items
        h="Keras, Raskriyas and Avarthis"
        p="Keras, Raskriyas [Lambatives] and Avarthis [Medicated Oil] are widely used across God's Own Country as daily remedies for a number of ailments. Keras Murivenna is a popular oil-based herbal concoction applied externally for treating superficial injuries, fractures and sprains. It also acts as an antiseptic. Neelibhringadi oil helps patients recover from hair loss. Karpooradi oil relieves arthritis-related fluid build-up and body pain. Rasakriyas Ilaneer Kuzhambu is given to patients suffering from acute cataract and conjunctivitis. It keeps the eyes healthy in general, and protects them from contaminants. Avarthis Ksheerabala Avarthi relieves rheumatic pains.The potency of this medicine can be increased as the treatment progresses."
        img="https://www.keralatourism.org/images/ayurveda/static-banner/large/Keras,_Raskriyas_and_Avarthis-18022020062354.jpg"
      />
      <Items
        h="Kashayas"
        p="Kashayas are water-based extracts of medicinal herbs, often mixed with other medicines as well.
                          Ashtavarga Kashaya is a medicine recommended for patients suffering from joint pains, anxiety, and stress.
                          Chiruvilwadi Kashaya is used to treat constipation, haemorrhoids and other rectal issues.
                          Dasamoolakaduthraya Kashaya is given to patients suffering from respiratory and digestive issues, chest pain, fevers, and headaches.
                          Dhanwantharam Kashaya is widely administered for post-natal care, and for the treatment of rheumatic complaints, digestion issues, and partial paralysis.
                          Elakanadi Kashaya is given to patients with cough and asthma.
                          Gandharvahasthadi Kashaya is a natural laxative, and it also helps treat rheumatic complaints.
                          Indukantha Kashaya revitalises the body, and aids in the treatment of tuberculosis, intestinal spasms and joint pains.
                          Manjishtadi Kashaya helps manage rheumatoid arthritis, skin disorders and anaemia (iron deficiency).
                          Nadee Kashaya is used in post-natal care. It also helps treat joint pains and intestinal spasms.
                          Nayopaya Kashaya is a remedy for all types of joint issues, asthma, and cough.
                          Padolamooladi Kashaya is prescribed for curing skin ailments, inflammations, leprosy, and constipation."
        img="https://www.keralatourism.org/images/ayurveda/static-banner/large/Kashayas-18022020062450.jpg"
      />
      <Items
        h="Ghruthas"
        p="Ghrutha is essentially ghee, or clarified butter, heated with a herbal mixture and prepared in the consistency of a Thaila. It is given to the patient to cure issues ranging from joint pains to nervous disorders, epilepsy (involuntary movements and convulsions) and even poisoning.

Brahmi Ghrutha is used in the treatment of epilepsy, aphasia (inability to comprehend or discern words), memory loss and brain damage.

Gulgulu Thikthaka Ghrutha helps treat joint aches, skin disorders, sinus infections, diabetes and haemorrhoids.

Indukantha Ghrutha improves stamina, and cures rheumatic pains, intermittent fevers and intestinal spasms.

Jathyadi Ghrutha is applied externally on wounds to heal them.

Sukumara Ghrutha is prescribed for the treatment of hernia, haemorrhoids, constipation and genital disorders.

Thikthaka Ghrutha helps treat various types of poisoning, bleeding, ulcers, skin diseases, epilepsy and mental illnesses."
        img="https://www.keralatourism.org/images/ayurveda/static-banner/large/Ghruthas-18022020062552.JPG"
      />

      <Items
        h="Gulikas"
        p="Gulikas are tablets dispensed to patients for their ease of consumption. They are made by rolling medicinal pastes into balls and drying them under the sun.Chandraprabha is a gulika recommended for the treatment of diabetics, spleen disorders, urinary issues and anaemia (iron deficiency)Dhanwantharam is prescribed for ante- and post-natal care. This gulika is also a remedy for asthma, digestive issues and joint aches.Hinguvachadi is a solution for all digestion-related issues including acidity, bile imbalance, obesity and lack of appetite as well as breathing-related problems and sinus infections.Kaisoragulgulu helps in the treatment of ulcers due to rheumatoid arthritis, ordinary wounds and skin problems.Karutha Vattu is ground with milk or oil and applied on swellings and inflammations to heal them, or on the forehead to cure high bouts of fever.Marma Gulika is also mixed with milk and butter and applied externally to heal wounds, bruises, cuts, aches and inflammations.Yogarajagulgulu is administered for curing skin, blood and joint-related ailments."
        img="https://www.keralatourism.org/images/ayurveda/static-banner/large/Gulikas-18022020062619.jpg"
      />
      <Items
        h="Churnas"
        p="Churnas are medicinal powders used for a wide range of treatments. They are prepared by the repeated crushing and sifting of herbs and minerals to achieve a specific consistencyAshta Churna is administered to children worm who suffer from infections and stomach pains. It ensures the smooth functioning of the digestive tract and remedies indigestion issuesAvipathy Churna helps patients regain control over their bowel movements. It is also recommended for people suffering from anaemia (iron deficiency) and gastric disordersDadimashtaka Churna soothes acidic imbalance in the body, helps with digestion and regulates bowel movementEladigana Churna is used for treating skin ailments such as blemishes and irritationsHinguvachadi Churna is effective in the treatment of a variety of gastric disorders, colon malfunctions, obesity problems, stomach bile issues, as well as urinary and sinus infectionsKarpooradi Churna remedies mucus problems related to cough and common coldRajanyadi Churna cures gastric issues and revitalises the body."
        img="https://www.keralatourism.org/images/ayurveda/static-banner/large/Churnas-18022020062731.jpg"
      />
    </>
  );
};
