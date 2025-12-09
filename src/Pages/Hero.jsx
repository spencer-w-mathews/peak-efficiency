import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../Components/Button';
import logo from '../images/logo.png';

function Hero() {
  const recipient = 'chris@peakefficiency.ai';
  const subject = 'Bluebird AGI Consult Call';
  const body = 'Hello, I would like to schedule a consult call.';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <HeroSection>
      <GradientBackdrop />
      <GlowOne />
      <GlowTwo />

      <ContentWrapper>
        <TextColumn
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <BrandBadge>
            <BadgeText>
              <BadgeLabel>Bluebird AGI</BadgeLabel>
              <BadgeSub>Clarity-first AI workflow hub</BadgeSub>
            </BadgeText>
          </BrandBadge>

          <HeroHeadline>Clear the clutter. Work in flow.</HeroHeadline>
          <HeroSubhead>
            Give every team member a personal AI desk that keeps priorities sharp, clears the noise,
            and turns mornings into momentum.
          </HeroSubhead>

          <PillRow>
            <Pill>Inbox triage that never sleeps</Pill>
            <Pill>Human-ready briefs in seconds</Pill>
            <Pill>Security-first by design</Pill>
          </PillRow>

          <CTAGroup>
            <Button
              handleButton={handleEmailClick}
              accessibleName="Open email to book consulting call with Bluebird AGI"
              title="Book a Consulting Call"
            />
            <SecondaryCTA href="#services">See how teams use it</SecondaryCTA>
          </CTAGroup>
        </TextColumn>

        <VisualColumn
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Morning Brief</CardTitle>
              <CardTag>Live</CardTag>
            </CardHeader>
            <CardBody>
              <CardRow>
                <Label>Threads cleared</Label>
                <Value>182</Value>
              </CardRow>
              <CardRow>
                <Label>Decision-ready summaries</Label>
                <Value>34</Value>
              </CardRow>
              <CardRow>
                <Label>Avg. response time saved</Label>
                <Value>2h 15m</Value>
              </CardRow>
              <Divider />
              <CardRow>
                <Label>CSAT impact</Label>
                <Value>+12%</Value>
              </CardRow>
            </CardBody>
          </Card>

          <StatCluster>
            <StatChip>
              <ChipLabel>Teams protected</ChipLabel>
              <ChipValue>150+</ChipValue>
            </StatChip>
            <StatChip>
              <ChipLabel>Noise reduced</ChipLabel>
              <ChipValue>87%</ChipValue>
            </StatChip>
            <StatChip>
              <ChipLabel>Focus reclaimed</ChipLabel>
              <ChipValue>8h / wk</ChipValue>
            </StatChip>
          </StatCluster>
        </VisualColumn>
      </ContentWrapper>
    </HeroSection>
  );
}

export default Hero;

// ────────────────────────────────────────────────
// Styled Components
// ────────────────────────────────────────────────

const HeroSection = styled.section`
  position: relative;
  min-height: 95vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 35%),
    radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 30%),
    linear-gradient(140deg, #0f2238 0%, #0b3558 50%, #0f1c2e 100%);
  color: ${({ theme }) => theme.colors.white};
  padding: 100px 8% 100px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    padding-top: 120px;
  }

  @media (max-width: 768px) {
    padding: 120px 24px 80px;
  }
`;

const GradientBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(29, 78, 137, 0.35) 0%, rgba(7, 22, 40, 0.6) 100%);
  opacity: 0.7;
`;

const GlowOne = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  right: -40px;
  top: 80px;
  background: radial-gradient(circle, rgba(75, 148, 255, 0.24) 0%, rgba(75, 148, 255, 0) 60%);
  filter: blur(18px);
`;

const GlowTwo = styled.div`
  position: absolute;
  width: 360px;
  height: 360px;
  left: -120px;
  bottom: -40px;
  background: radial-gradient(circle, rgba(46, 115, 76, 0.26) 0%, rgba(46, 115, 76, 0) 60%);
  filter: blur(18px);
`;

const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 48px;
  align-items: center;
  width: 100%;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: left;
`;

const BrandBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 14px;
  border-radius: 16px;
  backdrop-filter: blur(6px);
  width: fit-content;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
`;

const BadgeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const BadgeLabel = styled.span`
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: uppercase;
  color: #b9d7ff;
`;

const BadgeSub = styled.span`
  font-size: 14px;
  color: #e4edf7;
`;

const HeroHeadline = styled.h1`
  margin: 12px 0 0 0;
  font-size: 54px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

const HeroSubhead = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
  max-width: 720px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Pill = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 14px;
  letter-spacing: 0.1px;
`;

const CTAGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 6px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SecondaryCTA = styled.a`
  color: #b9d7ff;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &::after {
    content: '→';
    font-size: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
    transform: translateX(2px);
  }
`;

const VisualColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Card = styled.div`
  background: rgba(13, 29, 52, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

const CardTag = styled.span`
  background: rgba(46, 115, 76, 0.2);
  color: #b0f1c9;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 13px;
  border: 1px solid rgba(46, 115, 76, 0.35);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
`;

const Label = styled.span`
  opacity: 0.85;
`;

const Value = styled.span`
  font-weight: 700;
  color: #e6f3ff;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.14) 40%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 4px 0 2px;
`;

const StatCluster = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
`;

const StatChip = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 14px 16px;
  backdrop-filter: blur(6px);
`;

const ChipLabel = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
`;

const ChipValue = styled.div`
  margin-top: 6px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
