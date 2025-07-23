"use client"

import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

interface QAItem {
  question: string
  answer: string
}

interface QACategory {
  title: string
  items: QAItem[]
}

const qaData: QACategory[] = [
  {
    title: "Gastric Sleeve",
    items: [
      {
        question: "What is a gastric sleeve?",
        answer:
          "It is a surgery where the size of the stomach is reduced, leaving it tube-shaped, so you eat less and feel full faster.",
      },
      {
        question: "How does the gastric sleeve work for weight loss?",
        answer:
          "By reducing the stomach, you eat smaller portions and feel satisfied sooner, which decreases calorie intake.",
      },
      {
        question: "Who are candidates for the gastric sleeve?",
        answer: "People with severe obesity (high BMI) who have not succeeded with other weight loss methods.",
      },
      {
        question: "What are the benefits of the gastric sleeve?",
        answer:
          "Significant weight loss, improvement in obesity-related health issues, and relatively quick recovery.",
      },
      {
        question: "What are the risks associated with the gastric sleeve?",
        answer:
          "As with any surgery, there are risks of bleeding, infection, stomach leaks, and long-term complications.",
      },
      {
        question: "How much weight can I expect to lose with the gastric sleeve?",
        answer: "Most people lose between 60-70% of their excess weight within a year.",
      },
      {
        question: "What is the recovery process like after gastric sleeve surgery?",
        answer:
          "The first few days involve a liquid diet, then soft foods, and gradually solid foods are reintroduced. Rest and medical follow-up are required.",
      },
      {
        question: "What kind of diet should I follow after the gastric sleeve?",
        answer:
          "A strict diet, low in fats and sugars, and high in protein, to maximize weight loss and avoid complications.",
      },
      {
        question: "How long does gastric sleeve surgery take?",
        answer: "Approximately 1-2 hours.",
      },
      {
        question: "What preparation is required before gastric sleeve surgery?",
        answer: "Medical tests, nutritional and psychological evaluation, and following a pre-operative diet.",
      },
      {
        question: "How much does gastric sleeve surgery cost?",
        answer:
          "The price varies, so it is best to contact the company for an updated quote.",
      },
      {
        question: "What kind of post-operative follow-up do you provide?",
        answer: "Continuous support is offered, with nutritionists and surgeons.",
      },
      {
        question: "What complications can occur?",
        answer: "Leaks, stenosis, reflux, and nutritional deficiencies.",
      },
      {
        question: "Are vitamin supplements necessary after the surgery?",
        answer: "Yes, since the stomach absorbs fewer nutrients.",
      },
      {
        question: "How long do I need to stay in the location for the entire process?",
        answer: "It depends on the service package the client chooses.",
      },
      {
        question: "How is the surgery payment made?",
        answer: "By bank transfer or credit card.",
      },
      {
        question: "What kind of psychological support do you provide after the surgery?",
        answer: "Psychological follow-up is provided throughout the process.",
      },
      {
        question: "How does the gastric sleeve affect my blood sugar levels?",
        answer: "It generally improves them, especially in people with type 2 diabetes.",
      },
      {
        question: "How long should I wait to exercise after the surgery?",
        answer: "Light walks soon, and more intense exercise after a few weeks.",
      },
      {
        question: "How can I manage dumping syndrome after the gastric sleeve?",
        answer: "Avoid sugary and fatty foods, eat small and frequent portions.",
      },
      {
        question: "What kind of scars does gastric sleeve surgery leave?",
        answer: "They are small scars since it is performed laparoscopically.",
      },
      {
        question: "Is the gastric sleeve reversible?",
        answer: "No, it is a permanent procedure.",
      },
      {
        question: "What happens if I don’t follow the recommended diet after surgery?",
        answer: "You may experience weight issues, nutritional deficiencies, and complications.",
      },
      {
        question: "How does the gastric sleeve affect my fertility?",
        answer: "It can improve it, as weight loss increases the chances of conception.",
      },
      {
        question: "What medications should I avoid after gastric sleeve surgery?",
        answer: "Non-steroidal anti-inflammatory drugs (NSAIDs) and other stomach-irritating medications.",
      },
    ],
  },
  {
    title: "Gastric Bypass",
    items: [
      {
        question: "What is a gastric bypass?",
        answer: "The stomach is reduced and connected directly to the small intestine, bypassing part of the intestine.",
      },
      {
        question: "How does gastric bypass work for weight loss?",
        answer: "It reduces the size of the stomach and the absorption of calories and nutrients.",
      },
      {
        question: "What are the benefits of gastric bypass?",
        answer: "Very high weight loss, improvement or cure of type 2 diabetes, and other health issues.",
      },
      {
        question: "What are the risks of gastric bypass?",
        answer: "Risks of bleeding, infection, leaks, intestinal obstruction, and nutritional deficiencies.",
      },
      {
        question: "How much weight can I lose with gastric bypass?",
        answer: "Up to 70-80% of excess weight within a year.",
      },
      {
        question: "What is the recovery process like after gastric bypass?",
        answer: "Similar to the gastric sleeve, with a liquid, soft, and then solid diet.",
      },
      {
        question: "What diet should I follow after gastric bypass?",
        answer: "A high-protein, low-fat and low-sugar diet, with vitamin supplements.",
      },
      {
        question: "How long does gastric bypass surgery take?",
        answer: "Approximately 2-3 hours.",
      },
      {
        question: "Who are the best candidates for gastric bypass?",
        answer: "People with severe obesity and type 2 diabetes or severe gastric reflux.",
      },
      {
        question: "What is the difference between gastric sleeve and gastric bypass?",
        answer: "The bypass is more complex and offers greater weight loss but has more risks.",
      },
      {
        question: "How much does gastric bypass cost?",
        answer: "You need to contact the company for an updated price.",
      },
      {
        question: "What kind of medical follow-up is offered after gastric bypass?",
        answer: "Long-term follow-up with doctors and nutritionists.",
      },
      {
        question: "How does gastric bypass affect nutrient absorption?",
        answer: "It reduces absorption, so lifelong vitamin supplements are needed.",
      },
      {
        question: "What long-term complications can I expect with gastric bypass?",
        answer: "Nutritional deficiencies, dumping syndrome, and intestinal obstruction.",
      },
      {
        question: "How can I prevent vitamin deficiency after gastric bypass?",
        answer: "By taking the recommended vitamin supplements.",
      },
      {
        question: "How long should I wait to return to work after gastric bypass?",
        answer: "It depends on the type of job, but generally a few weeks.",
      },
      {
        question: "How does gastric bypass affect my cardiovascular health?",
        answer: "It improves cholesterol and blood pressure levels.",
      },
      {
        question: "How effective is gastric bypass surgery?",
        answer: "Very effective for weight loss and health improvement.",
      },
      {
        question: "What kind of nutritional support do you provide?",
        answer: "Close follow-up with nutritionists specialized in bariatric surgery.",
      },
      {
        question: "What tests are performed before the surgery?",
        answer: "Lab tests, imaging studies, and cardiac evaluation.",
      },
      {
        question: "Are blood donors needed?",
        answer: "Usually not, only in special cases.",
      },
      {
        question: "How long should I wait to get pregnant after the surgery?",
        answer: "Ideally, wait 12 to 18 months.",
      },
      {
        question: "How soon can I resume daily activities after the surgery?",
        answer: "Light activities in the first week. Routine activities in the second week.",
      },
      {
        question: "What type of exercise is recommended after the surgery?",
        answer: "Walking, swimming, and low-intensity exercise.",
      },
      {
        question: "How can stretch marks be treated after weight loss?",
        answer: "With moisturizing creams or dermatological procedures.",
      },
    ],
  },
  {
    title: "Gastric Balloon",
    items: [
      {
        question: "What is a gastric balloon?",
        answer: "An inflatable balloon placed in the stomach to make you feel full.",
      },
      {
        question: "How does the gastric balloon work for weight loss?",
        answer: "It takes up space in the stomach, reducing the amount of food you can eat.",
      },
      {
        question: "What are the benefits of the gastric balloon?",
        answer: "Moderate weight loss, non-surgical and reversible procedure.",
      },
      {
        question: "What are the risks associated with the gastric balloon?",
        answer: "Nausea, vomiting, abdominal pain, and rarely, gastric perforation.",
      },
      {
        question: "How much weight can I lose with the gastric balloon?",
        answer: "Between 10-15% of excess weight.",
      },
      {
        question: "What is the process for placing and removing the gastric balloon?",
        answer: "It is done endoscopically, without surgery.",
      },
      {
        question: "What diet should I follow with the gastric balloon?",
        answer: "A soft diet at first, then a balanced, low-calorie diet.",
      },
      {
        question: "How long does the gastric balloon stay in my stomach?",
        answer: "Generally, 6 months.",
      },
      {
        question: "Who are candidates for the gastric balloon?",
        answer: "People with overweight or moderate obesity who do not want surgery.",
      },
      {
        question: "What is the difference between the gastric balloon and other bariatric surgeries?",
        answer: "It is less invasive and less effective than the sleeve or bypass.",
      },
      {
        question: "How much does the gastric balloon placement cost?",
        answer: "For exact prices, you need to contact the company.",
      },
      {
        question: "What side effects are common with the gastric balloon?",
        answer: "Nausea, vomiting, and abdominal pain, especially in the first few days.",
      },
      {
        question: "Do I need any type of anesthesia for the gastric balloon placement?",
        answer: "Light sedation.",
      },
      {
        question: "How can I manage nausea and vomiting after the balloon placement?",
        answer: "With prescribed medications and a soft diet.",
      },
      {
        question: "What happens if the gastric balloon deflates inside my stomach?",
        answer: "It is very rare, but if it happens, it must be removed.",
      },
      {
        question: "Are there different types of gastric balloons?",
        answer: "Yes, some last longer, and others are swallowed like a capsule.",
      },
      {
        question: "What care should be taken after the gastric balloon placement?",
        answer: "Follow the diet and take medications to prevent nausea.",
      },
      {
        question: "Does the gastric balloon affect the function of other organs?",
        answer: "Generally no, but tolerance varies between individuals.",
      },
      {
        question: "What is the difference between a swallowable balloon and an endoscopically placed balloon?",
        answer: "The swallowable one is ingested, and the endoscopic one is placed under sedation.",
      },
      {
        question: "Will there be any visible difference in the abdomen with the balloon placed?",
        answer: "No, there is no visible difference.",
      },
    ],
  },
  {
    title: "Medical Tourism",
    items: [
      {
        question: "Why should I choose Mexico for my bariatric surgery?",
        answer: "Because of the quality of doctors, lower costs, and personalized care.",
      },
      {
        question: "What services are offered to international patients?",
        answer: "Travel coordination, accommodation, transportation, and medical follow-up.",
      },
      {
        question: "How can I coordinate my trip and surgery?",
        answer: "By contacting them via phone or email.",
      },
      {
        question: "What type of accommodation is offered for medical tourism patients?",
        answer: "Comfortable hotels close to the hospital.",
      },
      {
        question: "How is transportation handled from the airport to the hospital and hotel?",
        answer: "Private and secure transportation is provided.",
      },
      {
        question: "How safe is it to travel to Mexico for surgery?",
        answer: "Mexico has safe cities with high-quality hospitals.",
      },
      {
        question: "How can I communicate with the doctors before my trip?",
        answer: "Through our medical coordination team.",
      },
      {
        question: "What kind of post-operative support is offered to international patients?",
        answer: "Online follow-up and continuous communication with doctors.",
      },
      {
        question: "How are communication issues handled in a foreign country?",
        answer: "Translation services are offered.",
      },
      {
        question: "How does air travel affect my recovery after surgery?",
        answer: "It is recommended to wait a few days before traveling for better recovery.",
      },
      {
        question: "What hospitals are used for the procedures?",
        answer: "Internationally certified high-end hospitals.",
      },
      {
        question: "Are translation services provided?",
        answer: "Yes.",
      },
      {
        question: "What are the benefits of medical tourism in Mexico compared to the USA?",
        answer: "Lower costs and high-quality services.",
      },
      {
        question: "What kind of tourist activities can be done before and after the surgery?",
        answer: "Tourism is only recommended after post-operative recovery, as rest is required before.",
      },
      {
        question: "What if a complication occurs when I am back in my country?",
        answer: "Doctors' contacts are provided to give the required attention.",
      },
      {
        question: "What documents do I need to travel to Mexico?",
        answer: "Valid passport.",
      },
    ],
  },
  {
    title: "Rhinoplasty",
    items: [
      {
        question: "What is a rhinoplasty?",
        answer: "It is a surgery to change the shape of the nose.",
      },
      {
        question: "Why is rhinoplasty performed?",
        answer: "For aesthetic reasons or to improve breathing.",
      },
      {
        question: "How long does the surgery take?",
        answer: "Approximately 1 to 3 hours.",
      },
      {
        question: "What type of anesthesia is used?",
        answer: "General or local with sedation.",
      },
      {
        question: "How long does recovery take?",
        answer: "Major swelling decreases in 2 weeks, but full recovery takes several months.",
      },
      {
        question: "Does rhinoplasty hurt a lot afterward?",
        answer: "There is discomfort, but it is controlled with medication.",
      },
      {
        question: "Are there visible scars?",
        answer: "Generally no, or they are very small and hidden.",
      },
      {
        question: "Can breathing problems be corrected during rhinoplasty?",
        answer: "Yes, it is common.",
      },
      {
        question: "How much does a rhinoplasty cost?",
        answer: "It varies greatly; it is best to request a quote.",
      },
      {
        question: "When are the final results visible?",
        answer: "After several months, when the swelling completely disappears.",
      },
      {
        question: "What preparation is needed before surgery?",
        answer: "Medical tests and stopping certain medications.",
      },
      {
        question: "What type of post-operative care is required?",
        answer: "Avoid impacts, use sunscreen, and follow medical instructions.",
      },
      {
        question: "Can I choose the shape of my new nose?",
        answer: "It is discussed with the surgeon to achieve realistic results.",
      },
      {
        question: "Are there risks with rhinoplasty?",
        answer: "As with any surgery, bleeding, infection, or breathing problems.",
      },
      {
        question: "Can I have rhinoplasty if I’ve already had nose surgery before?",
        answer: "Yes, but it is more complex.",
      },
      {
        question: "How long do I have to wait to see the final result?",
        answer: "6 to 12 months.",
      },
      {
        question: "Can a very drastic change be made?",
        answer: "That depends on the nose's characteristics and the surgeon's evaluation.",
      },
      {
        question: "Do I need nasal packing after surgery?",
        answer: "Generally yes, for a few days.",
      },
      {
        question: "When can I exercise again?",
        answer: "After a few weeks, gradually.",
      },
      {
        question: "Does rhinoplasty change my voice?",
        answer: "It is not common, but there may be temporary changes.",
      },
    ],
  },
  {
    title: "Breast Augmentation",
    items: [
      {
        question: "What is breast augmentation?",
        answer: "It is a surgery to increase breast size.",
      },
      {
        question: "What types of implants are used?",
        answer: "Silicone or saline.",
      },
      {
        question: "Where are the implants placed?",
        answer: "Under the muscle or the breast gland.",
      },
      {
        question: "How long does the surgery take?",
        answer: "1 to 2 hours.",
      },
      {
        question: "What type of anesthesia is used?",
        answer: "General.",
      },
      {
        question: "How long does recovery take?",
        answer: "A few weeks, with discomfort decreasing over time.",
      },
      {
        question: "Are there visible scars?",
        answer: "It depends on the technique, but they are well hidden.",
      },
      {
        question: "How much do implants cost?",
        answer: "It varies depending on the type and size.",
      },
      {
        question: "How long do implants last?",
        answer: "It depends on the type, but they can last many years.",
      },
      {
        question: "Do implants affect breastfeeding?",
        answer: "Generally no, but there are exceptions.",
      },
      {
        question: "What preparation is needed before surgery?",
        answer: "Medical tests and mammograms.",
      },
      {
        question: "What type of post-operative care is required?",
        answer: "Wear a special bra, avoid exertion, and follow medical instructions.",
      },
      {
        question: "Can implants be changed in the future?",
        answer: "Yes, if necessary.",
      },
      {
        question: "Are there risks with implants?",
        answer: "Capsular contracture, rupture, or infection.",
      },
      {
        question: "Do implants increase the risk of breast cancer?",
        answer: "No, according to most studies.",
      },
      {
        question: "How long do I have to wait to see the final results?",
        answer: "Several months, as the swelling decreases.",
      },
      {
        question: "What implant size is best for me?",
        answer: "The surgeon decides based on your body and desires.",
      },
      {
        question: "Will I feel the implants to the touch?",
        answer: "Yes, but they should feel natural.",
      },
      {
        question: "When can I exercise again?",
        answer: "After a few weeks, gradually.",
      },
      {
        question: "Does breast augmentation correct sagging breasts?",
        answer: "Not always; sometimes a lift is needed.",
      },
    ],
  },
  {
    title: "Liposculpture",
    items: [
      {
        question: "What is liposculpture?",
        answer: "It is a surgery to remove localized fat and reshape the body.",
      },
      {
        question: "What areas of the body can be treated?",
        answer: "Abdomen, thighs, arms, neck, etc.",
      },
      {
        question: "How long does the surgery take?",
        answer: "It depends on the areas treated; it can be 1 to 3 hours.",
      },
      {
        question: "What type of anesthesia is used?",
        answer: "Local with sedation or general.",
      },
      {
        question: "How long does recovery take?",
        answer: "A few weeks, with swelling and discomfort.",
      },
      {
        question: "Are there visible scars?",
        answer: "They are small and well hidden.",
      },
      {
        question: "How much fat can be removed?",
        answer: "It depends on the patient and the area treated.",
      },
      {
        question: "How much does liposculpture cost?",
        answer: "It varies greatly, depending on the number of areas treated.",
      },
      {
        question: "Are the results permanent?",
        answer: "Yes, if a stable weight is maintained.",
      },
      {
        question: "Does liposculpture help with weight loss?",
        answer: "It is not for weight loss but for body contouring.",
      },
      {
        question: "What preparation is needed before surgery?",
        answer: "Medical tests and stopping certain medications.",
      },
      {
        question: "What type of post-operative care is required?",
        answer: "Wear a compression garment, get massages, and avoid exertion.",
      },
      {
        question: "Can cellulite be corrected with liposculpture?",
        answer: "It improves but does not eliminate it completely.",
      },
      {
        question: "Are there risks with liposculpture?",
        answer: "Bleeding, infection, skin irregularities.",
      },
      {
        question: "Can liposculpture be combined with other surgeries?",
        answer: "Yes, it is common to combine it with abdominoplasty or others.",
      },
      {
        question: "How long do I have to wait to see the final results?",
        answer: "Several months, as the swelling decreases.",
      },
      {
        question: "Can fat return to the treated areas?",
        answer: "Yes, if you gain weight.",
      },
      {
        question: "Is liposculpture painful?",
        answer: "There is discomfort, but it is controlled with medication.",
      },
      {
        question: "When can I exercise again?",
        answer: "After a few weeks, gradually.",
      },
      {
        question: "What is high-definition liposuction?",
        answer: "A technique to highlight abdominal muscles.",
      },
    ],
  },
  {
    title: "General Plastic Surgery Questions",
    items: [
      {
        question: "What should I look for in a plastic surgeon?",
        answer: "Certification, experience, and good references.",
      },
      {
        question: "How long should I wait between the consultation and the surgery?",
        answer: "It depends on the type of surgery.",
      },
      {
        question: "What kind of tests are required before surgery?",
        answer: "Blood tests, electrocardiogram, etc.",
      },
      {
        question: "Do I need to quit smoking before surgery?",
        answer: "Yes, it is very important.",
      },
      {
        question: "How long do I need to stay in the hospital?",
        answer: "It depends on the surgery; it can be outpatient or require hospitalization.",
      },
      {
        question: "What medications should I avoid before and after surgery?",
        answer: "Aspirin, anti-inflammatories, etc.",
      },
      {
        question: "How can I minimize scars?",
        answer: "By following the surgeon's instructions.",
      },
      {
        question: "When can I return to work after surgery?",
        answer: "It depends on the type of job and the surgery.",
      },
      {
        question: "What is a second opinion?",
        answer: "A consultation with another surgeon to confirm the treatment plan.",
      },
      {
        question: "What can I expect during the consultation?",
        answer: "Discussion of expectations, physical exam, and treatment plan.",
      },
      {
        question: "What if I am not happy with the results?",
        answer: "Depending on the case, a revision surgery could be performed.",
      },
      {
        question: "What types of insurance cover plastic surgeries?",
        answer: "Generally not, as in most cases it is an aesthetic procedure.",
      },
      {
        question: "How are bruises treated?",
        answer: "With ice, medication, and rest.",
      },
      {
        question: "What precautions should be taken with the sun after surgery?",
        answer: "Avoid direct exposure and use sunscreen.",
      },
      {
        question: "What type of clothing is recommended after plastic surgery?",
        answer: "Comfortable and loose clothing.",
      },
      {
        question: "How long should massages be performed on the operated area?",
        answer: "The doctor will determine the duration.",
      },
      {
        question: "Can multiple surgeries be performed at the same time?",
        answer: "Yes, but it depends on the patient's health.",
      },
      {
        question: "How can swelling be reduced faster in the operated area?",
        answer: "With rest, ice, and medication.",
      },
      {
        question: "Can I travel by plane after plastic surgery?",
        answer: "It is recommended to wait a few days.",
      },
      {
        question: "Can tattoos be done on scars?",
        answer: "Yes, after the area has healed properly.",
      },
    ],
  },
];

export default function QASection() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
    useEffect(() => {
      if (!selectedCategory && qaData.length > 0) {
        setSelectedCategory(qaData[0].title)
      }
    }, [selectedCategory])
  
    const filteredData = qaData
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      }))
      .filter((category) => category.items.length > 0)
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#77B5B2] mb-4">Questions & Answers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about our bariatric and plastic surgery procedures.
          </p>
        </div>
  
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {qaData.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.title
                  ? "bg-[#77B5B2] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
  
        {/* Q&A Content */}
        <div className="space-y-8">
          {filteredData
            .filter((cat) => cat.title === selectedCategory)
            .map((category) => (
              <div key={category.title} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-[#77B5B2] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.items.length} questions</p>
                </div>
  
                <div className="p-6">
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.title}-${index}`}
                        className="border rounded-lg overflow-hidden"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50 text-left">
                          <span className="font-medium text-[#77B5B2]">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
        </div>
  
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron preguntas que coincidan con tu búsqueda.</p>
            <button onClick={() => setSearchTerm("")} className="mt-4 text-[#4A90E2] hover:underline">
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
    )
  }
