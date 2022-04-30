import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 10%);
  margin-bottom: 20px;

  a {
    flex: 1;
    padding: 20px;
  }

  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background: ${({ theme: { colors } }) => colors.background};
  }
`;
