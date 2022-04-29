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
    margin-bottom: ${({ theme }) => theme.spacing.margin};
  }

  p {
    font-size: 14px;
    margin-bottom: ${({ theme }) => theme.spacing.margin};
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      border: none;
      background: rgba(232, 240, 254);
      margin-bottom: ${({ theme }) => theme.spacing.margin};
      border-radius: 20px;
      height: 44px;
      padding: 0 15px;

      &:focus {
        /* border: 2px solid ${({ theme }) => theme.colors.primary}; */
      }
    }

    button {
      border: none;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      margin-bottom: ${({ theme }) => theme.spacing.margin};
      border-radius: 20px;
      height: 44px;
      padding: 0 15px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7267EF')};
      }
    }
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
