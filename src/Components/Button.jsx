import styled from 'styled-components';

export default function Button({ accessibleName, handleButton, title }) {
  return (
    <ButtonCont onClick={handleButton} aria-labelledby={accessibleName}>
      {title}
    </ButtonCont>
  );
}

const ButtonCont = styled.button`
  background-color: #2e734c;
  color: #ffffff;
  font-weight: 500;
  height: 40px;
  border: 0px;
  border-radius: 10px;
  padding: 0px 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: fit-content;
    padding: 15px 60px;
    font-size: 18px;
    margin-top: 25px;
  }
`;
