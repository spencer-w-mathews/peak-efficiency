import styled, { useTheme } from 'styled-components';

function About() {
  const theme = useTheme();
  return (
    <ServiceSection>
      <Header>About Peak Efficiency</Header>
      <HeaderSubText>For professionals who value precision, not chaos</HeaderSubText>
      <ParaTitle>Mission Statement</ParaTitle>
      <ParaSubText>
        We're on a mission to help professionals focus again. Peak Efficiency cuts through the
        digital chaos of too many tools and too little time — giving back clarity, focus, and
        control so every day starts with purpose, not distraction. We exist to help professionals
        reclaim their time, simplify how they work, and unlock growth by delivering exactly what
        they truly need: efficiency.
      </ParaSubText>
      <ParaTitle>Vision Statement</ParaTitle>
      <ParaSubText>
        Our vision is to give every professional back the freedom to focus, create, and grow —
        without being buried in tools, emails, and busywork. We're building a world where simplicity
        powers productivity, and technology quietly works in the background so people can focus on
        what truly matters.
      </ParaSubText>
      <ParaTitle>Values</ParaTitle>
      <ParaSubText1>
        We help professionals see{' '}
        <span style={{ color: theme.colors.secondary, fontWeight: 800 }}>CLEAR</span> again
      </ParaSubText1>
      <div style={{ borderTop: '1px solid #5454543d' }}></div>
      <ClearCont>
        <LetterContainer>
          <Letter>C</Letter>
        </LetterContainer>
        <div>
          <ClearTitle>Clarity</ClearTitle>
          <ClearText>Lead with simplicity and transparency.</ClearText>
        </div>
      </ClearCont>
      <ClearCont>
        <LetterContainer>
          <Letter>L</Letter>
        </LetterContainer>
        <div>
          <ClearTitle>Leadership</ClearTitle>
          <ClearText>Empower others to do their best work.</ClearText>
        </div>
      </ClearCont>
      <ClearCont>
        <LetterContainer>
          <Letter>E</Letter>
        </LetterContainer>
        <div>
          <ClearTitle>Efficiency</ClearTitle>
          <ClearText>Work smarter, not harder.</ClearText>
        </div>
      </ClearCont>
      <ClearCont>
        <LetterContainer>
          <Letter>A</Letter>
        </LetterContainer>
        <div>
          <ClearTitle>Accountability</ClearTitle>
          <ClearText>Take ownership for results and relationships.</ClearText>
        </div>
      </ClearCont>
      <ClearCont>
        <LetterContainer>
          <Letter>R</Letter>
        </LetterContainer>
        <div>
          <ClearTitle>Reliability</ClearTitle>
          <ClearText>Build secure, dependable systems people can trust.</ClearText>
        </div>
      </ClearCont>
      <ParaTitle>What Makes Us Different</ParaTitle>
      <ParaSubText>We don't build tools — we build clarity.</ParaSubText>
      <ParaSubText>
        Peak Efficiency learns your workflow, your tone, and your priorities. There's no learning
        curve for you — it learns your style. Every product we design is buit to simplify your day,
        not complicate it.
      </ParaSubText>
      <ParaSubText>
        Our AI doesn't just automate tasks — it restores focus. Our system doesn't replace
        professionals — it empowers them.
      </ParaSubText>
      <ParaSubText>
        And our promise is simple: technology that fades into the background so you can focus on
        what matters most.
      </ParaSubText>
    </ServiceSection>
  );
}

export default About;

const ServiceSection = styled.section`
  background-color: #fff;
  padding: 90px 90px 10px;
  @media (max-width: 768px) {
    padding: 90px 25px 10px;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  padding: 0px 100px;
  @media (max-width: 768px) {
    padding: 0px 5px;
  }
`;
const HeaderSubText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24px;
  font-weight: 700;
  margin-top: -30px;
  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`;

const ParaTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: -10px;
`;

const ParaSubText = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 20px;
  font-weight: 300;
  padding: 10px 100px;
  border-top: 1px solid #5454543d;
  @media (max-width: 768px) {
    padding: 10px 5px 0px;
  }
`;

const ParaSubText1 = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 20px;
  font-weight: 300;
  padding: 10px 100px;
  @media (max-width: 768px) {
    padding: 0px 5px;
  }
`;

const ClearTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  font-weight: 700;
  margin-bottom: -10px;
  text-align: left;
`;

const ClearText = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 18px;
  font-weight: 300;
  padding: 0px 0px;
  text-align: left;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const LetterContainer = styled.div`
  background: rgba(46, 115, 76, 0.2);
  border-radius: 50%;
  height: 45px;
  width: 45px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 30px;
  margin-top: 27px;
  margin-right: 10px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Letter = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  font-size: 30px;
`;

const ClearCont = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
