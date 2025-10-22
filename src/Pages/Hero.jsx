import styled from "styled-components";
import heroImage from '../images/heroBackground.png';

function Hero() {

  const recipient = 'chris@peakefficiency.ai';
  const subject = 'Peak Efficiency Consult Call';
  const body = 'Hello, I would like to schedule a consult call.';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  return (
    <HeroSection>
     <Header>Work smarter. Reclaim your time.</Header>
     <HeaderSubText>Peak Efficiency helps leaders cut through digital chaos — giving back clarity, focus, and control so every day starts with purpose, not distraction.</HeaderSubText>
     <DemoButton
      onClick={handleEmailClick}
    >
      Book a Consulting Call
    </DemoButton>
    </HeroSection>
  );
}

export default Hero;

const HeroSection = styled.section`
  background-image: url(${heroImage}); /* Replace with your image path */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 90%;
  height: fit-content;
  
  padding: 20px 0px 180px; 
  @media (max-width: 768px) {
    background-position: bottom center;
    padding: 20px 5px 180px;
  }
`

const Header = styled.h1`
  color: #ffffff;
  font-size: 70px;
  font-weight: 600;
  padding: 0px 100px 0px;
  @media (max-width: 768px) {
    padding: 0px 5px;
    font-size: 50px;
    line-height:  1;
    margin-bottom: 5px;
  }
`

const HeaderSubText = styled.p`
  color: #e0dfdfff;
  font-size: 24px;
  padding: 0px 170px 20px;
  @media (max-width: 768px) {
        padding: 0px 30px;
        font-size: 20px;
      }
`

const DemoButton = styled.button`
  background-color: #2E734C;
  color: #ffffff;
  font-weight: 500;
  height: 40px;
  border: 0px;
  border-radius: 10px;
  padding: 0px 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: fit-content;
    padding: 15px 60px;
    font-size: 18px;
    margin-top: 25px;
  }

`
