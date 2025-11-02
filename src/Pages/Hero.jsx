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
  const [showThird, setThird] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowSecondText(true), 2500);
    const fogTimer = setTimeout(() => setFogVisible(false), 4800);
    const thirdTimer = setTimeout(() => setThird(true), 4800);
    const heroTimer = setTimeout(() => setShowHeroContent(true), 5800); // start a bit before fog clears

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fogTimer);
      clearTimeout(heroTimer);
      clearTimeout(thirdTimer);
    };
  }, []);

  return (
    <HeroSection>
      {/* background fog layer */}
      <FogOverlay $visible={fogVisible} />

      {/* hero content (above fog) */}
      <AnimatePresence>
        {showHeroContent && (
          <HeroContentWrapper
            as={motion.div}
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.8, ease: 'easeOut' }}
          >
            <HeroContent>
              <Header>Work smarter. Reclaim your time.</Header>
              <HeaderSubText>
                Peak Efficiency helps leaders cut through digital chaos — giving back clarity,
                focus, and control so every day starts with purpose, not distraction.
              </HeaderSubText>
              <Button
                handleButton={handleEmailClick}
                accessibleName="Open email to book consulting call with Peak Efficiency"
                title="Book a Consulting Call"
              />
            </HeroContent>
          </HeroContentWrapper>
        )}
      </AnimatePresence>

      {/* intro text (topmost layer) */}
      <AnimatePresence>
        {!showThird && (
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
                transition={{ duration: 1.2 }}
              >
                Let Peak Efficiency clear your inbox.
              </motion.h2>
            )}
          </IntroTextContainer>
        )}
      </AnimatePresence>
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
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    background-position: bottom center;
  }
`;

/* 🧊 FOG LAYER (middle layer, below content) */
const FogOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.55) 0%,
    rgba(255, 255, 255, 0.45) 30%,
    rgba(255, 255, 255, 0.25) 55%,
    rgba(255, 255, 255, 0.1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 300% 100%;
  background-position: center;
  transition:
    opacity 5s ease-in-out,
    background-position 5s ease-in-out;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

/* 🧩 HERO CONTENT (above fog) */
const HeroContentWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3; /* make sure it’s ABOVE fog */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none; /* optional so fog fade doesn’t block clicks */
`;

const HeroContent = styled.div`
  max-width: 900px;
  padding: 0 20px;
  pointer-events: auto; /* restore button interactivity */
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 10px;
  z-index: 3; /* ensure it's above fog even within motion div */

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 1.1;
  }
`;

const HeaderSubText = styled.p`
  color: #e0dfdf;
  font-size: 24px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

/* 🧭 INTRO TEXT (topmost) */
const IntroTextContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 4; /* topmost of all */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 1.2;
  }
`;
