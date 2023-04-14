import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);


    const onFormUpdate = (category , value)=> {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }



    return ( 
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form action="https://formspree.io/f/mqkognzg" method="POST">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input name="firstName" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input name="lastName" type="text" value={formDetails.lastName} placeholder="last Name" onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>    
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input name="email" type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input name="phone" type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e)=>onFormUpdate('phone',e.target.value)}/>    
                                </Col>
                                <Col>
                                    <textarea name="message"  rows="6"  value={formDetails.message} placeholder="Message Here." onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                                    <button type="submit"><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Contact;