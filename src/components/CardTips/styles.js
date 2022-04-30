import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.textLight};
  padding: 20px;
  margin-bottom: 20px;
  position: relative;

  p {
    margin: 20px 0;
  }

  button {
    max-width: 100px;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
`;
