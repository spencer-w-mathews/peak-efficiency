import styled from 'styled-components';
import logo from '../images/logo.webp';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterSection>
      <img
        alt="logo"
        src={logo}
        style={{
          height: '60px',
          marginLeft: 10,
          marginTop: 25,
          borderRadius: 5,
          boxShadow: '0px 0px 30px 15px rgba(0, 0, 0, 0.2)',
        }}
      />
      <HeaderSubText>
        Peak Efficiency - Helping professionals lead again through clarity, focus, and automation.
      </HeaderSubText>
      <NavButtonCont>
        <NavText onClick={() => navigate('/hero')}>Home</NavText>
        <NavText onClick={() => navigate('/pricing')}>Pricing</NavText>
        <NavText onClick={() => navigate('/security')}>Security</NavText>
        <NavText onClick={() => navigate('/resources')}>Resources</NavText>
        <NavText onClick={() => navigate('/about')}>About</NavText>
        <NavText onClick={() => navigate('/contact')}>Contact</NavText>
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
  background-color: ${({ theme }) => theme.colors.primary};
  height: fit-content;
  margin-top: -20px;
  padding-bottom: 40px;
`;

const HeaderSubText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  padding: 0px 170px 20px;
  @media (max-width: 768px) {
    padding: 0px 20px 20px;
  }
`;

const NavButtonCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: auto auto auto auto;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 0px 10px;
  }
`;

const NavText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: -10px;
  }
`;
const EandWText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  margin-top: auto;
  cursor: pointer;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Line = styled.div`
  width: 90%;
  border: 0.5px solid #747477ff;
  margin: 30px auto;
`;

const Cright = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  margin-top: auto;
  margin-bottom: 0px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
