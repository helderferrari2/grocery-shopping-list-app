import styled from 'styled-components';

export const Wrapper = styled.div`
  input {
    border: none;
    background: ${({ theme: { colors } }) => colors.background};
    margin-bottom: 20px;
    border-radius: 20px;
    width: 100%;
    height: 44px;
    padding: 0 15px;
    font-size: 1rem;
  }
`;
