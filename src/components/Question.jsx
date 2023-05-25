import React, { useState } from 'react'
import '../Pages/Pricing/Pricing.css'
import icon from  '../Images/plus.svg'



const Question = () => {
	const [ selected, setSelected] = useState(null)
	
	
    const toggle = (index) => {
		if (selected === index) {
			return setSelected(null)
		}
		 	setSelected(index)
	}
 
    return (
      <div className='frequent-question'>
           <div className='frequent-div'>
			        <h2>Frequently asked questions</h2>
			            <p>Choose the pricing plan that works best for the, whether you're looking for casual transactions or flexible customisations</p>
          </div>
          
            <div className='List-container'>
              <h2>Frequently asked questions</h2>
                
                <div className='Accordion'>
				  {QuestionData.map((item, index) => (
						<div className='item' key={item.id}>
						  <div className='title' onClick ={ () => toggle(index)}>
							  <p>{item.Question}</p>
							  <span className='plus'>{selected === index ? <div>-</div> : <img src={icon} alt='plus icon'/>}</span>
						  </div>
						  
                          <div className={selected === index ? "content-show" : "content"}>
							  <p>{ item.Answer}</p>
							</div>
						</div>
					  	
						))}
                </div>
              

            </div>

          

          
        </div>
  )
}
const QuestionData = [
    {
        id: 1,
        Question: "Is the Basic Plan suitable for small financial institutions? ",
        Answer: "Yes the Basic Plan is designed to be affordable and accessible to smaller financial institution"
    },
    {
           id: 2,
        Question: "Can I upgrade from the Basic Plan to the Premium Plan at any time?  ",
        Answer: "Yes you can upgrade from the Basic Plan to the Premium Plan at any time."
    },
    {
           id: 3,
        Question: " Can I add more users to my account on the Basic Plan?  ",
        Answer: "Yes, you can add more users to your account  on the Basic Plan, but it may affect the cost. Please contact our sales team for more information."
    },
    {
        id: 4,
        Question: "Does the Premium Plan offer a free trial? ",
        Answer: "The Premium Plan may offer a free trial, but please check with our sales team for the most up-to-date information"
    },
    {
        id: 5,
        Question: "Is the Basic Plan suitable for small financial institutions? ",
        Answer: "Yes the Basic Plan is designed to be affordable and accessible to smaller financial institution"
    },
    {
           id: 6,
        Question: " Is white-labeling included in the Basic Plan? ",
        Answer: "No, white-labelling is not included in the Basic Plan. It is a features that is exclusive to the Premium Plan"
    },
    {
           id: 7,
        Question: "Is the Basic Plan suitable for small financial institutions? ",
        Answer: "Yes the Basic Plan is designed to be affordable and accessible to smaller financial institution"
    },
    {
        id: 8,
        Question: "Is the Basic Plan suitable for small financial institutions? ",
        Answer: "Yes the Basic Plan is designed to be affordable and accessible to smaller financial institution"
    },
    {
           id: 9,
        Question: "Is the Basic Plan suitable for small financial institutions? ",
        Answer: "Yes the Basic Plan is designed to be affordable and accessible to smaller financial institution"
    },
    {
            id: 10,
        Question: "Is the Basic Plan suitable for small financial institutions? ",
        Answer: "Yes the Basic Plan is designed to be affordable and accessible to smaller financial institution"
    },
]
export default Question