import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 98%;
  @media screen and (min-width: 500px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.img`
  max-width: 50px;
`;
export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;
export const NavMenuItem = styled.a`
  font-family: "Sarala", sans-serif;
  color: black;
  font-weight: 400px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: rgba(236, 214, 196, 0.53);
    transition: color 0.5s;
  }
  @media screen and (min-width: 500px) {
    color: white;
  }
`;
