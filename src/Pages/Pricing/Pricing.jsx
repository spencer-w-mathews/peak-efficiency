import PageHero from '../../Components/PageHero';
import PricingCards from './PricingCards';
import FeatureComparison from './FeatureComparison';
import IntegrationBanner from './IntegrationBanner';
import styled from 'styled-components';

export default function Pricing() {
  return (
    <Container>
      <Orb aria-hidden />
      <PageHero
        headline="Your Inbox, Upgraded."
        subheadline="An AI teammate that learns your rhythm, anticipates priorities, and clears the clutter before you even open your inbox."
      />
      <IntegrationBanner />
      <PricingCards />
      <Orb1 aria-hidden />
      <FeatureComparison />
      <Orb2 aria-hidden />
    </Container>
  );
}

const Container = styled.div`
  background:
    radial-gradient(circle at 20% 20%, rgba(109, 146, 180, 0.18), transparent 25%),
    radial-gradient(circle at 80% 0%, rgba(35, 66, 97, 0.16), transparent 30%),
    linear-gradient(135deg, #f6f9ff 0%, #eef5ff 35%, #f9fbff 100%);
  overflow: hidden;
`;

const Orb = styled.div`
  position: absolute;
  inset: 190px auto auto 85%;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(109, 146, 180, 0.3) 0%, rgba(35, 66, 97, 0) 65%);
  filter: blur(14px);
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Orb1 = styled.div`
  position: absolute;
  inset: 1300px auto auto 85%;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(109, 146, 180, 0.3) 0%, rgba(35, 66, 97, 0) 65%);
  filter: blur(14px);
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Orb2 = styled.div`
  position: absolute;
  inset: 1600px auto auto 15%;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(109, 146, 180, 0.3) 0%, rgba(35, 66, 97, 0) 65%);
  filter: blur(14px);
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

