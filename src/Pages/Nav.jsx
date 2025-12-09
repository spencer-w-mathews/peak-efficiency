import styled, { useTheme } from 'styled-components';
import logo from '../images/logo.png';
import './Nav.css';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import { useLocation, useNavigate } from 'react-router-dom';

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const navigate = useNavigate();
  const location = useLocation();
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
    setNavOpen(false);
    $('#overlay').hide();
    $('.lines-button').removeClass('close');
  }, [navigate]);

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
              <NavText onClick={() => navigate('/security')}>Security</NavText>
              <NavText onClick={() => navigate('/security')}>AI Innovative Consulting</NavText>
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
      <NavContent>
        <BrandArea>
          <LogoImg onClick={() => navigate('/')} src={logo} alt="Blubird AGI logo" />
          <BrandMeta>
            <Tagline>Blubird AGI</Tagline>
            <SubText>Operational intelligence for modern teams</SubText>
          </BrandMeta>
        </BrandArea>
        <NavLinks>
          <NavLink active={location.pathname === '/'} onClick={() => navigate('/')}>Home</NavLink>
          <NavLink active={location.pathname === '/pricing'} onClick={() => navigate('/pricing')}>
            Pricing
          </NavLink>
          <NavLink active={location.pathname === '/security'} onClick={() => navigate('/security')}>
            Security
          </NavLink>
          <NavLink active={location.pathname === '/security'} onClick={() => navigate('/security')}>
            AI Innovative Consulting
          </NavLink>
          <NavLink active={location.pathname === '/resources'} onClick={() => navigate('/resources')}>
            Resources
          </NavLink>
          <NavLink active={location.pathname === '/about'} onClick={() => navigate('/about')}>
            About
          </NavLink>
          <NavLink active={location.pathname === '/contact'} onClick={() => navigate('/contact')}>
            Contact
          </NavLink>
        </NavLinks>
        <RightActions>
          <CtaButton onClick={() => navigate('/book')}>Book a call</CtaButton>
        </RightActions>
      </NavContent>
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 40px rgba(0, 26, 54, 0.08);
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate};
  z-index: 1999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
`;

const NavContent = styled.div`
  width: min(1300px, 96vw);
  padding: 0 16px;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  column-gap: 32px;
`;

const BrandArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BrandMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Tagline = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.3px;
`;

const SubText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const LogoImg = styled.img`
  height: 52px;
  cursor: pointer;
  transition: transform 180ms ease;

  &:hover {
    transform: translateY(-2px) scale(1.01);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const RightActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ active }) => (active ? 700 : 500)};
  padding: 12px 14px;
  cursor: pointer;
  border-radius: 14px;
  transition: color 160ms ease, background 160ms ease, box-shadow 160ms ease, transform 160ms ease;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 7px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transform-origin: left;
    transition: transform 180ms ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.deepBlue};
    background: ${({ theme }) => theme.colors.highlight};
    box-shadow: 0 10px 30px rgba(35, 66, 97, 0.08);
    transform: translateY(-1px);

    &::after {
      transform: scaleX(1);
    }
  }
`;

const CtaButton = styled.button`
  justify-self: end;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, #3abf7a);
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 12px 20px;
  font-weight: 700;
  letter-spacing: 0.2px;
  box-shadow: 0 10px 30px rgba(46, 115, 76, 0.2);
  cursor: pointer;
  transition: transform 150ms ease, box-shadow 150ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 38px rgba(46, 115, 76, 0.28);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 8px 24px rgba(46, 115, 76, 0.18);
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

const NavText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  padding: 16px 24px;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.deepBlue};
  }
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
