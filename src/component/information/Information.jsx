import React from 'react'
import Information from './Information.module.css'

export default function Informations() {
    return (
        <div>
            <section className={Information.page}>
                <div className="container pt-5">
                    <h2 className={Information.h2}>CONTACT ME</h2>

                    <div className="icons pb-4 text-center">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-8 mx-auto">
                            <form action="">
                                <div className="control-group">
                                    <form className="floating-label-form-group controls mb-0 pb-2">
                                        <input type="text" className={Information.formControl} name="name" id="name" placeholder='Name' />
                                    </form>
                                </div>
                                <div className="control-group">
                                    <form className="floating-label-form-group controls mb-0 pb-2">
                                        <input type="text" className={Information.formControl} name="name" id="email" placeholder='E-mail Address' />
                                    </form>
                                </div>
                                <div className="control-group">
                                    <form className="floating-label-form-group controls mb-0 pb-2">
                                        <input type="number" className={Information.formControl} name="name" id="number" placeholder='Phone Number' />
                                    </form>
                                </div>
                                <div className="control-group">
                                    <form className="floating-label-form-group controls mb-0 pb-2">
                                        <input type="text" className={Information.formControl} name="name" id="message" placeholder='Message' />
                                    </form>
                                </div>

                                <br />

                                {/* <button className={Information.btn}>Send</button> */}
                                <a className={Information.a} href="#">
                                    <span className={Information.span}></span>
                                    <span className={Information.span}></span>
                                    <span className={Information.span}></span>
                                    <span className={Information.span}></span>
                                    Submit
                                </a>
                            </form>
                        </div>
                    </div>


                </div>
            </section>

            <footer className={Information.box}>
            <div className="container">
                <div className="row d-flex flex-wrap">
                    <div className="col-lg-4 mb-lg-0 mb-5">
                        <h4 className='mb-4'>LOCATION</h4>
                        <p className={Information.lead}>2215 John Daniel Drive
                        <br />
                        <span>Clark, MO 65243</span>
                        </p>
                        

                        
                    </div>
                    <div className="col-lg-4 mb-lg-0 mb-5">
                        <h4 className='mb-4'>AROUND THE WEB</h4>
                        <a className="btn btn-outline-light mx-1 btn-social" href="#!"><i className="fab fa-fw fa-facebook-f "></i></a>
                        <a className="btn btn-outline-light  mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light  mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light  mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                        

                        
                    </div>
                    <div className="col-lg-4 mb-lg-0 mb-5">
                        <h4 className='mb-4'>About Freelancer</h4>
                        <p className='fs-5 w-75 mx-auto' >Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        
                        </p>
                        

                        
                    </div>
                    
                </div>

            </div>


            
        </footer>
        </div>
    )
}
