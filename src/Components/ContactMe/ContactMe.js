import React from 'react';
import './ContactMe.css';
import phone from '../../Images/phone.png'
import pin from '../../Images/pin (1).png'
import mail from '../../Images/gmail.png'
import ContactBox from './ContactBox/ContactBox';
import emailjs from 'emailjs-com';


const contactInfo=[
    {
        title: 'Address',
        detail: 'Dakkhinkhan, Uttara, Dhaka',
        icon: pin
    },
    {
        title: 'Call',
        detail: '+8801624874209',
        icon: phone
    },
    {
        title: 'Email',
        detail: 'samssjubair@gmail.com',
        icon: mail
    }
]

const ContactMe = () => {
    const sendEmail=(e)=>{
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('service_zv2e5ie', 'template_portfolio', e.target, 'user_BRbBMhU7EzvCNwfLmhtui')
        .then((result) => {
            console.log(e.target);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div id="contact" className="text-center mt-5 p-5">
            <div className="mb-5 text-light">
                <h1>Want to know more?</h1>
                
            </div>
            <div className="row">
                <div data-aos="fade-right"  className="col-md-4 my-5">
                    {
                        contactInfo.map(info=> <ContactBox info={info}></ContactBox> )
                    }
                </div>
                <div className="my-5 col-md-8 mx-auto">
                <h2 className="mb-5 text-danger"> <small style={{fontWeight: '300'}} className="text-white">Or</small> Email Me</h2>
                    <form data-aos="fade-up" onSubmit={sendEmail}>
                        <div className="row d-flex">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <input placeholder="Name" type="text" name="name" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input placeholder="Your Email" type="email" name="email" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input placeholder="Subject" type="text" name="subject" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-5">
                                    <textarea cols="30" rows="5.5" name="message" placeholder="message" type="text" className="form-control"/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="form-group text-center ">
                            <button className="btn btn-outline-danger px-4" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr style={{color: 'white',marginTop: '50px'}}/>
        </div>
    );
};

export default ContactMe;