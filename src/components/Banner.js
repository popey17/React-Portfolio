import { useEffect, useState } from 'react';
import {Container, Row, Col }  from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg"
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "FullStack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100-Math.random()*100);
    const period = 1000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return()=>{clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        // console.log(i);
        let fullText = toRotate[i];
        let upadatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1);

        setText(upadatedText);

        if (isDeleting)  setDelta(prevDelta => prevDelta / 2 )

        if (!isDeleting && upadatedText===fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && upadatedText==="") {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            // console.log("loop Num:" +loopNum);
            setDelta(500);
        }
    }

    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible })=>
                            <div className={isVisible? 'animate__animated animate__fadeIn':''}>
                                <span className="tagline">
                                    Welcome to my portfolio
                                </span>
                                <h1>
                                    {`Hi I'm Popey`}<br/><span className="warp">A {text}</span>
                                </h1>
                                <p>Welcome to my portfolio! I am a passionate and experienced developer with a love for creating beautiful, efficient, and scalable solutions. My expertise spans across multiple programming languages, frameworks, and platforms, and I am constantly seeking out new challenges to expand my skillset. With a strong background in problem-solving and a dedication to delivering high-quality work, I am confident in my ability to bring value to any project I work on. Let's work together to turn your ideas into reality!</p>
                                <button onClick={()=>console.log("connect") }>Let's connect <ArrowRightCircle size={25}/> </button>

                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Banner;