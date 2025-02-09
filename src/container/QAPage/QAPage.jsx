import React, { useState, useRef, useEffect } from "react";
import "./QAPage.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const questionsData = [
  {
    id: 1,
    question: "1. What is a Datathon?",
    answer: "A Datathon is a competition where participants analyze dataset(s), build machine learning model(s), and develop solutions to solve a given problem within the given timeframe.",
  },
  {
    id: 2,
    question: "2. Who can participate?",
    answer: "Any current CSULB Enrolled Students can participate! Whether you’re a beginner or an experienced data scientist, you’re welcome to join.",
  },
  {
    id: 3,
    question: "3. Do I need prior experience in AI or data science",
    answer: "No prior experience is required! We highly encourage beginners to participate, and we will provide learning resources to help you get started, as well as mentors to guide you through the model building process!",
  },

  {
    id: 4,
    question: "4. Can I participate individually or do I need a team?",
    answer: "You can participate as an individual or in a team of up to 4 members. If you don’t have a team, we can help match you with others during the team formation phase and through the Datathon Discord Channel",
  },

  {
    id: 5,
    question: "5. What are the judging criteria?",
    answer: "The two main areas participants will be judged on are model effectiveness and the approach taken in developing their model, including their reasoning, methodology, and decision-making process.",
  },

  {
    id: 6,
    question: "6. When and where is the Datathon happening?",
    answer: "The Datathon will be taking place in the USU Ballroom, on Saturday, March 8th. Check-in ends at 9:30 AM.",
  },

  {
    id: 7,
    question: "7. What tools and technologies can we use?",
    answer: "We highly recommend you use Python. You are free to use any AI/ML frameworks, such as TensorFlow, PyTorch, Scikit-learn, etc.",
  },
];

const QAPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]); // Array of refs for each question

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = activeIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="QAPage box__container flex__center" id="FAQ">
      <h1 className="heroHeading1">FREQUENTLY QUESTION</h1>
      <div className="FAQ-container">
        {questionsData.map((item, index) => (
          <div key={item.id} className="faq-item">
            <button className={`question-section ${activeIndex === index ? "active" : ""}`} onClick={() => toggleAccordion(index)}>
              <div className="Question-wrapper">
                <div className="question-align">
                  <h4 className="question-style">{item.question}</h4>
                  {activeIndex === index ? <FiMinus className="question-icon rotate" /> : <FiPlus className="question-icon" />}
                </div>
                <div className={`answer ${activeIndex === index ? "answer-divider" : ""}`} ref={(el) => (contentRefs.current[index] = el)}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QAPage;
