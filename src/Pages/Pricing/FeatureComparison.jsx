import styled from 'styled-components';
import FadeIn from '../../Components/FadeIn';
import { motion } from 'framer-motion';

const features = [
  ['Connected inboxes', '1 inbox', 'Multiple inboxes', 'Multiple inboxes + command dashboard'],
  ['Keeps inboxes organized', '✓', '✓', '✓'],
  ['Sorts and labels every email', '✓', '✓', '✓'],
  ['Drafts replies in your tone', '✓', '✓', '✓'],
  ['Weekly report card', '✓', '✓', '✓'],
  ['Security & data residency options', '✓', '✓', '✓'],
  ['Personalized onboarding', '–', '✓', '✓'],
  ['Morning Brief', '–', '✓', '✓'],
  ['Shared team dashboards', '–', '✓', '✓'],
  ['Custom tone profiles', '–', '✓', '✓'],
  ['AI-generated team briefs', '–', '✓', '✓'],
  ['Dedicated AI Innovation Team consultation', '–', '–', '✓'],
  ['Custom workflow integrations', '–', '–', '✓'],
  ['Priority support & optimization', '–', '–', '✓'],
];

export default function FeatureComparison() {
  return (
    <FadeIn y={40}>
      <Wrap>
        <h2>Compare plans at a glance</h2>
        <p className="lede">What every team gets from Bluebird AGI — and where the upgrades elevate your focus.</p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th>Business</th>
                  <th>Executive</th>
                </tr>
              </thead>
              <tbody>
                {features.map(([name, basic, business, exec], i) => (
                  <tr key={i}>
                    <td>{name}</td>
                    <td>{basic}</td>
                    <td>{business}</td>
                    <td>{exec}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </motion.div>
      </Wrap>
    </FadeIn>
  );
}

/* =================== STYLES =================== */

const Wrap = styled.section`
  padding: 3rem 1rem 4rem;
  background: linear-gradient(180deg, #f7faff 0%, #ffffff 90%);
  color: ${(p) => p.theme.colors.deepBlue};
  text-align: center;
  overflow: hidden;

  h2 {
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }

  .lede {
    margin: 0 auto 1.5rem;
    max-width: 720px;
    color: ${(p) => p.theme.colors.mutedText};
    line-height: 1.6;
  }
`;

const TableWrapper = styled.div`
  max-height: 420px; /* ✅ vertical scroll only */
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  margin-top: 1.25rem;
  border-radius: 16px;
  border: 1px solid rgba(35, 66, 97, 0.12);
  box-shadow: 0 12px 30px rgba(15, 39, 68, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.9);
  table-layout: auto; /* ✅ allows text wrapping */
  word-wrap: break-word;

  th,
  td {
    padding: 1rem 0.5rem;
    word-break: break-word; /* ✅ prevents long text overflow */
    white-space: normal;
  }

  th {
    position: sticky;
    top: 0;
    z-index: 5;
    background: linear-gradient(120deg, #f3f7fb, #e9f2ff);
    color: ${(p) => p.theme.colors.deepBlue};
    font-weight: 600;
    border-bottom: 1px solid rgba(35, 66, 97, 0.15);
  }

  td {
    border-bottom: 1px solid rgba(35, 66, 97, 0.1);
    color: ${(p) => p.theme.colors.deepBlue};
    vertical-align: top;
  }

  tr:nth-child(even) td {
    background: #f8fbff;
  }

  tr:hover td {
    background: #edf4ff;
  }

  th:first-child,
  td:first-child {
    width: 45%;
    text-align: left;
  }

  th:not(:first-child),
  td:not(:first-child) {
    width: 18%;
    text-align: center;
  }

  /* ✅ MOBILE OPTIMIZATION */
  @media (max-width: 768px) {
    font-size: 0.8rem;

    th,
    td {
      padding: 0.6rem 0.4rem;
    }

    th:first-child,
    td:first-child {
      width: 50%;
    }

    th:not(:first-child),
    td:not(:first-child) {
      width: 16%;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;

    th {
      padding: 1rem 0.3rem;
    }
    td {
      padding: 0.5rem 0.3rem;
    }

    /* ✅ slightly reduce first column width to fit narrow screens */
    th:first-child,
    td:first-child {
      width: 25%;
    }

    th:not(:first-child),
    td:not(:first-child) {
      width: 25%;
    }
  }
`;
