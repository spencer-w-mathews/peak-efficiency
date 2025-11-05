import styled, { useTheme } from 'styled-components';
import './Products.css';
import FlexContainer from '../Components/FlexContainer';
import services from '../images/services.webp';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Components/Button';

function Services() {
  const recipient = 'chris@peakefficiency.ai';
  const subject = 'Peak Efficiency Consult Call';
  const body = 'Hello, I would like to schedule a consult call.';
  const theme = useTheme();

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <ServicesCont>
      <Header>Beyond tools. Real transformation.</Header>
      <HeaderSubText>
        Our consulting and automation services help professionals and teams adopt AI efficiently and
        sustainably.
      </HeaderSubText>
      <FlexContainer>
        <ServicesColumn>
          <ClearCont>
            <FontAwesomeIcon
              icon={faCircleCheck}
              color={theme.colors.secondary}
              size="lg"
              style={{ marginTop: '5px', marginRight: 10 }}
            />
            <div>
              <ServicesTitle>Workflow Automation Consulting</ServicesTitle>
              <ServicesText>
                We build personalized automations using n8n, Microsoft 365, and OpenAI — saving
                hours every week by connecting your tools and streamlining your work.
              </ServicesText>
            </div>
          </ClearCont>
          <ClearCont>
            <FontAwesomeIcon
              icon={faCircleCheck}
              color={theme.colors.secondary}
              size="lg"
              style={{ marginTop: '5px', marginRight: 10 }}
            />
            <div>
              <ServicesTitle>AI Integration Coaching</ServicesTitle>
              <ServicesText>
                Strategy sessions designed to help leaders harness AI effectively, simplify
                processes, and make smarter decisions.
              </ServicesText>
            </div>
          </ClearCont>
          <ClearCont>
            <FontAwesomeIcon
              icon={faCircleCheck}
              color={theme.colors.secondary}
              size="lg"
              style={{ marginTop: '5px', marginRight: 10 }}
            />
            <div>
              <ServicesTitle>White-Glove Setup</ServicesTitle>
              <ServicesText>
                We analyze your emails and workflows to configure your tools for maximum efficiency
                — tailored to how you actually work.
              </ServicesText>
            </div>
          </ClearCont>
          <Button
            handleButton={handleEmailClick}
            accessibleName={'Open email to book consulting call with Peak Efficiency'}
            title={'Book a Consulting Call'}
          />
        </ServicesColumn>
        <ServicesImg src={services} alt="logo" />
      </FlexContainer>
    </ServicesCont>
  );
}

export default Services;

const ServicesCont = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 100px 100px;
  @media (max-width: 768px) {
    padding: 0px 0px;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  padding: 0px 10px;
  @media (max-width: 768px) {
    padding: 0px 5px;
    font-size: 40px;
    line-height: 1;
    margin-bottom: 25px;
    margin-top: 25px;
  }
`;
const HeaderSubText = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 24px;
  padding: 0px 170px 20px;
  margin-top: -30px;
  @media (max-width: 768px) {
    padding: 0px 5px;
    margin-top: 0px;
  }
`;
const ServicesColumn = styled.div`
  flex-direction: column;
  text-align: left;
  width: 40%;
  margin-right: auto;
  @media (max-width: 768px) {
    padding: 0px 5px;
    text-align: left;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
  }
`;

const ServicesTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: 500;
`;

const ServicesText = styled.div`
  color: ${({ theme }) => theme.colors.mutedText};
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ServicesImg = styled.img`
  height: 400px;
  margin: auto 0px auto auto;
  box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: 20px auto 40px;
  }
`;

const ClearCont = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
