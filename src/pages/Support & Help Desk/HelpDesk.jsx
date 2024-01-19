import React, { useState } from 'react'
import HOC from '../../layout/HOC'
import { IoIosArrowForward } from "react-icons/io";
import './HelpDesk.css'
import btn from '../../Images/btnquestion.png'
import searchicon from '../../Images/searchicon.png'




const HelpDesk = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const questionsAndAnswers = [
        {
            id: 1,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 2,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 3,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 4,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 5,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 6,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 7,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 8,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 9,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },
        {
            id: 10,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus nec odio semper egestas. Integer gravida pulvinar augue, a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit lectus vitae, blandit turpis.',
        },

    ];
    const handleQuestionClick = (id) => {
        setSelectedQuestion(id === selectedQuestion ? null : id);
    };
    const getArrowIcon = (id) => {
        return selectedQuestion === id ? '▼' : '►';
    };
    const [isButtonExpanded, setIsButtonExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsButtonExpanded(!isButtonExpanded);
    };

    return (
        <>
            <section className='pages'>
                <div className='Heading_all_all'>
                    <h5>Support & Help Desk</h5>
                </div>
                <div className="searchbox">
                    <i>
                        <img src={searchicon} alt="" />
                    </i>
                    <input type="search" placeholder="Search" />
                </div>
                <div className='helpdesk-container'>
                    <span className='helpdeskheading'>FREQUENTLY ASKED QUESTIONS ( FAQ’S )</span>
                    <div className='helpdeskquestion'>
                        {questionsAndAnswers.map((qa) => (
                            <div key={qa.id} className="faq-item">
                                <div
                                    className={`question ${selectedQuestion === qa.id ? 'open' : ''}`}
                                    onClick={() => handleQuestionClick(qa.id)}
                                >
                                    <span>{qa.question}</span>
                                    <div className="arrow-button">{getArrowIcon(qa.id)}</div>
                                </div>
                                {selectedQuestion === qa.id && <div className="answer">{qa.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="circle-container">
                    <button
                        className={`expandable-button ${isButtonExpanded ? 'expanded' : ''}`}
                        onClick={handleButtonClick}
                    >
                        <img src={btn} alt="Button Image" />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span className="button-text">Got any Query? Please let us know...</span>
                            <span className="button-text-expanded">CLICK TO CONTINUE  <IoIosArrowForward /></span>
                        </div>
                    </button>
                </div>
            </section>
        </>
    )
}

export default HOC(HelpDesk)