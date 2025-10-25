// WaitlistForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import contact from '../images/contact.webp';

export default function Contact() {
  // 🧠 Replace these 3 lines with your real values:
  const formAction =
    'https://docs.google.com/forms/d/e/1FAIpQLSer88WImyOJw8rcgJfVjGSIRVum-RMDIfFjqGdpER0GoP3qZg/formResponse';
  const nameEntry = 'entry.500499564'; // <-- replace with your Name field entry ID
  const emailEntry = 'entry.49945969'; // <-- replace with your Email field entry ID

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim()) {
      setError('Please fill in both fields.');
      return;
    }

    // simple email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const formData = new FormData();
    formData.append(nameEntry, name);
    formData.append(emailEntry, email);

    fetch(formAction, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
        setName('');
        setEmail('');
      })
      .catch(() => {
        setError('Something went wrong. Try again later.');
      });
  };

  return (
    <Container>
      <FormContainer>
        <Title>Get Your Time Back.</Title>
        <Subtitle>
          Join the Peak Efficiency list for updates, insights, and early access to new features.
        </Subtitle>

        {submitted ? (
          <SuccessMessage>🎉 Thanks for joining! Check your inbox soon.</SuccessMessage>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Label>
              Name
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </Label>

            <Label>
              Email
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </Label>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button type="submit">Join Waitlist</Button>
          </Form>
        )}
      </FormContainer>
      <Image src={contact} />
    </Container>
  );
}

/* 💅 Styled-components */
const Container = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  max-width: 500px;
  border-radius: 20px;
  margin: auto;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    max-width: 85%;
    margin-bottom: 40px;
    margin-top: -40px;
  }
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 20px auto 60px;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  @media (max-width: 768px) {
    margin-top: -10px;
  }
`;

const Title = styled.h2`
  color: #234261;
  font-size: 3.2rem;
  margin-bottom: 0.3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #a2a2a3ff;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  text-align: left;
  font-size: 0.9rem;
  color: #234261;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2e734c;
    box-shadow: 0 0 0 3px rgba(46, 115, 76, 0.2);
  }
`;

const Button = styled.button`
  background-color: #2e734c;
  width: 105%;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background 0.25s ease,
    transform 0.1s ease;
  &:hover {
    background-color: #256d44;
  }
  &:active {
    transform: scale(0.97);
  }
`;

const ErrorMessage = styled.p`
  color: #d33;
  font-size: 0.85rem;
`;

const SuccessMessage = styled.p`
  color: #2e734c;
  font-size: 1rem;
  font-weight: 500;
`;
