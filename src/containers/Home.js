import React, { useState, useEffect } from 'react'
import './Home.css'
import './Home-mob.css'
import { useForm } from 'react-hook-form';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import LoaderButton from '../components/LoaderButton'
import { Linkedin, Github, Instagram, Twitter } from 'react-bootstrap-icons'
import { useFormFields } from '../lib/hooksLib'
import Jumbotron from '../bg.webp'
import Dockerps from '../docker-ps.webp'
import Query from '../query.webp'
import Hfdrm from '../hfdrm.webp'
import Tetrad from '../tetrad.webp'
import Fabric from '../fabric.webp'
import { useRefContext } from '../lib/context'
import SnackBar from '../components/SnackBar'

const Icons = () => {
    return (
        <div className="icons">
            <div style={{paddingBottom: 10}}>
                <a href="https://www.linkedin.com/in/akashchekka/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="color"/>
                </a>
            </div>
            <div style={{paddingBottom: 10}}>
                <a href="https://github.com/Akash76" target="_blank" rel="noopener noreferrer">
                    <Github className="color"/>
                </a>             
            </div>
            <div style={{paddingBottom: 10}}>
                <a href="https://www.instagram.com/133_akash/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="color"/>               
                </a>
            </div>
            <div>
                <a href="https://twitter.com/AkashChekka" target="_blank" rel="noopener noreferrer">
                    <Twitter className="color"/>               
                </a>
            </div>
        </div>
    )
}

const Face = () => {
    const { homeRef, contactScroll, aboutScroll } = useRefContext()
    return (
        <div className="Face" ref={homeRef}>
            <Icons />
            <div style={{alignSelf: 'center'}} className="mob1">
                <p className="color big">Hi, This is Akash!</p>
                <p>I'm a self learned developer having good experience in numerous cutting edge technologies which includes Blockchain, Serverless, Cloud, GraphQL, Web development and Application security</p>
                <Button onClick={aboutScroll}>Know me</Button>
                <Button variant="success" style={{marginLeft: 20}} onClick={() => {contactScroll()}}>Hire me</Button>
            </div>
            <Image className="image" src={Jumbotron}/>
        </div>
    )
}

const About = () => {
    const { aboutRef } = useRefContext()
    return (
        <div className="About" ref={aboutRef}>
            <h3 className="big" style={{alignSelf: 'center'}}>About Akash</h3>
            <div className="content" style={{alignSelf: 'center'}}>
                <p>With an extensive IT industry experience for over 2 years and technical experience for over 3 years, I am proficient in variable digital technologies. While I started my professional career experimenting Blockchain technology, I mostly worked on hyperledger fabric and hyperledger sawtooth frameworks. I've done many projects in compliance with hyperledger fabric that include chaincode development, creating fabric networks, API development for interacting with fabric network. Alongside, I did a project on sensor data storage system using hyperledger sawtooth. I am an active member of mobile security team in TCS where we conduct security assessments for various API, web and mobile applications. I've done my fair share in working with serverless API security and web application security thereby providing the best recommendations for identified vulnerabilities. Apart from that, I developed a MERN application to store and track vulnerability assessment data.</p>
                <p>Contact me to know more about my work!</p>
            </div>
        </div>
    )
}

const Tech = () => {
    return (
        <div className="Tech">
            <h3 style={{fontSize: 50, textAlign: 'center'}}>Tech Stack</h3>  
            <div className="cards">
                <Card style={{ width: '18rem', height: '23rem' }} className="suffice">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Programming Languages</Card.Title>
                        <Card.Text as="div">
                            <p>C</p>
                            <p>C++</p>
                            <p>Node.js</p>
                            <p>Golang</p>
                            <p>Python</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: '23rem' }}>
                    <Card.Body>
                        <Card.Title>Technologies/Frameworks</Card.Title>
                        <Card.Text as="div">
                            <p>Hyperledger Fabric</p>
                            <p>AWS</p>
                            <p>Docker</p>
                            <p>React</p>
                            <p>React Native</p>
                            <p>GraphQL</p>
                            <p>Serverless</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: '23rem' }}>
                    <Card.Body>
                        <Card.Title>Tools</Card.Title>
                        <Card.Text as="div">
                            <p>Kali Linux</p>
                            <p>Burpsuite</p>
                            <p>Postman</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

