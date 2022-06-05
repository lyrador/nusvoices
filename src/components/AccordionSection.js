import React,{Component} from 'react';
import './AccordionSection.css';
import BackgroundImage1 from '../images/background1.jpg';

export default class AccordionSection extends Component {

  componentDidMount(){
    this.addAccordionFunction();
  }

  addAccordionFunction(){
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
          currentlyActiveAccordionItemHeader.classList.toggle("active");
          currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight.toString() + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
        
    });
    });
  }
  render(){
    return (
        <div className='faq-main-container' style={{ backgroundImage: `url(${BackgroundImage1})`}}>
        
        <h1>FAQ</h1>
        <div className="accordion">
        <div className="accordion-item">
            <div className="accordion-item-header">
            1) What can I expect as a Voices Member?
            </div>
            <div className="accordion-item-body">
            <div className="accordion-item-body-content">
                Shortly after auditions, all new members will be hosted at our Voices Welcome Session (VWS), an exciting orientation camp for everyone
                to get to know each other better. Following which, 
                preparations will start for our PRELUDE concert near the end of the first semester, and we will end off with our EMERGE concert in the second. 
                Apart from these key events, we may also open up participation to gigs and other concerts, depending on the current regulations and availability.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className="accordion-item-header">
            2) How is the commitment in Voices like?
            </div>
            <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            Commitment is dependent on any upcoming performances we have. There will only be practices if we have upcoming concerts or gigs. We will usually practice about 1-2 hours a week (depending on how many songs we are performing!).
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className="accordion-item-header">
            3) I do not have background in singing but i just like to sing. Still can apply? Will it be a disadvantage?
            </div>
            <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            Yeap you can still apply! As long as you can play/ sing well enough and show that you're passionate, you still have a high chance of passing the auditions :)

            Many of our vocalists don’t really have background in singing - no vocal training or band/competition experience. So don’t worry too much! If you never try, you’ll never know xD.
            </div>
            </div>
        </div>
        {/* <div className="accordion-item">
            <div className="accordion-item-header">
            Empty Test
            </div>
            <div className="accordion-item-body">
            <div className="accordion-item-body-content">
                <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Frameworks (CSS and JavaScript frameworks)</li>
                <li>Responsive Design</li>
                </ul>
            </div>
            </div>
        </div> */}
        <div className="accordion-item">
            <div className="accordion-item-header">
            4) On what days do you have practices?
            </div>
            <div className="accordion-item-body">
            <div className="accordion-item-body-content">
            We usually have practices on Tuesday and Friday, sometimes Wednesday if we manage to secure booking!
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className="accordion-item-header">
            5) When are the auditions?
            </div>
            <div className="accordion-item-body">
            <div className="accordion-item-body-content">
                There will be 2 auditions held every year, once for each semester. 
                For the first semester, we will be recruiting both vocalists and instrumentalists, and sign ups will be open in August.
                For the second semester, we will be recruiting instrumentalists only, and sign ups will be open in December.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className="accordion-item-header">
            6) What roles are there?
            </div>
            <div className="accordion-item-body">
            <div className="accordion-item-body-content">
                Apart from vocalists, our instrumentalists comprises of Electric Guitarists, Acoustic Guitarists, Keyboardists,
                Bassists and Drummer. However, we do have an open category where we incorporate other instruments such as the Cello,
                Erhu and Violin.
            </div>
            </div>
        </div>
        </div>
    </div>
    );
  }
}