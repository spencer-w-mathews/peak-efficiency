import styled from 'styled-components';
import heroImage from '../images/heroBG.png';
import Button from '../Components/Button';
import { useEffect, useState } from 'react';

function Hero() {
  const recipient = 'chris@peakefficiency.ai';
  const subject = 'Peak Efficiency Consult Call';
  const body = 'Hello, I would like to schedule a consult call.';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const [fogVisible, setFogVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setFogVisible(false), 1000); // clears in 1.5s
    return () => clearTimeout(timer);
  }, []); // start fully foggy

  return (
    <HeroSection>
      <FogOverlay style={{ opacity: fogVisible ? 1 : 0 }} />
      <HeroContent>
        <Header>Work smarter. Reclaim your time.</Header>
        <HeaderSubText>
          Peak Efficiency helps leaders cut through digital chaos — giving back clarity, focus, and
          control so every day starts with purpose, not distraction.
        </HeaderSubText>
        <Button
          handleButton={handleEmailClick}
          accessibleName={'Open email to book consulting call with Peak Efficiency'}
          title={'Book a Consulting Call'}
        />
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;

// ────────────────────────────────────────────────
// Styled Components
// ────────────────────────────────────────────────

const HeroSection = styled.section`
  position: relative;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  height: fit-content;
  padding: 100px 0 180px;

  @media (max-width: 768px) {
    background-position: bottom center;
    padding: 100px 5px 180px;
  }
`;

const FogOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 70%,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.6) 80%,
    rgba(255, 255, 255, 0.7) 100%
  );
  pointer-events: none;
  transition: opacity 1s ease-out;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 70px;
  font-weight: 600;
  padding: 0 100px;

  @media (max-width: 768px) {
    padding: 0 5px;
    font-size: 50px;
    line-height: 1;
    margin-bottom: 5px;
  }
`;

const HeaderSubText = styled.p`
  color: #e0dfdf;
  font-size: 24px;
  padding: 0 170px 20px;

  @media (max-width: 768px) {
    padding: 0 30px;
    font-size: 20px;
  }
`;
