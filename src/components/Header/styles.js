import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px;

  a {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme: { colors } }) => colors.primaryLight};
    border-radius: 50%;
    padding: 2px;

    > svg {
      width: 20px;
      height: 20px;
      vertical-align: text-bottom;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: ${(props) => props.position || 'center'};
  align-items: center;
  flex: 1;
`;
