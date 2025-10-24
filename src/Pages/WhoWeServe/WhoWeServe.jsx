import styled from 'styled-components';
import InfoCard from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellSlash, faClock, faEnvelope, faObjectGroup } from '@fortawesome/free-regular-svg-icons';
import { faChartLine, faInfoCircle, faMugHot, faToolbox } from '@fortawesome/free-solid-svg-icons';

const problems = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: "Overwhelmed Inbox",
    description: "Important messages get buried under noise, wasting time and causing missed opportunities."
  },
  {
    icon: <FontAwesomeIcon icon={faInfoCircle} />,
    title: "Information Overload",
    description: "You wake up to endless updates and articles, but no clear sense of what actually matters."
  },
  {
    icon: <FontAwesomeIcon icon={faToolbox} />,
    title: "Scattered Tools",
    description: "Tasks, emails, and notes are spread across platforms — nothing feels connected or in sync."
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    title: "Lost Priorities",
    description: "You spend more time figuring out what to do than actually doing it."
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    title: "Constant Context Switching",
    description: "Jumping between messages, meetings, and tasks breaks your focus and drains your energy."
  },
  {
    icon: <FontAwesomeIcon icon={faBellSlash} />,
    title: "Notification Fatigue",
    description: "Every app wants your attention — you’re pinged all day, but rarely about something that matters."
  }
];


const cards = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      title: "Email Filter & Sorter",
      description: "Removes noise, routes what matters, and drafts replies in your tone — your inbox finally works for you.",
      route: '/products/email-filter-sorter'
    },
    {
      icon: <FontAwesomeIcon icon={faMugHot} />,
      title: "Morning Brief",
      description: "Start each day with a clear snapshot of what matters most — key emails, meetings, and action items — all summarized by AI.",
      route: '/products/morning-brief'
    },
    {
      icon: <FontAwesomeIcon icon={faObjectGroup} />,
      title: "Command Board",
      description: "A secure central hub where you can see everything — communications, priorities, and progress — in one place.",
      route: '/products/command-board'
    }
  ];

function WhoWeServe({Title}) {

  return (
        <WWSCont>
            <Header>The software environment for {Title} is broken</Header>
            <Grid>
                {problems.map((card, i) => (
                    <InfoCard key={i} {...card} />
                ))}
            </Grid>
            <PricingHeader>The Peak Efficiency Solution:</PricingHeader>
            <Grid>
                {cards.map((card, i) => (
                        <InfoCard key={i} {...card} />
                ))}
            </Grid>
            
           
        </WWSCont>
  );
}

export default WhoWeServe;

const WWSCont = styled.div`
    padding: 80px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`

const Header = styled.h1`
  color: #234261;
  font-size: 50px;
  padding: 0px 100px;
  margin-top: -40px;
  margin-bottom: -10px;
  z-index: 1000;
  @media (max-width: 768px) {
        padding: 0px 5px;
        font-size: 40px;
        line-height:  1;
        margin-bottom: 5px;
    }
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const PricingHeader = styled.h1`
  color: #234261;
  font-size: 30px;
  padding: 0px 100px;
  margin-top: 40px;
  z-index: 1000;
  @media (max-width: 768px) {
        padding: 0px 5px;
        font-size: 20px;
        line-height:  1;
        margin-bottom: 5px;
    }
`