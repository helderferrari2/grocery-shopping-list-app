import styled from 'styled-components';

export const Wrapper = styled.div`
  table {
    border-collapse: collapse;
    table-layout: auto;
    width: 100%;
    border-spacing: 0;

    tr {
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.background};

      /* :last-child {
        td {
          border-bottom: 0;
        }
      } */
    }

    td {
      width: 10%;
      padding: 1rem;

      &:nth-child(2) {
        width: 60%;
      }

      :last-child {
        text-align: end;
      }
    }
  }
`;
