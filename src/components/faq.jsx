import  { useState } from "react";

const Faq = () => {
  // Define an array of FAQ items with title and content
  const faqItems = [
    { id: 1, title: "Question 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, title: "Question 2", content: "Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 3, title: "Question 3", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
    { id: 4, title: "Question 4", content: "Cras nec risus vitae eros faucibus vestibulum et eu metus." }
  ];

  // Track the expanded state of each accordion item
  const [expanded, setExpanded] = useState(null);

  // Toggle function to handle accordion item expansion
  const toggleAccordion = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="mt-5 px-5 md:px-10 xl:px-[10.5rem] 2xl:px-[4.75rem]  xl:mt-[5rem]" >
      <div className="flex items-center justify-center mb-10 ">
        <img src="/assets/Title.png" alt="Title" className="sm:h-[10rem] lg:h-[12rem] xl:h-[14rem] 2xl:h-[15rem]" />
      </div>

      {faqItems.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-300 rounded-2xl mb-5 overflow-hidden shadow-lg xl:w-[80vw] 2xl:w-[90vw] mx-auto "
        >
          {/* Accordion Header */}
          <div
            className="flex justify-between items-center p-4 bg-white cursor-pointer "
            onClick={() => toggleAccordion(item.id)}
          >
            <img src={`/assets/text${item.id + 11}.png`} className="sm:w-[15rem] lg:ml-[3rem] xl:w-[20rem]" alt="accordion item" />
            <span
              className={`transform transition-transform text-black text-2xl font-bold ${expanded === item.id ? "rotate-45" : "rotate-0"}`}
            >
              {/* Rotate the + icon when expanded */}
              +
            </span>
          </div>

          {/* Accordion Content */}
          {expanded === item.id && (
            <div className="p-4 bg-white">
              <p className="text-gray-700 xl:text-xl 2xl:text-2xl px-[3rem]">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
