import styled from 'styled-components';
import heroImage from '../images/heroBG.png';
import Button from '../Components/Button';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const recipient = 'chris@peakefficiency.ai';
  const subject = 'Peak Efficiency Consult Call';
  const body = 'Hello, I would like to schedule a consult call.';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const [fogVisible, setFogVisible] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showHeroContent, setShowHeroContent] = useState(false);

  useEffect(() => {
    // Stage timings: Fog + messages
    const fogTimer = setTimeout(() => setFogVisible(false), 2500); // fog clears after 2.5s
    const textTimer = setTimeout(() => setShowSecondText(true), 1500); // switch to second message
    const heroTimer = setTimeout(() => setShowHeroContent(true), 3500); // show hero content after fog clears

    return () => {
      clearTimeout(fogTimer);
      clearTimeout(textTimer);
      clearTimeout(heroTimer);
    };
  }, []);

  return (
    <HeroSection>
      <FogOverlay style={{ opacity: fogVisible ? 1 : 0 }} />
      <AnimatePresence>
        {!showHeroContent && (
          <IntroTextContainer>
            {!showSecondText ? (
              <motion.h2
                key="text1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                Email and notification fatigue fogging up your days.
              </motion.h2>
            ) : (
              <motion.h2
                key="text2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                Let Peak Efficiency clear your inbox.
              </motion.h2>
            )}
          </IntroTextContainer>
        )}
      </AnimatePresence>

      {showHeroContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <HeroContent>
            <Header>Work smarter. Reclaim your time.</Header>
            <HeaderSubText>
              Peak Efficiency helps leaders cut through digital chaos — giving back clarity, focus,
              and control so every day starts with purpose, not distraction.
            </HeaderSubText>
            <Button
              handleButton={handleEmailClick}
              accessibleName={'Open email to book consulting call with Peak Efficiency'}
              title={'Book a Consulting Call'}
            />
          </HeroContent>
        </motion.div>
      )}
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
  min-height: 400px;
  padding: 100px 0 180px;
  overflow: hidden;

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
    rgba(255, 255, 255, 0.8) 100%
  );
  pointer-events: none;
  transition: opacity 2s ease-out;
  z-index: 2;
`;

const IntroTextContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  transition: opacity 1s ease-in-out;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 1.2;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
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
