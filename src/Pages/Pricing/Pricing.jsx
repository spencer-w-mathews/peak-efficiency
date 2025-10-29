import PageHero from '../../Components/PageHero';
import PricingCards from './PricingCards';
import FeatureComparison from './FeatureComparison';
import IntegrationBanner from './IntegrationBanner';

export default function Pricing() {
  return (
    <>
      <PageHero
        headline="Your Inbox, Upgraded."
        subheadline="An AI teammate that learns your rhythm, anticipates priorities, and clears the clutter before you even open your inbox."
      />
      <IntegrationBanner />
      <PricingCards />
      <FeatureComparison />
    </>
  );
}
