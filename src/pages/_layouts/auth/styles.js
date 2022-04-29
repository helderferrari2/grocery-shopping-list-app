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
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      border: none;
      background: #f3f4f8;
      margin-bottom: 10px;
      border-radius: 20px;
      height: 44px;
      padding: 0 15px;

      &:focus {
        border: 2px solid #7267ef;
      }
    }

    button {
      border: none;
      background: #7267ef;
      color: #f3f4f8;
      margin-bottom: 10px;
      border-radius: 20px;
      height: 44px;
      padding: 0 15px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7267ef')};
      }
    }
  }

  a {
    color: #333;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
