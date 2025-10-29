import styled from 'styled-components';
//import { Button } from "../Shared/Button";
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    title: 'Basic',
    oldPrice: '$30.00',
    newPrice: '$15.00',
    note: 'First 3 months free',
    description: 'Your AI teammate for everyday clarity.',
    includes: [
      'Keeps 1 inbox and calendar organized',
      'Sorts and labels every email',
      'Drafts replies in your tone',
      'Weekly report card showing hours regained',
      "Daily 'Deleted Summary' of filtered noise",
    ],
    cta: 'Sign Me Up',
  },
  {
    title: 'Business',
    oldPrice: '$50.00',
    newPrice: '$30.00',
    note: 'First month free for up to 5 users',
    description: 'Your AI teammate for scalable clarity.',
    includes: [
      'Everything in Basic, plus:',
      'Connects multiple inboxes and shared calendars',
      'Morning Brief: personalized daily summary',
      'Custom tone profiles per department',
      'Team-wide priority tagging',
    ],
    cta: 'Get Started for Free',
    highlight: true,
  },
  {
    title: 'Executive',
    price: 'Custom — Let’s Talk',
    note: 'Includes a free consultation with our AI Innovation Team',
    description: 'Our white-glove concierge plan for total clarity.',
    includes: [
      'Everything in Business, plus:',
      'Dedicated AI Innovation Team consultation',
      'Morning Brief Pro executive summaries',
      'CRM & workflow integrations',
      'Priority support & optimization sessions',
    ],
    cta: 'Book Your Free Consultation',
  },
];

export default function PricingCards() {
  const navigate = useNavigate();

  const handleSelect = (tierName) => {
    // Example product context (could come from props or global state)
    navigate('/book', { state: { tier: tierName } });
  };
  return (
    <Wrap>
      {plans.map((p, i) => (
        <div style={{ overflowY: 'hidden' }} key={i}>
          {p.highlight && <MP>Most Popular</MP>}
          <PriceCont>
            <Header>{p.title}</Header>
            <Description>{p.description}</Description>
            <BillingCont>
              <Row>
                <OldPrice>{p.oldPrice}</OldPrice>
                <Price>{p.newPrice}</Price>
              </Row>
              {p.oldPrice && <BillingText>/user /month</BillingText>}
              <Price>{p.price}</Price>
              {/* <BillingText>{billingText}</BillingText> */}
              {/* {trial && <Trial>{trial}</Trial>} */}
            </BillingCont>

            {p.includes &&
              p.includes.map((included, i) => (
                <Row key={i}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    color="#cbc8c8ff"
                    size="sm"
                    style={{ marginTop: 'auto', marginRight: 10, marginBottom: 'auto' }}
                  />
                  <Included>{included}</Included>
                </Row>
              ))}
            {p.cta && <Button onClick={() => handleSelect(p.title)}>{p.cta}</Button>}
          </PriceCont>
        </div>
      ))}
    </Wrap>
  );
}

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  background: ${(p) => p.theme.colors.white};
  overflow-x: hidden;
`;

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 360px;
  background: ${(p) => (p.highlight ? p.theme.colors.gray : 'white')};
  border-radius: ${(p) => p.theme.radii.card};
  box-shadow: ${(p) => p.theme.shadows.soft};
  padding: 2.5rem;
  text-align: center;
  border: ${(p) => (p.highlight ? `2px solid ${p.theme.colors.gold}` : 'none')};

  h3 {
    margin-bottom: 0.5rem;
    color: ${(p) => p.theme.colors.deepBlue};
  }

  ul {
    text-align: left;
    margin: 1rem 0 2rem;
    list-style: none;
  }

  li::before {
    content: '✓';
    color: ${(p) => p.theme.colors.lightBlue};
    margin-right: 0.5rem;
  }
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  font-size: 14px;
  color: #999;
  margin: 0px 5px 20px 0px;
  line-height: 0.5;
`;

// const Price = styled.div`
//   font-size: 1.8rem;
//   font-weight: 700;
//   margin: 0.25rem 0;
//   color: ${(p) => p.theme.colors.primary};
// `;

const Note = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PriceCont = styled.div`
  width: 280px;
  min-height: 490px;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow-x: hidden;
  border: 1px solid #cbc8c8ff;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin: 20px;
  padding: 15px;
  overflow-y: hidden;
`;

const MP = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin: 0px auto -20px auto;
  width: 240px;
  border-radius: 8px 8px 0px 0px;
  font-weight: 400;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  margin-top: -10px;
`;

const Header = styled.p`
  margin-right: auto;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
`;
const Description = styled.p`
  font-size: 14px;
  margin: -5px 0px 20px 0px;
  line-height: 1;
  text-align: left;
  height: 50px;
`;

const BillingCont = styled.div`
  max-height: 80px;
  min-height: 80px;
`;

const Price = styled.p`
  font-size: 14px;
  margin: 0px 0px 20px 0px;
  line-height: 0.5;
`;

const BillingText = styled.p`
  font-size: 10px;
  margin: -10px 0px 20px 0px;
  line-height: 0.5;
`;

const Trial = styled.p`
  font-size: 10px;
  margin: -10px 0px 20px 0px;
  line-height: 0.5;
`;

const Included = styled.p`
  font-size: 14px;
  line-height: 1;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  width: 90%;
  height: 40px;
  border: 0px;
  margin: auto auto 0px;
  border-radius: 10px;
  padding: 0px 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 18px;
    height: fit-content;
    padding: 15px 15px;
  }
`;
