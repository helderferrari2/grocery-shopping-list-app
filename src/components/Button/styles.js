import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 20px;
  border-radius: 20px;
  height: 44px;
  padding: 0 15px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: ${darken(0.03, '#7267EF')};
  }
`;