const Work = ({link, title, text, img}) => {
    return (
            <Card style={{ width: '18rem', height: '23rem', marginTop: 10}} className="work-card suffice">
                <a href={link} style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" className="card-img" src={img} />
                </a >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}

const Works = () => {
    return (
        <div className="Works">
            <h3 style={{fontSize: 50, textAlign: 'center'}}>My Works!!!</h3>
            <div className="work-cards">
                <Work
                    link="https://akash76.github.io/hfl-data-extraction/"
                    title="Ledger Data Extraction in Hyperledger Fabric"
                    text="Showing how one can extract data in Hyperledger Fabric without being network participant!"
                    img={Dockerps}
                />

                <Work
                    link="https://akash76.github.io/hlfgql/"
                    title="Ultra Rich Queries on Hyperledger Fabric using GraphQL"
                    text="Implementing GraphQL Queries and Mutations on Hyperledger Fabric"
                    img={Query}
                />

                <Work
                    link="https://www.skcript.com/svr/hyperledger-fabric-disaster-recovery-methods/"
                    title="Hyperledger Fabric Disaster Recovery Methods"
                    text="Ledger backup mechanism on hyperledger fabric"
                    img={Hfdrm}
                />

                <Work
                    link="https://github.com/Akash76/Axess"
                    title="Axess"
                    text="File transfer system on Hyperledger Fabric using IPFS"
                    img={Fabric}
                />

                <Work
                    link="https://tetradsquare.herokuapp.com/"
                    title="Magic Squares generator"
                    text="A web application which can generate all possible magic squares by giving date of birth"
                    img={Tetrad}
                />
            </div>
        </div>
    )
}

const Contact = () => {
    const { contactRef } = useRefContext()
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [fields, handleFieldChange, reset] = useFormFields({
        name: "",
        email: "",
        message: ""
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        var response = await fetch(process.env.REACT_APP_API, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Accept': 'application/json' },
            body: JSON.stringify(fields)
        })
        console.log(await response.json())
        setIsLoading(false)
        setOpen(true)
        reset()
    }
    return (
        <div className="Contact" ref={contactRef}>
            <div className="card formcard">
                <h3 className="head" style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 50}}>Connect with me</h3>  
                <Form onSubmit={onSubmit}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}} className="mob3">
                        <Form.Group size="lg" controlId="name">
                            <Form.Control
                            type="text"
                            value={fields.name}
                            placeholder="Name"
                            style={{ backgroundColor: 'inherit' }}
                            className="textarea"
                            onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="email">
                            <Form.Control
                            type="text"
                            value={fields.email}
                            placeholder="Email"
                            style={{ backgroundColor: 'inherit' }}
                            className="textarea"
                            onChange={handleFieldChange}
                            />
                        </Form.Group>
                    </div>
                    <Form.Group controlId="message">
                        <Form.Control
                        type="text"
                        value={fields.message}
                        placeholder="Message"
                        style={{height: 100, backgroundColor: 'inherit'}}
                        className="textarea"
                        onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <LoaderButton
                        block
                        size="lg"
                        type="submit"
                        isLoading={isLoading}
                        disabled={false}
                    >
                        Submit
                    </LoaderButton>
                </Form>
            </div>
            <SnackBar open={open} message={'Thank you for message. Will get back to you soon!'} severity={'success'} handleClose={handleClose} />
            <div className="details">
                <div>
                    <p>Akash Chekka</p>
                    <p>+91 - (765)992-3589</p>
                    <p>chekkaakash@protonmail.com</p>
                </div>
                <div><Icons /></div>
            </div>
        </div>
    )
}

function Home() {
    return (
        <div className="Home">
            <Face />
            <About />
            <Tech />
            <Works />
            <Contact />
        </div>
    )
}

export default Home
