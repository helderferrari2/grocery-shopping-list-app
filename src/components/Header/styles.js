import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 0 30px;
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: ${(props) => props.position || 'center'};
  align-items: center;
  flex: 1;
`;

export const AddListButton = styled.button`
  border: none;
  background-color: #f5ecff;
  color: #7267ef;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;
