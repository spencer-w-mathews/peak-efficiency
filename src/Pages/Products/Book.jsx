import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

export default function BookForm() {
  const { state } = useLocation();
  const { tier, product } = state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userType: '',
    numPeople: '',
    companySize: '',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    // Here you'd normally send the data to your backend or Google Form endpoint
    console.log({ ...formData, tier, product });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ConfirmationContainer>
        <h1>Thank you, {formData.fullName || 'there'}!</h1>
        <p>
          We’ve received your inquiry about <strong>{product}</strong> —{' '}
          {tier ? <strong>{tier}</strong> : 'a selected tier'} plan.
        </p>
        <p>A Peak Efficiency team member will reach out to you shortly with more details.</p>
        <BackBtn onClick={() => window.history.back()}>← Back to site</BackBtn>
      </ConfirmationContainer>
    );
  }

  return (
    <FormContainer>
      <Header>
        <h1>Speak to a Peak Efficiency Expert</h1>
        <p>
          Get in touch for discovery calls, onboarding guidance, and tailored strategic insights.
        </p>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Select name="userType" value={formData.userType} onChange={handleChange} required>
          <option value="" hidden disabled>
            Select type
          </option>
          <option value="personal">Personal</option>
          <option value="business">Business</option>
        </Select>

        {formData.userType === 'business' && (
          <>
            <Select name="numPeople" value={formData.numPeople} onChange={handleChange} required>
              <option value="" hidden disabled>
                Select number of people
              </option>
              <option value="1-5">1–5</option>
              <option value="6-20">6–20</option>
              <option value="21-100">21–100</option>
              <option value="100+">100+</option>
            </Select>

            <Select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              required
            >
              <option value="" hidden disabled>
                Select company size
              </option>
              <option value="Startup">Startup</option>
              <option value="Small Business">Small Business</option>
              <option value="Enterprise">Enterprise</option>
            </Select>
          </>
        )}

        <Select name="reason" value={formData.reason} onChange={handleChange} required>
          <option value="" hidden disabled>
            How can we help?
          </option>
          <option value="demo">Request a demo</option>
          <option value="setup">Help with setup</option>
          <option value="partnership">Discuss partnership</option>
        </Select>

        <Meta>
          <span>Selected Tier:</span> {tier || 'N/A'}
          <br />
          <span>Product:</span> {product || 'N/A'}
        </Meta>

        <CheckboxRow>
          <input type="checkbox" id="masterclass" />
          <label htmlFor="masterclass">Receive a free product masterclass while you wait</label>
        </CheckboxRow>

        <SubmitBtn type="submit">Book Call</SubmitBtn>
      </Form>
    </FormContainer>
  );
}

/* ---------------- styled-components ---------------- */

const FormContainer = styled.div`
  overflow-x: hidden;
  max-width: 500px;
  margin: 60px auto;
  background: #f9fbfd;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
`;

const Select = styled.select`
  -webkit-appearance: none; /* ✅ Removes iOS default dropdown look */
  -moz-appearance: none;
  appearance: none;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  background: #eef3f8;
  padding: 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.4;
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #333;
`;

const SubmitBtn = styled.button`
  margin-top: 15px;
  padding: 12px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const ConfirmationContainer = styled.div`
  max-width: 500px;
  margin: 100px auto;
  text-align: center;
  background: #f9fbfd;
  border-radius: 16px;
  padding: 50px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;
  }
  p {
    color: #555;
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

const BackBtn = styled.button`
  margin-top: 20px;
  padding: 10px 18px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
