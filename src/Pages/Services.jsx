import styled from 'styled-components';
import './Products.css';
import FlexContainer from '../Components/FlexContainer';
import services from '../images/services.png'

function Services() {
  return (
        <ServicesCont>
            <Header>Beyond tools. Real transformation.</Header>
            <HeaderSubText>Our consulting and automation services help leaders and teams adopt AI efficiently and sustainably.</HeaderSubText>
            <FlexContainer>
              <ServicesColumn>
                <ServicesTitle>
                  Workflow Automation Consulting
                </ServicesTitle>
                <ServicesText>
                  We build personalized automations using n8n, Microsoft 365, and OpenAI — saving hours every week by connecting your tools and streamlining your work.
                </ServicesText>
                <ServicesTitle>
                  AI Integration Coaching
                </ServicesTitle>
                <ServicesText>
                  Strategy sessions designed to help leaders harness AI effectively, simplify processes, and make smarter decisions.
                </ServicesText>
                <ServicesTitle>
                  White-Glove Setup
                </ServicesTitle>
                <ServicesText>
                  We analyze your emails and workflows to configure your tools for maximum efficiency — tailored to how you actually work.
                </ServicesText>

                <DemoButton
                  href='#'
                  onClick={(e) => {
                    window.location.href = 'chris@peakefficiency.ai';
                    e.preventDefault();
                  }}
                >
                  Book a Consulting Call
                </DemoButton>

              </ServicesColumn>
              <ServicesImg src={services} alt="logo"/>
            </FlexContainer>
            
        </ServicesCont>
  );
}

export default Services;

const ServicesCont = styled.section`
    background-color: #ffffff;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 100px;
    @media (max-width: 768px) {
        padding: 0px 0px;
      }
`

const Header = styled.h1`
  color: #234261;
  font-size: 50px;
  padding: 0px 10px;
`
const HeaderSubText = styled.p`
  color: #6D92B4;
  font-size: 24px;
  padding: 0px 170px 20px;
  margin-top: -30px;
  @media (max-width: 768px) {
        padding: 0px 5px;
      }
`
const ServicesColumn = styled.div`
  flex-direction: column;
  text-align: left;
  width: 40%;
  margin-right: auto;
  @media (max-width: 768px) {
        padding: 0px 5px;
        text-align: center;
        margin-right: auto;
        margin-left: auto;
        width: 90%;
  }
`

const ServicesTitle = styled.div`
  color: #234261;
  font-size: 24px;
  font-weight: 500;
`

const ServicesText = styled.div`
   color: #6D92B4;
   margin-top: 10px;
   margin-bottom: 20px;
`

const DemoButton = styled.button`
  background-color: #2E734C;
  color: #ffffff;
  font-weight: 500;
  height: 40px;
  border: 0px;
  border-radius: 10px;
  padding: 0px 15px;
  cursor: pointer;
  @media (max-width: 768px) {
        margin-bottom: 20px;
      }
`

const ServicesImg = styled.img`
  height: 400px;
  margin: auto 0px auto auto;
  box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 300px;
    margin: auto;
    margin-bottom: 30px;
  }
`