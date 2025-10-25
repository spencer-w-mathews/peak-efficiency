import styled from 'styled-components';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function PriceCard({ cardData, product }) {
  const { title, description, price, billingText, buttonText, trial, includes, mostPopular } =
    cardData;
  const navigate = useNavigate();

  const handleSelect = (tierName) => {
    // Example product context (could come from props or global state)
    navigate('/book', { state: { tier: tierName, product } });
  };

  return (
    <div style={{ overflowY: 'hidden' }}>
      {mostPopular && <MP>Most Popular</MP>}
      <PriceCont>
        <Header>{title}</Header>
        <Description>{description}</Description>
        <BillingCont>
          <Price>{price}</Price>
          <BillingText>{billingText}</BillingText>
          {trial && <Trial>{trial}</Trial>}
        </BillingCont>

        {includes &&
          includes.map((included, i) => (
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
        {buttonText && <Button onClick={() => handleSelect(title)}>{buttonText}</Button>}
      </PriceCont>
    </div>
  );
}

export default PriceCard;

const PriceCont = styled.div`
  width: 280px;
  min-height: 490px;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow-x: hidden;
  border: 1px solid #cbc8c8ff;
  background-color: #fcfbfbff;
  border-radius: 20px;
  margin: 20px;
  padding: 15px;
  overflow-y: hidden;
`;

const MP = styled.div`
  background-color: #234261;
  text-align: center;
  color: #fff;
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
  color: #234261;
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
  background-color: #234261;
  color: #ffffff;
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
