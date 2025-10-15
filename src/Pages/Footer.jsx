import styled from "styled-components";
import logo from '../images/logo.png';

function Footer() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FooterSection>
      <img  alt='logo' src={logo} style={{ height: '60px', marginLeft: 10, marginTop: 25, borderRadius: 5, boxShadow: '0px 0px 30px 15px rgba(0, 0, 0, 0.2)'}}/>
      <HeaderSubText>
        Peak Efficiency - Helping leaders lead again through clarity, focus, and automation.
      </HeaderSubText>
      <NavButtonCont>
        <NavText onClick={() => scrollToSection("hero")}>Home</NavText>
        <NavText onClick={() => scrollToSection("products")}>Products</NavText>
        <NavText onClick={() => scrollToSection("services")}>Services</NavText>
        <NavText onClick={() => scrollToSection("about")}>About</NavText>
        <NavText onClick={() => scrollToSection("contact")}>Contact</NavText>
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