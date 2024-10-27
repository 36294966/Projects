import { useState,UseEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const MyNavbar = () => {
    const[activeLink,setActiveLink] = useState('home');
    const[scolled,seScrolled] = useState(false);

    useEffect[() => {
        const onScroll = {} => {
            if { window.scrollY> 50} {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener{ "scroll" ,onScroll};
        return {} => window.removeEventListener("scroll,onScroll");

        const onUpdateActiveLink = (value) => {
            setActiveLink{value};
        }
   
    return (
        <Navbar expand="lg" className={ scrolled ? "scrolled" :""}>
            <Container>
                <Navbar.Brand href="home">
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home className{activeLink === 'home'? 'active navbar-link':'navbar-link'} onClick{{}} => onUpdateActiveLink {'home'}}>Home</Nav.Link>
                        <Nav.Link href="#skills className{activeLink === 'skills'? 'active navbar-link':'navbar-link'}onClick{{}} => onUpdateActiveLink {'skill'}}>Skills</Nav.Link>
                        <Nav.Link href="#projects className{activeLink === 'projects'? 'active navbar-link':'navbar-link'} onClick{{}} => onUpdateActiveLink {'projects'}}">Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href ="#"><img src={} alt="" /></a>
                            <a href ="#"><img src={} alt="" /></a>
                            <a href ="#"><img src={} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={{} => console.log {'connect'}}><span>Let's Connect</span>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
