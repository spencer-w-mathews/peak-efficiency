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
    description: 'Your AI teammate for scalable clarity.',
    includes: [
      'Everything in Basic, plus:',
      'Connects multiple inboxes and shared calendars',
      'Morning Brief: personalized daily summary',
      'Custom tone profiles per department',
      'Team-wide priority tagging',
    ],
    cta: 'Sign Me Up',
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
    if (tierName === 'Executive') {
      navigate('/book', { state: { tier: tierName } });
    } else {
      window.open(`https://app.peakefficiency.ai?tier=${tierName.toLowerCase()}`, '_blank');
    }
  };
  return (
    <Wrap>
      <Inner>
        <Intro>
          <Kicker>Bluebird AGI pricing</Kicker>
          <h2>Choose the cockpit that fits your flight plan</h2>
          <p>
            Sleek, human-centered plans that keep your inboxes lifted. Every plan includes the same
            calm, crisp Bluebird AGI experience with smarter automation and less clutter.
          </p>
        </Intro>

        <Grid>
          {plans.map((p, i) => (
            <Card key={i} highlight={p.highlight}>
              {p.highlight && <Badge>Most popular</Badge>}

              <TopRow>
                <Header>{p.title}</Header>
                {p.note && <Note>{p.note}</Note>}
              </TopRow>

              <Description>{p.description}</Description>

              <BillingCont>
                <Row>
                  {p.oldPrice && <OldPrice>{p.oldPrice}</OldPrice>}
                  {p.newPrice && <Price>${p.newPrice.replace(/[^\d.]/g, '')}</Price>}
                  {p.price && <Price>{p.price}</Price>}
                </Row>
                {(p.oldPrice || p.newPrice) && <BillingText>/user /month</BillingText>}
              </BillingCont>

              <Divider />

              {p.includes && (
                <List>
                  {p.includes.map((included, idx) => (
                    <ListItem key={idx}>
                      <Check icon={faCircleCheck} />
                      <Included>{included}</Included>
                    </ListItem>
                  ))}
                </List>
              )}

              {p.cta && (
                <Button highlight={p.highlight} onClick={() => handleSelect(p.title)}>
                  {p.cta}
                </Button>
              )}
            </Card>
          ))}
        </Grid>
      </Inner>
    </Wrap>
  );
}

const Wrap = styled.section`
  position: relative;
  padding: 4rem 1rem 5rem;
  overflow: hidden;
`;

const Inner = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
`;

const Intro = styled.div`
  max-width: 750px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.deepBlue};

  h2 {
    font-size: clamp(1.9rem, 3vw, 2.4rem);
    margin: 0.35rem 0 0.5rem;
    letter-spacing: -0.01em;
  }

  p {
    color: ${({ theme }) => theme.colors.mutedText};
    margin: 0;
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const Kicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(35, 66, 97, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  position: relative;
  background: ${(p) =>
    p.highlight ? 'linear-gradient(145deg, #0f2744, #193b5f)' : 'rgba(255,255,255,0.9)'};
  color: ${(p) => (p.highlight ? p.theme.colors.white : p.theme.colors.deepBlue)};
  border-radius: 20px;
  padding: 1.75rem;
  border: 1px solid ${(p) => (p.highlight ? 'rgba(255,255,255,0.12)' : 'rgba(35,66,97,0.12)')};
  box-shadow: 0 20px 50px rgba(15, 39, 68, 0.12);
  backdrop-filter: blur(6px);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 28px 60px rgba(15, 39, 68, 0.18);
    border-color: ${(p) => (p.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(35, 66, 97, 0.25)')};
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: linear-gradient(120deg, #5ea7ff, #6d92b4);
  color: white;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 700;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const Header = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: -0.01em;
`;

const Note = styled.div`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 0.85rem;
  font-weight: 600;
  text-align: right;
`;

const Description = styled.p`
  font-size: 0.98rem;
  margin: 0.75rem 0 1.25rem;
  line-height: 1.6;
  color: inherit;
  opacity: 0.9;
`;

const BillingCont = styled.div`
  margin-bottom: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  font-size: 0.95rem;
  color: inherit;
  opacity: 0.6;
`;

const Price = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1.1;
`;

const BillingText = styled.p`
  font-size: 0.9rem;
  margin: 0.2rem 0 0;
  color: inherit;
  opacity: 0.8;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(35, 66, 97, 0.2), transparent);
  margin: 1.25rem 0 0.75rem;
`;

const List = styled.div`
  display: grid;
  gap: 0.55rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

const Check = styled(FontAwesomeIcon)`
  color: #6ed5b3;
  background: rgba(110, 213, 179, 0.14);
  border-radius: 50%;
  padding: 4px;
  font-size: 0.85rem;
`;

const Included = styled.p`
  margin: 0;
  text-align: left;
  font-size: 0.95rem;
  line-height: 1.5;
  color: inherit;
  opacity: 0.9;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme, highlight }) => (highlight ? theme.colors.primary : theme.colors.white)};
  background: ${({ highlight }) =>
    highlight
      ? 'linear-gradient(120deg, #e0f3ff, #a8d6ff)'
      : 'linear-gradient(120deg, #1c4b7b, #2f6aa3)'};
  box-shadow: 0 10px 30px rgba(28, 75, 123, 0.18);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgba(28, 75, 123, 0.22);
    filter: brightness(1.03);
  }

  &:active {
    transform: translateY(0px);
  }
`;
