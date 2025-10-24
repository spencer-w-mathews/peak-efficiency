import styled from "styled-components";
import logo from '../images/logo.png'
import './Nav.css'
import { useEffect, useState } from "react";
import $ from 'jquery'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faObjectGroup } from '@fortawesome/free-regular-svg-icons'
import { faHeartCircleCheck, faMugHot, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showWWSMenu, setShowWWSMenu] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    window.scrollTo(0,0)
    setShowProductsMenu(false)
    setNavOpen(false)
    $('#overlay').hide();
    $('.lines-button').removeClass('close');
  }, [navigate]);

  const toggleProductsMenu = () => {
    setShowWWSMenu(false)
    setShowProductsMenu(prev => !prev);
  };

  const toggleWWSMenu = () => {
    setShowProductsMenu(false)
    setShowWWSMenu(prev => !prev);
  };

  return (
    isMobile ?
      <NavBarMobile>
        <img  alt='logo' src={logo} style={{ height: '60px', marginLeft: 10, marginTop: -.5, cursor: 'pointer'}} onClick={() => navigate('/')}/>
        <button className="lines-button lines" onClick={()=> onNavClick()} >
          <span></span>
        </button>
        {navOpen ? 
            <Container>
                <Column>
                  <div style={{display: 'flex', backgroundColor: '#fff', width: '99.1vw', justifyContent: 'right', flexDirection: 'column',textAlign: 'center'}}>
                    <NavText onClick={() => navigate('/')}>Home</NavText>
                    {/* PRODUCTS + SUBMENU */}
                    <NavText onClick={toggleProductsMenu}>Products ▾</NavText>
                    {showProductsMenu && (
                      <SubMenu>
                        <Row>
                          <FontAwesomeIcon icon={faEnvelope} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                          <SubItem onClick={() => navigate('/products/email-filter-sorter')}>Email Filter & Sorter</SubItem>
                        </Row>
                        <Row>
                          <FontAwesomeIcon icon={faMugHot} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                          <SubItem onClick={() => navigate('/products/morning-brief')}>Morning Brief</SubItem>
                        </Row>
                        <Row>
                          <FontAwesomeIcon icon={faObjectGroup} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                          <SubItem onClick={() => navigate('/products/command-board')}>Command Board</SubItem>
                        </Row>
                      </SubMenu>
                    )}
                    {/* PRODUCTS + SUBMENU */}
                    <NavText onClick={toggleWWSMenu}>Who We Serve ▾</NavText>
                    {showWWSMenu && (
                      <SubMenu>
                        <Row>
                          <FontAwesomeIcon icon={faScaleBalanced} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                          <SubItem onClick={() => navigate('/Who-We-Serve/lawyers')}>Lawyers</SubItem>
                        </Row>
                        <Row>
                          <FontAwesomeIcon icon={faHeartCircleCheck} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                          <SubItem onClick={() => navigate('/Who-We-Serve/health-care')}>Health Care</SubItem>
                        </Row>
                        <Row>
                          <FontAwesomeIcon icon={faHome} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                          <SubItem onClick={() => navigate('/Who-We-Serve/real-estate')}>Real Estate</SubItem>
                        </Row>
                      </SubMenu>
                    )}
                    <NavText onClick={() => navigate("/security-and-integrations")}>Security & Integrations</NavText>
                    <NavText onClick={() => navigate("/resources")}>Resources</NavText>
                    <NavText onClick={() => navigate("/about")}>About</NavText>
                    <NavText onClick={() => navigate("/contact")}>Contact</NavText>
                  {/* <NavButton onClick={handleEmailClick}>Book a Consulting Call</NavButton> */}
                  </div>
                </Column>
            </Container>
            : 
            <></>
          }
      </NavBarMobile>
      :
      (
    <NavBar>
     <LogoImg  onClick={() => navigate('/')} src={logo} alt="logo"/>
     <NavButtonCont>
        <NavText onClick={() => navigate('/')}>Home</NavText>
        {/* PRODUCTS + SUBMENU */}
          <NavText
            onClick={toggleProductsMenu}
            style={{ position: "relative" }}
          >
            Products ▾
            {showProductsMenu && (
              <SubMenuDesktop>
                  <Row>
                    <FontAwesomeIcon icon={faEnvelope} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                    <SubItem onClick={() => navigate('/products/email-filter-sorter')}>Email Filter & Sorter</SubItem>
                  </Row>
                  <Row>
                    <FontAwesomeIcon icon={faMugHot} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                    <SubItem onClick={() => navigate('/products/morning-brief')}>Morning Brief</SubItem>
                  </Row>
                  <Row>
                    <FontAwesomeIcon icon={faObjectGroup} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                    <SubItem onClick={() => navigate('/products/command-board')}>Command Board</SubItem>
                  </Row>
              </SubMenuDesktop>
            )}
          </NavText>
        {/* PRODUCTS + SUBMENU */}
          <NavText
            onClick={toggleWWSMenu}
            style={{ position: "relative" }}
          >
            Who We Serve ▾
            {showWWSMenu && (
              <SubMenuDesktop>
                  <Row>
                    <FontAwesomeIcon icon={faScaleBalanced} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                    <SubItem onClick={() => navigate('/Who-We-Serve/lawyers')}>Lawyers</SubItem>
                  </Row>
                  <Row>
                    <FontAwesomeIcon icon={faHeartCircleCheck} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                    <SubItem onClick={() => navigate('/Who-We-Serve/health-care')}>Health Care</SubItem>
                  </Row>
                  <Row>
                    <FontAwesomeIcon icon={faHome} color='#234261' size='sm' style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                    <SubItem onClick={() => navigate('/Who-We-Serve/real-estate')}>Real Estate</SubItem>
                  </Row>
              </SubMenuDesktop>
            )}
          </NavText>
        <NavText onClick={() => navigate("/security-and-integrations")}>Security & Integrations</NavText>
        <NavText onClick={() => navigate("/resources")}>Resources</NavText>
        <NavText onClick={() => navigate("/about")}>About</NavText>
        <NavText onClick={() => navigate("/contact")}>Contact</NavText>
        
     </NavButtonCont>
    </NavBar>
      )
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
  z-index: 1999;
  display: flex;
`
const Row = styled.div`
  display: flex;
`

const LogoImg = styled.img`
  height: 70px;
  margin: auto auto auto 20px;
  cursor: pointer;
`

const NavButtonCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin: auto 20px auto auto;

`

const NavText = styled.div`
  color: #234261;
  font-weight: 500;
  margin-top: auto;
  width: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: auto;
  cursor: pointer;
  @media (max-width: 768px) {
     font-size: 20px;
     text-align: left;
     padding-left: 30px;
     margin-bottom: 30px;
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
    top: 80px;
    z-index: 5;
    background-color: #fff;
    width: 40vw;
    height: fit-content;
    padding-bottom: 25px;
    left: 0px;
    width: 100vw;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
    padding-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
`;


const Column = styled.div`
    display: flex;
    flex-direction: column;

`;


const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: -20px 0 10px 45px;
`;

const SubMenuDesktop = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  border-radius: 8px;
  padding: 10px;
  min-width: 200px;
  z-index: 1000;
`;

const SubItem = styled.div`
  color: #234261;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: #f2f2f2;
  }
`;