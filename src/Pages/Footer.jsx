import styled from "styled-components";

function Footer() {
  return (
    <FooterSection>
    
    </FooterSection>
  );
}

export default Footer;

const FooterSection = styled.section`
  background-color: #234261;
  height: 60vh;
  margin-top: -20px;
`

const Header = styled.h1`
  color: #ffffff;
  font-size: 70px;
  font-weight: 600;
  padding: 20px 100px 0px;
`

const HeaderSubText = styled.p`
  color: #ffffff;
  font-size: 24px;
  padding: 0px 170px 20px;
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

`
