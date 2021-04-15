import React, { useState, useEffect } from 'react'
import './Home.css'
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
import { useRefContext } from '../lib/context'

const Icons = () => {
    return (
        <div className="icons">
            <div style={{paddingBottom: 10}}>
                <a href="https://www.linkedin.com/in/akashchekka/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="color mob"/>
                </a>
            </div>
            <div style={{paddingBottom: 10}}>
                <a href="https://github.com/Akash76" target="_blank" rel="noopener noreferrer">
                    <Github className="color mob"/>
                </a>             
            </div>
            <div style={{paddingBottom: 10}}>
                <a href="https://www.instagram.com/133_akash/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="color mob"/>               
                </a>
            </div>
            <div>
                <a href="https://twitter.com/AkashChekka" target="_blank" rel="noopener noreferrer">
                    <Twitter className="color mob"/>               
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
                <h3 className="color">Hi, This is Akash!</h3>
                <p className="big">I'm a Full Stack Developer</p>
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
                <p>I am a self learned developer having ... 2+ years experience in IT industry and more than 3 years technical experience. I have started my professional career with blockchain technology mostly worked on hyperledger fabric and hyperledger sawtooth frameworks. I have done many projects on top of hyperledger fabric which includes chaincode development, creating fabric networks, API development for interacting with fabric network. Apart from that I have done project on sensor data storage system using hyperledger sawtooth. In TCS I have been an active member of mobile security team where we do security assessments for various API, web and mobile applications. As a part of that I worked with serverless API security and web application security thereby providing the best recommendations. I developed a MERN application to store and track vulnerability assessment data. My areas of interest include blockchain, cyber security, cloud and web development</p>
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
            </div>
        </div>
    )
}

const Blogs = () => {
    return (
        <div className="Blogs">
            <h3 style={{fontSize: 50, textAlign: 'center'}}>My Works!!!</h3>
            <div className="blog-cards">
                <a href="https://akash76.github.io/hfl-data-extraction/" style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                    <Card style={{ width: '18rem', height: '23rem'}} className="blog-card suffice">
                        <Card.Img variant="top" style={{height: 180, padding: 5, borderRadius: 10}} src={Dockerps} />
                        <Card.Body>
                            <Card.Title>Ledger Data Extraction in Hyperledger Fabric</Card.Title>
                            <Card.Text>
                                Showing how one can extract data in Hyperledger Fabric without being network participant!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a >
                    
                <a href="https://akash76.github.io/hlfgql/" style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                    <Card style={{ width: '18rem', height: '23rem'}} className="blog-card suffice">
                        <Card.Img variant="top" style={{height: 180, padding: 5, borderRadius: 10}} src={Query} />
                        <Card.Body>
                            <Card.Title>Ultra Rich Queries on Hyperledger Fabric using GraphQL</Card.Title>
                            <Card.Text>
                                Implementing GraphQL Queries and Mutations on Hyperledger Fabric
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a >

                <a href="https://www.skcript.com/svr/hyperledger-fabric-disaster-recovery-methods/" style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                    <Card style={{ width: '18rem', height: '23rem'}} className="blog-card suffice">
                        <Card.Img variant="top" style={{height: 180, padding: 5, borderRadius: 10}} src={Hfdrm} />
                        <Card.Body>
                            <Card.Title>Hyperledger Fabric Disaster Recovery Methods</Card.Title>
                            <Card.Text>
                                Ledger backup mechanism on hyperledger fabric
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a >

            </div>
        </div>
    )
}

const Contact = () => {
    const { contactRef } = useRefContext()
    const [isLoading, setIsLoading] = useState(false)
    const [fields, handleFieldChange, reset] = useFormFields({
        name: "",
        email: "",
        message: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        console.log(fields)
        setIsLoading(false)
        reset()
    }
    return (
        <div className="Contact" ref={contactRef}>
            <div className="card formcard">
                <h3 className="head" style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 50}}>Connect with me</h3>  
                <Form onSubmit={handleSubmit}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}} className="mob3">
                        <Form.Group size="lg" controlId="name">
                            <Form.Control
                            // autoFocus
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

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    return (
        <div className="Home">
            <Face />
            <About />
            <Tech />
            <Blogs />
            <Contact />
        </div>
    )
}

export default Home