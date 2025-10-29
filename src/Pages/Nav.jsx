import styled, { useTheme } from 'styled-components';
import logo from '../images/logo.webp';
import './Nav.css';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showWWSMenu, setShowWWSMenu] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const onNavClick = () => {
    setNavOpen(!navOpen);
    if (navOpen) {
      $('#overlay').hide();
      $('.lines-button').removeClass('close');
    } else {
      $('#overlay').show();
      $('.lines-button').addClass('close');
    }
  };

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 1200);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowProductsMenu(false);
    setNavOpen(false);
    $('#overlay').hide();
    $('.lines-button').removeClass('close');
  }, [navigate]);

  const toggleProductsMenu = () => {
    setShowWWSMenu(false);
    setShowProductsMenu((prev) => !prev);
  };

  const toggleWWSMenu = () => {
    setShowProductsMenu(false);
    setShowWWSMenu((prev) => !prev);
  };

  return isMobile ? (
    <NavBarMobile>
      <img
        alt="logo"
        src={logo}
        style={{ height: '60px', marginLeft: 10, marginTop: -0.5, cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />
      <button className="lines-button lines" onClick={() => onNavClick()}>
        <span></span>
      </button>
      {navOpen ? (
        <Container>
          <Column>
            <div
              style={{
                display: 'flex',
                backgroundColor: theme.colors.white,
                width: '99.1vw',
                justifyContent: 'right',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <NavText onClick={() => navigate('/')}>Home</NavText>
              <NavText onClick={() => navigate('/pricing')}>Pricing</NavText>
              <NavText onClick={() => navigate('/security-and-integrations')}>Security</NavText>
              <NavText onClick={() => navigate('/security-and-integrations')}>
                AI Innovative Consulting
              </NavText>
              <NavText onClick={() => navigate('/resources')}>Resources</NavText>
              <NavText onClick={() => navigate('/about')}>About</NavText>
              <NavText onClick={() => navigate('/contact')}>Contact</NavText>
              {/* <NavButton onClick={handleEmailClick}>Book a Consulting Call</NavButton> */}
            </div>
          </Column>
        </Container>
      ) : (
        <></>
      )}
    </NavBarMobile>
  ) : (
    <NavBar>
      <LogoImg onClick={() => navigate('/')} src={logo} alt="logo" />
      <NavButtonCont>
        <NavText onClick={() => navigate('/')}>Home</NavText>
        <NavText onClick={() => navigate('/pricing')}>Pricing</NavText>
        <NavText onClick={() => navigate('/security-and-integrations')}>Security</NavText>
        <NavText onClick={() => navigate('/security-and-integrations')}>
          AI Innovative Consulting
        </NavText>
        <NavText onClick={() => navigate('/resources')}>Resources</NavText>
        <NavText onClick={() => navigate('/about')}>About</NavText>
        <NavText onClick={() => navigate('/contact')}>Contact</NavText>
      </NavButtonCont>
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1999;
`;

const Row = styled.div`
  display: flex;
`;

const LogoImg = styled.img`
  height: 70px;
  margin: auto auto auto 20px;
  cursor: pointer;
`;

const NavButtonCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin: auto 20px auto auto;
`;

const NavText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
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
`;

const NavBarMobile = styled.header`
  position: fixed; /* sits on top */
  top: 0;
  left: 0;
  width: 100%;
  height: 80px; /* actual height */
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  z-index: 9999; /* stays above other elements */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow */
`;

const Container = styled.div`
  position: absolute;
  top: 80px;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.white};
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
