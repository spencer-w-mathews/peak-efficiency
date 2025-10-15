import styled from "styled-components";
import logo from '../images/logo.png'
import './Nav.css'
import { useEffect, useState } from "react";
import $ from 'jquery'

function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const onNavClick = () => {
    setNavOpen(!navOpen)
    if(navOpen){
    $('#overlay').hide();
    $('.lines-button').removeClass('close');
    }else{
      $('#overlay').show();
          $('.lines-button').addClass('close');
    }
  }

  function handleWindowSizeChange() {
      setIsMobile(window.innerWidth  <= 1200);
  }

  useEffect(() => {
    window.scrollTo(0,0)
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    isMobile && onNavClick()
  };

  return (
    isMobile ?
      <NavBarMobile>
              <img  alt='logo' src={logo} style={{ height: '60px', marginLeft: 10, marginTop: -.5}}/>
          <button className="lines-button lines" onClick={()=> onNavClick()} >
              <span></span>
            </button>
            {navOpen ? 
                    <Container>
                        <Column>
                          <div style={{display: 'flex', backgroundColor: '#fff', width: '99.1vw', justifyContent: 'right', flexDirection: 'column',textAlign: 'center'}}>
                            <img src={logo} alt='logo' style={{ margin: '40px auto 40px auto', width: '60vw'}} />
                            <NavText onClick={() => scrollToSection("hero")}>Home</NavText>
                            <NavText onClick={() => scrollToSection("products")}>Products</NavText>
                            <NavText onClick={() => scrollToSection("services")}>Services</NavText>
                            <NavText onClick={() => scrollToSection("about")}>About</NavText>
                            <NavText onClick={() => scrollToSection("contact")}>Contact</NavText>
                            <NavButton>Book Consulting Call</NavButton>
                          </div>
                        </Column>
                    </Container>
                    : <></>}
      </NavBarMobile>
      :
    <NavBar>
     <LogoImg src={logo} alt="logo"/>
     <NavButtonCont>
        <NavText onClick={() => scrollToSection("hero")}>Home</NavText>
        <NavText onClick={() => scrollToSection("products")}>Products</NavText>
        <NavText onClick={() => scrollToSection("services")}>Services</NavText>
        <NavText onClick={() => scrollToSection("about")}>About</NavText>
        <NavText onClick={() => scrollToSection("contact")}>Contact</NavText>
        <NavButton>Book Consulting Call</NavButton>
     </NavButtonCont>

    </NavBar>
  );
}

export default Nav;

const NavBar = styled.div`
  background-color: #ffffff;
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff; /* Or your desired background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow */
  z-index: 999;
  display: flex;

`

const LogoImg = styled.img`
  height: 70px;
  margin: auto auto auto 20px;
`

const NavButtonCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: auto 20px auto auto;

`

const NavText = styled.div`
  color: #234261;
  font-weight: 500;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  @media (max-width: 768px) {
     font-size: 22px;
     text-align: left;
     padding-left: 30px;
     margin-bottom: 40px;
  }
  
`

const NavButton = styled.button`
  background-color: #2E734C;
  color: #ffffff;
  font-weight: 500;
  height: 40px;
  border: 0px;
  border-radius: 10px;
  padding: 0px 15px;
  cursor: pointer;
  @media (max-width: 768px) {
     font-size: 22px;
     margin-top: 0px;
     width: 90%;
     height: fit-content;
     padding: 15px 15px;
     margin-left: auto;
     margin-right: auto;

  }

`



const NavBarMobile = styled.header`
  position: fixed; /* sits on top */
  top: 0;
  left: 0;
  width: 100%;
  height: 80px; /* actual height */
  background-color: #fff;
  display: flex;
  align-items: center;
  z-index: 9999; /* stays above other elements */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow */
`;


const Container = styled.div`
    position: absolute;
    left: 60%;
    top: 0px;
    z-index: 5;
    background-color: #fff;
    width: 40vw;
    height: fit-content;
    padding-bottom: 25px;
    left: 0px;
    width: 100vw;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
`;


const Column = styled.div`
    display: flex;
    flex-direction: column;

`;