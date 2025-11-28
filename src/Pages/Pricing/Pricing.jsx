import PageHero from '../../Components/PageHero';
import PricingCards from './PricingCards';
import FeatureComparison from './FeatureComparison';
import IntegrationBanner from './IntegrationBanner';
import { useContent } from '../../content/ContentContext';

export default function Pricing() {
  const { content } = useContent();
  const pricingContent = content.pricing;

  return (
    <>
      <PageHero
        headline={pricingContent.hero.headline}
        subheadline={pricingContent.hero.subheadline}
      />
      <IntegrationBanner content={pricingContent.integrationBanner} />
      <PricingCards plans={pricingContent.plans} />
      <FeatureComparison content={pricingContent.featureComparison} />
    </>
  );
}
