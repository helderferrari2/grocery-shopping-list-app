import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 315px;
  width: 100%;
  text-align: center;

  img {
    max-width: 45px;
    max-height: 45px;
    object-fit: contain;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
