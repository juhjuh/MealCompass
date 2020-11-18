import React from 'react';
import emailjs from 'emailjs-com';

// import './ContactUs.css';

/*
This file is currently not in use.

But, EmailJS is a great platform that I plan on using in the future for easy serverless emailing with javascript.

*/


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_dso551l', 'template_chy389o', e.target, 'user_g9MbhW8xlqyeXDV75pDkf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

    }





    
    return (
        <div>




            {/*  */}


            <section className="section is-paddingless-horizontal">
                <div className="container grid">

                    <form className="form-horizontal contact-form" onSubmit={sendEmail} >
                        <fieldset>
                            {/* 
                    <!-- Form Name --> */}
                            <legend>Let's Connect.</legend>

                            {/* <!-- Name--> */}
                            <div className="field">
                                {/* <label className="label" for="textinput-1">Name</label> */}
                                <div className="control has-icons-left has-icons-right">
                                    <input id="textinput-1" name="name" type="text" placeholder="Your name -- John Doe" className="input " />
                                    {/* <p className="help">help</p> */}
                                </div>
                            </div>


                            {/* <!-- Email--> */}
                            <div className="field">
                                {/* <label className="label" for="textinput-3">Email</label> */}
                                <div className="control has-icons-left has-icons-right">
                                    <input id="textinput-3" name="email" type="text" placeholder="Your email -- cheers@newbeginnings.us" className="input " />
                                    {/* <p className="help">help</p> */}
                                </div>
                            </div>

                            {/* <!-- Message --> */}
                            <div className="field">
                                {/* <label className="label" for="textarea-0">Message</label> */}
                                <div className="control">
                                    <textarea className="textarea" id="textarea-0" placeholder="Type your message here" name="message"></textarea>
                                </div>
                            </div>


                            {/* <!-- Button --> */}
                            <div className="field">
                                {/* <label className="label" for="singlebutton-0">Send</label> */}
                                <div className="control">
                                    <button id="singlebutton-0" name="singlebutton-0" class="button is-success">Send</button>
                                </div>
                            </div>

                        </fieldset>
                    </form>
                </div>
            </section>

        </div>
    );
}



// export default ContactUs