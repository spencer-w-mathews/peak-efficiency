import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function InfoCard({ icon, title, description, route }) {
  const navigate = useNavigate()
  return (
    <Card onClick={() => route && navigate(route)} style={route ? {cursor: 'pointer'}: {}}>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: clamp(200px, 30%, 250px);
  min-height: 200px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #2e734c;
  margin-bottom: 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #234261;
  margin-left: auto;
  margin-right: auto;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;
`;
