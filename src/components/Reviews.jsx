import React from 'react'
import rating1 from '@images/rating1.png'
import rating2 from '@images/rating2.png'
import rating3 from '@images/rating3.png'
const Reviews = () => {
  return (
    <div className="our-client">
                <div className="container">
                    <div>
                        <div className="thin">Testimonial</div>
                        <div className="bold">What Our Client Says</div>
                        <div className="rating">
                            <div className="container rate">
                                
                                    <div className="stars">
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <div className="thin">"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe
                                        nesciunt nemo eligendi numquam voluptate"</div>
                                    <div className="rater"><img src={rating1}/>
                                        <div className="bold">Cassandra Warren<div className="red">Business Manager, Dorfus
                                            </div>
                                        </div>

                                    </div>
                                    </div>

                                    

                
                                    <div className="stars">
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <div>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero,
                                        ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi
                                        numquam voluptate"</div>
                                    <div className="rater"><img src={rating2}/>
                                        <div className="bold">Amanda Tulling<div className="red">Senior Developer, Square</div>
                                        </div>

                                    </div>
                                    </div>

                                    
                                
                                
                                    <div className="stars">
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <i className="fa-sharp fa-solid fa-star fa-sm"></i>
                                        <div>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero,
                                        ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi
                                        numquam voluptate"</div>
                                    <div className="rater"><img src={rating3}/>
                                        <div className="bold">Jack McDogglas<div className="red">Key Account Manager, Gobona
                                            </div>
                                        </div>

                                    </div>
                                    </div>
                                
                                    

                                
                                    
                                
                            </div>
                            <button class="reviews-btn">All Reviews&nbsp;<i
                                        class="fa-regular fa-arrow-up-right fa-beat-fade"></i></button>
                        </div>

                    </div>

                </div>
            </div>
  )
}

export default Reviews