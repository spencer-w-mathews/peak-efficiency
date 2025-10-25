import styled from 'styled-components';
import FlexContainer from '../../Components/FlexContainer';
import PriceCard from './PriceCard';
import { useEffect, useState } from 'react';

const emailPriceCards = [
  {
    title: 'Basic',
    description: 'The essential tool for solo users',
    price: '$30.00',
    billingText: '/user /month billed monthly',
    trial: '7 day free trial',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: 'Sign me up',
  },
  {
    title: 'Business',
    description: 'Our most effective tool for top-tier managers',
    price: '$50.00',
    billingText: '/user /month billed monthly',
    trial: '7 day free trial',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: 'Sign me up',
    mostPopular: true,
  },
  {
    title: 'Executive',
    description: 'Our most effective tool, designed for business',
    price: "Let's talk",
    billingText: '',
    trial: '',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: "Let's talk",
  },
];
const moringPriceCards = [
  {
    title: 'Basic',
    description: 'The essential tool for solo users',
    price: '$30.00',
    billingText: '/user /month billed monthly',
    trial: '7 day free trial',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: 'Sign me up',
  },
  {
    title: 'Business',
    description: 'Our most effective tool for top-tier managers',
    price: '$50.00',
    billingText: '/user /month billed monthly',
    trial: '7 day free trial',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: 'Sign me up',
    mostPopular: true,
  },
  {
    title: 'Executive',
    description: 'Our most effective tool, designed for business',
    price: "Let's talk",
    billingText: '',
    trial: '',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: "Let's talk",
  },
];

const boardPriceCards = [
  {
    title: 'Basic',
    description: 'The essential tool for solo users',
    price: '$30.00',
    billingText: '/user /month billed monthly',
    trial: '7 day free trial',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: 'Sign me up',
  },
  {
    title: 'Business',
    description: 'Our most effective tool for top-tier managers',
    price: '$50.00',
    billingText: '/user /month billed monthly',
    trial: '7 day free trial',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: 'Sign me up',
    mostPopular: true,
  },
  {
    title: 'Executive',
    description: 'Our most effective tool, designed for business',
    price: "Let's talk",
    billingText: '',
    trial: '',
    includes: ['lorem ipsum', 'lorem sjf thwl', 'lorem ipsum', 'lorem sjf thwl', 'test sft test'],
    buttonText: "Let's talk",
  },
];

const CustomGPTPriceCards = [
  {
    title: 'Basic',
    description:
      'Your Personal GPT — for individuals and professionals who want a personal AI assistant that saves time and enhances productivity.',
    price: '$19.00',
    billingText: '/month + $99 one-time setup',
    trial: '',
    includes: [
      '30-minute onboarding call to define your goals and tone',
      'GPT trained on your communication style and core tasks',
      'Automates repetitive tasks, drafts messages, and summarizes information',
      'One-time setup with optional monthly updates',
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Pro',
    description:
      'Your Division GPT — for department heads and team leads who want an AI teammate supporting the entire group’s workflow.',
    price: '$99.00',
    billingText: '/month + $499 one-time setup',
    trial: '',
    includes: [
      'GPT trained on team processes, SOPs, and documents',
      'Automates follow-ups, task summaries, and proposal drafts',
      'Maintains consistent tone across all communications',
      'Hybrid onboarding with dedicated consultant',
      'Monthly optimization included',
    ],
    buttonText: 'Get Started',
    mostPopular: true,
  },
  {
    title: 'Enterprise',
    description:
      'Your Company GPT — our white-glove service for organizations ready to implement AI across their operations.',
    price: 'Custom',
    billingText: 'Setup typically $2,500+ and $499/month',
    trial: '',
    includes: [
      'Full workshop to map strategy, workflows, and integrations',
      'GPT hosted securely with SOC2-level compliance',
      'Integrations with Microsoft 365, Google Workspace, CRMs, or internal APIs',
      'Dedicated Peak Efficiency specialist for ongoing maintenance',
    ],
    buttonText: "Let's Talk",
  },
];

const StrategicIntelligencePriceCards = [
  {
    title: 'Strategic Brief',
    description: 'For founders and executives exploring a new idea or opportunity.',
    price: '$1,000',
    billingText: 'per report',
    trial: '',
    includes: [
      'Deep research across validated and cited sources',
      '10-page executive summary synthesized by AI + human analysts',
      'APA-formatted citations with live source links',
      'Five-day turnaround',
    ],
    buttonText: 'Request Report',
  },
  {
    title: 'Market Expansion Blueprint',
    description: 'For companies preparing to scale or enter new markets.',
    price: '$3,500–$5,000',
    billingText: 'per engagement',
    trial: '',
    includes: [
      'Comprehensive competitive and trend analysis',
      'Strategy modeled through proven business frameworks',
      '20–30 page investor-ready report with visuals and citations',
      'One follow-up alignment session',
      'Two-week turnaround',
    ],
    buttonText: 'Start Engagement',
  },
  {
    title: 'Enterprise Intelligence Partner',
    description:
      'For leadership teams requiring continuous strategic insight and data-driven guidance.',
    price: '$2,500',
    billingText: '/month + setup fee',
    trial: '',
    includes: [
      'Continuous AI research across global databases',
      'Monthly strategy updates and evolving playbooks',
      'Interactive dashboards with verified, sourced insights',
      'Quarterly leadership strategy sessions',
      'Private, enterprise-grade data handling and confidentiality',
    ],
    buttonText: 'Let’s Talk',
  },
];

function ProductsExp({ Title, subText, image }) {
  const [priceCards, setPriceCards] = useState(emailPriceCards);

  useEffect(() => {
    if (Title === 'Email Filter & Sorter') {
      setPriceCards(emailPriceCards);
    } else if (Title === 'Morning Brief') {
      setPriceCards(moringPriceCards);
    } else if (Title === 'Custom GPT Solutions') {
      setPriceCards(CustomGPTPriceCards);
    } else if (Title === 'Strategic Intelligence') {
      setPriceCards(StrategicIntelligencePriceCards);
    } else {
      setPriceCards(boardPriceCards);
    }
  }, [Title]);

  return (
    <ProductCont>
      <Header>{Title}</Header>
      <HeaderSubText>{subText}</HeaderSubText>
      <Image src={image} />
      <PricingHeader>Tailored solutions that evolve with your needs</PricingHeader>
      <FlexContainer>
        {priceCards.map((cardData, i) => (
          <PriceCard key={i} cardData={cardData} product={Title} />
        ))}
      </FlexContainer>
    </ProductCont>
  );
}

export default ProductsExp;

const ProductCont = styled.div`
  padding: 80px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  max-width: 1200px;
  margin: 0px auto;
`;
const Image = styled.img`
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 80px;
  z-index: 0;
  padding: 0px 10px;
  max-height: 400px;
  min-height: 200px;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  padding: 0px 100px;
  margin-top: -40px;
  margin-bottom: -10px;
  z-index: 1000;
  @media (max-width: 768px) {
    padding: 0px 5px;
    font-size: 40px;
    line-height: 1;
    margin-bottom: 5px;
  }
`;
const HeaderSubText = styled.p`
  color: #6d92b4;
  font-size: 24px;
  padding: 0px 100px 0px;
  z-index: 1000;
  @media (max-width: 768px) {
    padding: 0px 5px;
  }
`;

const PricingHeader = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
  padding: 0px 100px;
  margin-top: -40px;
  z-index: 1000;
  @media (max-width: 768px) {
    padding: 0px 5px;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 5px;
  }
`;
