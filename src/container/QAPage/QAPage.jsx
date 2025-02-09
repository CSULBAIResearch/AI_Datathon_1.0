import React, { useState, useRef, useEffect } from "react";
import "./QAPage.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const questionsData = [
  {
    id: 1,
    question: "Question 1?",
    answer: "Answer 1.",
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    id: 3,
    question: "Question 3",
    answer: "Answer 3",
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
    <div className="QAPage box__container flex__center">
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
