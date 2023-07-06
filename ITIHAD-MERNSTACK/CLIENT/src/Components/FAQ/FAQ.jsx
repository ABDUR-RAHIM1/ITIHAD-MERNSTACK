import React from 'react'
import "./FAQ.css"
function FAQ() {
    return (
        <div className='FAW_Container'>
            <div className="container">
                <h2 className='color headline'>FAQ !</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h6> What is social organization and why?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Social organization is a meeting place to promote camaraderie and harmony among some people of the same social culture. Where a family is formed among some people of the same society. A zone becomes the roof of a house. Committing to some social responsibility by communicating with everyone under one roof. To tie the people of the same region to the same thread and extend a hand of support to each other in happiness and sadness, in need and in need.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h6>   What is the purpose of the organization?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Etihad is a public welfare and service organization. Its motto is public service. Public service is the subject of his meditation, thought and research. We know that no good work can be done without a good and consistent plan. And keeping that in mind, we have adopted a sound succession plan. Our main objective is to support the helpless poor people of the village even if only a little bit and to give full support. In addition to this, we will take several other plans in the future, inshallah.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h6> Are you involved with any political organization?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">It is a non-political, social and educational organization.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    What do the members of the organization do?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> 
                                        <ul className='accordion_ul'>
                                            <li>Conducting social and educational activities.</li>
                                            <li>To create confidence in the community to achieve self-reliance.</li>
                                            <li>Encouraging the poor, helpless talented students of the area to continue reading and writing.</li>
                                            <li>To create a sense of social responsibility among everyone in the society and to develop them as socially conscious citizens.</li>
                                            <li>To empower every member of the social organization to become successful, autonomous and voluntary through work.</li>
                                            <li>Also to act as directed by the Establishment Committee.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    About Organization Funding:
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">The organization shall have a specific fund, out of which funds shall be spent on the work of the organization. Personally, no member or director/person in charge of the organization can under any circumstances spend money from the said fund for his own activities. <br />
                                    <span className='text-danger mt-3 fw-bold'>Note: All transactions of the organization will be conducted through this committee.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    When is the donation schedule?
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>For permanent members, dues must be paid between 25th and 29th of every month.</p>
                                        <p className='text-success'>And temporary members can donate at any time.</p>
                                        <p className='fw-bold'>Donation number : Bkash 01321040273 (Personal)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FAQ