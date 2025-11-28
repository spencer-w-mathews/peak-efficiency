import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useContent } from '../content/ContentContext';

const buildInitialState = (content) => ({
  heroHeading: content.hero.heading,
  heroSubheading: content.hero.subheading,
  heroIntroLines: content.hero.introLines.join('\n'),
  heroCtaLabel: content.hero.ctaLabel,
  servicesHeading: content.services.heading,
  servicesSubheading: content.services.subheading,
  pricingHeroHeading: content.pricing.hero.headline,
  pricingHeroSubheading: content.pricing.hero.subheadline,
  integrationHeading: content.pricing.integrationBanner.heading,
  integrationSubtext: content.pricing.integrationBanner.subtext,
  securitySubtitle: content.security.subtitle,
  securityTitle: content.security.securityTitle,
  securityIntegrationTitle: content.security.integrationTitle,
  contactTitle: content.contact.title,
  contactSubtitle: content.contact.subtitle,
  contactButtonLabel: content.contact.buttonLabel,
  footerDescription: content.footer.description,
  footerEmail: content.footer.email,
  footerWebsite: content.footer.website,
  footerCopyright: content.footer.copyright,
});

const ContentEditor = () => {
  const { content, updateContent, resetContent } = useContent();
  const [formState, setFormState] = useState(() => buildInitialState(content));
  const [servicesItems, setServicesItems] = useState(content.services.items);
  const [pricingPlans, setPricingPlans] = useState(content.pricing.plans);
  const [featureComparison, setFeatureComparison] = useState(content.pricing.featureComparison);
  const [securityFeatures, setSecurityFeatures] = useState(content.security.securityFeatures);
  const [securityIntegrations, setSecurityIntegrations] = useState(content.security.integrations);
  const [navLinks, setNavLinks] = useState(content.navigation.links);

  useEffect(() => {
    setFormState(buildInitialState(content));
    setServicesItems(content.services.items);
    setPricingPlans(content.pricing.plans);
    setFeatureComparison(content.pricing.featureComparison);
    setSecurityFeatures(content.security.securityFeatures);
    setSecurityIntegrations(content.security.integrations);
    setNavLinks(content.navigation.links);
  }, [content]);

  const pendingOverrides = useMemo(
    () => ({
      navigation: { links: navLinks },
      hero: {
        heading: formState.heroHeading,
        subheading: formState.heroSubheading,
        introLines: formState.heroIntroLines.split('\n').filter(Boolean),
        ctaLabel: formState.heroCtaLabel,
      },
      services: {
        heading: formState.servicesHeading,
        subheading: formState.servicesSubheading,
        items: servicesItems,
      },
      pricing: {
        hero: {
          headline: formState.pricingHeroHeading,
          subheadline: formState.pricingHeroSubheading,
        },
        integrationBanner: {
          heading: formState.integrationHeading,
          subtext: formState.integrationSubtext,
        },
        plans: pricingPlans,
        featureComparison,
      },
      security: {
        subtitle: formState.securitySubtitle,
        securityTitle: formState.securityTitle,
        securityFeatures,
        integrationTitle: formState.securityIntegrationTitle,
        integrations: securityIntegrations,
      },
      contact: {
        title: formState.contactTitle,
        subtitle: formState.contactSubtitle,
        buttonLabel: formState.contactButtonLabel,
      },
      footer: {
        description: formState.footerDescription,
        email: formState.footerEmail,
        website: formState.footerWebsite,
        copyright: formState.footerCopyright,
      },
    }),
    [featureComparison, formState, navLinks, pricingPlans, securityFeatures, securityIntegrations, servicesItems]
  );

  const handleInputChange = (field) => (event) => {
    const { value } = event.target;
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (index, field, value) => {
    setServicesItems((items) =>
      items.map((item, idx) => (idx === index ? { ...item, [field]: value } : item))
    );
  };

  const handleNavChange = (index, field, value) => {
    setNavLinks((links) => links.map((link, idx) => (idx === index ? { ...link, [field]: value } : link)));
  };

  const handlePlanChange = (index, field, value) => {
    setPricingPlans((plans) => plans.map((plan, idx) => (idx === index ? { ...plan, [field]: value } : plan)));
  };

  const handlePlanIncludesChange = (index, value) => {
    setPricingPlans((plans) =>
      plans.map((plan, idx) => (idx === index ? { ...plan, includes: value.split('\n').filter(Boolean) } : plan))
    );
  };

  const handleFeatureComparisonChange = (field, value) => {
    setFeatureComparison((prev) => ({ ...prev, [field]: value }));
  };

  const handleComparisonColumnChange = (index, value) => {
    setFeatureComparison((prev) => ({
      ...prev,
      columns: prev.columns.map((col, idx) => (idx === index ? value : col)),
    }));
  };

  const handleComparisonRowChange = (index, key, value) => {
    setFeatureComparison((prev) => ({
      ...prev,
      rows: prev.rows.map((row, idx) => {
        if (idx !== index) return row;
        if (key === 'values') {
          return { ...row, values: value.split('\n').filter(Boolean) };
        }
        return { ...row, [key]: value };
      }),
    }));
  };

  const handleSecurityFeatureChange = (index, field, value) => {
    setSecurityFeatures((items) =>
      items.map((item, idx) => (idx === index ? { ...item, [field]: value } : item))
    );
  };

  const handleSecurityIntegrationChange = (index, field, value) => {
    setSecurityIntegrations((items) =>
      items.map((item, idx) => (idx === index ? { ...item, [field]: value } : item))
    );
  };

  const handleSave = (event) => {
    event.preventDefault();
    updateContent(pendingOverrides);
  };

  const handleReset = () => {
    resetContent();
  };

  return (
    <Wrapper>
      <Header>
        <h1>Site Content Editor</h1>
        <p>
          Update copy in one place. Changes save to your browser (localStorage) so non-technical teammates can edit
          wording without touching code. Reload to see defaults again or click Reset.
        </p>
      </Header>

      <Form onSubmit={handleSave}>
        <Section>
          <SectionTitle>Navigation</SectionTitle>
          <Grid>
            {navLinks.map((link, index) => (
              <Card key={`${link.path}-${index}`}>
                <Label>Label</Label>
                <Input value={link.label} onChange={(e) => handleNavChange(index, 'label', e.target.value)} />
                <Label>Path</Label>
                <Input value={link.path} onChange={(e) => handleNavChange(index, 'path', e.target.value)} />
              </Card>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Hero</SectionTitle>
          <Label>Headline</Label>
          <Input value={formState.heroHeading} onChange={handleInputChange('heroHeading')} />

          <Label>Subheadline</Label>
          <Textarea value={formState.heroSubheading} onChange={handleInputChange('heroSubheading')} rows={3} />

          <Label>Intro lines (one per line)</Label>
          <Textarea value={formState.heroIntroLines} onChange={handleInputChange('heroIntroLines')} rows={3} />

          <Label>CTA label</Label>
          <Input value={formState.heroCtaLabel} onChange={handleInputChange('heroCtaLabel')} />
        </Section>

        <Section>
          <SectionTitle>Services</SectionTitle>
          <Label>Section headline</Label>
          <Input value={formState.servicesHeading} onChange={handleInputChange('servicesHeading')} />

          <Label>Section subheadline</Label>
          <Textarea
            value={formState.servicesSubheading}
            onChange={handleInputChange('servicesSubheading')}
            rows={3}
          />

          <Grid>
            {servicesItems.map((item, index) => (
              <Card key={`${item.title}-${index}`}>
                <Label>Service title</Label>
                <Input
                  value={item.title}
                  onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                />
                <Label>Description</Label>
                <Textarea
                  value={item.description}
                  onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                  rows={3}
                />
              </Card>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Pricing Hero & Integrations</SectionTitle>
          <Label>Headline</Label>
          <Input value={formState.pricingHeroHeading} onChange={handleInputChange('pricingHeroHeading')} />

          <Label>Subheadline</Label>
          <Textarea
            value={formState.pricingHeroSubheading}
            onChange={handleInputChange('pricingHeroSubheading')}
            rows={3}
          />

          <Label>Integration heading</Label>
          <Input value={formState.integrationHeading} onChange={handleInputChange('integrationHeading')} />

          <Label>Integration subtext</Label>
          <Textarea value={formState.integrationSubtext} onChange={handleInputChange('integrationSubtext')} rows={2} />
        </Section>

        <Section>
          <SectionTitle>Pricing Plans</SectionTitle>
          <Grid>
            {pricingPlans.map((plan, index) => (
              <Card key={`${plan.title}-${index}`}>
                <Label>Plan title</Label>
                <Input value={plan.title} onChange={(e) => handlePlanChange(index, 'title', e.target.value)} />

                <Label>Old price</Label>
                <Input value={plan.oldPrice || ''} onChange={(e) => handlePlanChange(index, 'oldPrice', e.target.value)} />

                <Label>New price</Label>
                <Input value={plan.newPrice || ''} onChange={(e) => handlePlanChange(index, 'newPrice', e.target.value)} />

                <Label>Custom price text</Label>
                <Input value={plan.price || ''} onChange={(e) => handlePlanChange(index, 'price', e.target.value)} />

                <Label>Note</Label>
                <Input value={plan.note || ''} onChange={(e) => handlePlanChange(index, 'note', e.target.value)} />

                <Label>Description</Label>
                <Textarea
                  value={plan.description}
                  onChange={(e) => handlePlanChange(index, 'description', e.target.value)}
                  rows={3}
                />

                <Label>Includes (one per line)</Label>
                <Textarea
                  value={plan.includes.join('\n')}
                  onChange={(e) => handlePlanIncludesChange(index, e.target.value)}
                  rows={4}
                />

                <Label>CTA label</Label>
                <Input value={plan.cta} onChange={(e) => handlePlanChange(index, 'cta', e.target.value)} />

                <Label>Highlight plan?</Label>
                <input
                  type="checkbox"
                  checked={Boolean(plan.highlight)}
                  onChange={(e) => handlePlanChange(index, 'highlight', e.target.checked)}
                />
              </Card>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Feature Comparison</SectionTitle>
          <Label>Table heading</Label>
          <Input
            value={featureComparison.heading}
            onChange={(e) => handleFeatureComparisonChange('heading', e.target.value)}
          />

          <Label>Column labels</Label>
          <Grid>
            {featureComparison.columns.map((column, index) => (
              <Card key={`${column}-${index}`}>
                <Label>Column {index + 1}</Label>
                <Input value={column} onChange={(e) => handleComparisonColumnChange(index, e.target.value)} />
              </Card>
            ))}
          </Grid>

          <Label>Rows</Label>
          <Grid>
            {featureComparison.rows.map((row, index) => (
              <Card key={`${row.feature}-${index}`}>
                <Label>Feature</Label>
                <Input
                  value={row.feature}
                  onChange={(e) => handleComparisonRowChange(index, 'feature', e.target.value)}
                />
                <Label>Values (one per line, matches columns)</Label>
                <Textarea
                  value={row.values.join('\n')}
                  onChange={(e) => handleComparisonRowChange(index, 'values', e.target.value)}
                  rows={3}
                />
              </Card>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Security & Integrations</SectionTitle>
          <Label>Security subtitle</Label>
          <Textarea
            value={formState.securitySubtitle}
            onChange={handleInputChange('securitySubtitle')}
            rows={2}
          />

          <Label>Security title</Label>
          <Input value={formState.securityTitle} onChange={handleInputChange('securityTitle')} />

          <Label>Security features</Label>
          <Grid>
            {securityFeatures.map((item, index) => (
              <Card key={`${item.title}-${index}`}>
                <Label>Icon key (shield, lock, user-check, key)</Label>
                <Input
                  value={item.icon}
                  onChange={(e) => handleSecurityFeatureChange(index, 'icon', e.target.value)}
                />
                <Label>Title</Label>
                <Input
                  value={item.title}
                  onChange={(e) => handleSecurityFeatureChange(index, 'title', e.target.value)}
                />
                <Label>Description</Label>
                <Textarea
                  value={item.description}
                  onChange={(e) => handleSecurityFeatureChange(index, 'description', e.target.value)}
                  rows={3}
                />
              </Card>
            ))}
          </Grid>

          <Label>Integration title</Label>
          <Input
            value={formState.securityIntegrationTitle}
            onChange={handleInputChange('securityIntegrationTitle')}
          />

          <Label>Integrations</Label>
          <Grid>
            {securityIntegrations.map((item, index) => (
              <Card key={`${item.title}-${index}`}>
                <Label>Icon key (plug, cloud)</Label>
                <Input
                  value={item.icon}
                  onChange={(e) => handleSecurityIntegrationChange(index, 'icon', e.target.value)}
                />
                <Label>Title</Label>
                <Input
                  value={item.title}
                  onChange={(e) => handleSecurityIntegrationChange(index, 'title', e.target.value)}
                />
                <Label>Description</Label>
                <Textarea
                  value={item.description}
                  onChange={(e) => handleSecurityIntegrationChange(index, 'description', e.target.value)}
                  rows={3}
                />
              </Card>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <Label>Title</Label>
          <Input value={formState.contactTitle} onChange={handleInputChange('contactTitle')} />

          <Label>Subtitle</Label>
          <Textarea value={formState.contactSubtitle} onChange={handleInputChange('contactSubtitle')} rows={3} />

          <Label>Button label</Label>
          <Input value={formState.contactButtonLabel} onChange={handleInputChange('contactButtonLabel')} />
        </Section>

        <Section>
          <SectionTitle>Footer</SectionTitle>
          <Label>Description</Label>
          <Textarea value={formState.footerDescription} onChange={handleInputChange('footerDescription')} rows={2} />

          <Label>Contact email</Label>
          <Input value={formState.footerEmail} onChange={handleInputChange('footerEmail')} />

          <Label>Website</Label>
          <Input value={formState.footerWebsite} onChange={handleInputChange('footerWebsite')} />

          <Label>Copyright</Label>
          <Input value={formState.footerCopyright} onChange={handleInputChange('footerCopyright')} />
        </Section>

        <Actions>
          <PrimaryButton type="submit">Save changes</PrimaryButton>
          <SecondaryButton type="button" onClick={handleReset}>
            Reset to defaults
          </SecondaryButton>
        </Actions>
      </Form>
    </Wrapper>
  );
};

export default ContentEditor;

const Wrapper = styled.div`
  padding: 120px 24px 48px;
  max-width: 1100px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.header`
  margin-bottom: 32px;

  h1 {
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.mutedText};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Section = styled.section`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 20px 20px 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Label = styled.label`
  display: block;
  margin: 8px 0 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 3px rgba(46, 115, 76, 0.15);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 3px rgba(46, 115, 76, 0.15);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 12px;
`;

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 12px;
  background: #f9fafb;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.08s ease;

  &:hover {
    background: #256d44;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SecondaryButton = styled.button`
  background: #fff;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 12px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.08s ease;

  &:hover {
    background: #f3f4f6;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export { ContentEditor };
