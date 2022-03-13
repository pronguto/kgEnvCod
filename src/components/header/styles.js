import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const Logo = styled.img`
  max-width: 50px;
`;
export const NavMenu = styled.nav`
  display: flex;
  gap: 32px;
`;
export const NavMenuItem = styled.nav`
  font-family: "Sarala", sans-serif;
  color: white;
  font-weight: 400px;
  font-size: 18px;
  &:hover {
    color: rgba(236, 214, 196, 0.53);
    transition: color 0.5s;
  }
`;
