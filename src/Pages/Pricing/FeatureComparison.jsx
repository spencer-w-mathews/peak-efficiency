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
        <h2>Compare Plans</h2>

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
  padding: 4rem 1rem;
  background: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.deepBlue};
  text-align: center;
  overflow: hidden;
`;

const TableWrapper = styled.div`
  max-height: 400px; /* ✅ vertical scroll only */
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  margin-top: 2rem;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.gray};
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 0.95rem;
  background: white;
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
    background: ${(p) => p.theme.colors.slate};
    color: ${(p) => p.theme.colors.deepBlue};
    font-weight: 600;
    border-bottom: 1px solid ${(p) => p.theme.colors.gray};
  }

  td {
    border-bottom: 1px solid ${(p) => p.theme.colors.gray};
    color: ${(p) => p.theme.colors.deepBlue};
    vertical-align: top;
  }

  tr:nth-child(even) td {
    background: #fafbfc;
  }

  tr:hover td {
    background: #f1f4f8;
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
