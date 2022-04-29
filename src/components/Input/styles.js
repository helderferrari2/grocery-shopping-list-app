import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  /* background-color: blue; */

  input {
    border: none;
    background: #f3f4f8;
    margin-bottom: 10px;
    border-radius: 20px;
    width: 100%;
    height: 44px;
    padding: 0 15px;

    &:focus {
      border: 2px solid ${darken(0.03, '#f3f4f8')};
    }
  }
`;
