import { NavMenu, NavMenuItem } from "./styles";

export const NavMenuBox = () => {
  return (
    <>
      <NavMenu>
        <NavMenuItem href="/">Sobre</NavMenuItem>
        <NavMenuItem href="https://discord.com/invite/H9XrhE4c" target="_blank">
          Comunidade
        </NavMenuItem>
        <NavMenuItem href="/">Equipe</NavMenuItem>
        <NavMenuItem href="/">Contato</NavMenuItem>
      </NavMenu>
    </>
  );
};
