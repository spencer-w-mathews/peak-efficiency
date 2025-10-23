import styled from "styled-components";
import logo from '../images/logo.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faObjectGroup } from '@fortawesome/free-regular-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const navigate = useNavigate()
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const toggleProductsMenu = () => {
    setShowProductsMenu(prev => !prev);
  };


  return (
    <FooterSection>
      <img  alt='logo' src={logo} style={{ height: '60px', marginLeft: 10, marginTop: 25, borderRadius: 5, boxShadow: '0px 0px 30px 15px rgba(0, 0, 0, 0.2)'}}/>
      <HeaderSubText>
        Peak Efficiency - Helping leaders lead again through clarity, focus, and automation.
      </HeaderSubText>
      <NavButtonCont>
        <NavText onClick={() => navigate("/hero")}>Home</NavText>
        <NavItem>
          <NavText onClick={toggleProductsMenu}>Products ▾</NavText>
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
        </NavItem>
        <NavText onClick={() => navigate("/services")}>Services</NavText>
        <NavText onClick={() => navigate("/about")}>About</NavText>
        <NavText onClick={() => navigate("/contact")}>Contact</NavText>
      </NavButtonCont>
      <EandWText>Email: chris@peakefficiency.ai</EandWText>
      <EandWText>Website: www.peakefficiency.ai</EandWText>
      <Line></Line>
      <Cright>2025 Peak Efficiency | All Rights Reserved</Cright>
    </FooterSection>
  );
}

export default Footer;

const FooterSection = styled.section`
  background-color: #234261;
  height: fit-content;
  margin-top: -20px;
  padding-bottom: 40px;
`
const Row = styled.div`
  display: flex;
`

const HeaderSubText = styled.p`
  color: #ffffff;
  font-size: 24px;
  padding: 0px 170px 20px;
  @media (max-width: 768px) {
      padding: 0px 20px 20px;
  }
`

const NavButtonCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: auto auto auto auto;
  @media (max-width: 768px) {
     width: 90%;
     padding: 0px 10px;
  }
`

const NavText = styled.div`
  color: #ffffff;
  font-weight: 500;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  margin-bottom: 30px;
  @media (max-width: 768px) {
     font-size: 16px;
  }
  
`
const EandWText = styled.div`
  color: #ffffff;
  font-weight: 500;
  margin-top: auto;
  cursor: pointer;
  margin-bottom: 10px;
  @media (max-width: 768px) {
     font-size: 16px;
  }
  
`

const Line = styled.div`
  width: 90%;
  border: .5px solid #747477ff;
  margin: 30px auto;
`

const Cright = styled.div`
  color: #ffffff;
  font-weight: 500;
  margin-top: auto;
  margin-bottom: 0px;
  cursor: pointer;
  @media (max-width: 768px) {
     font-size: 16px;
  }
  
`

const NavItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubMenuDesktop = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateX(-50%);
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  border-radius: 8px;
  padding: 10px;
  min-width: 220px;
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