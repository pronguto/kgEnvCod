import { Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import BallLogo from "../../assets/kgLogoBall.png";
import { ModalLink } from "./ModalLinks";
import { NavMenuBox } from "./NavMenuBox";
import { Container, Logo } from "./styles";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <>
      <ModalLink onClose={onClose} isOpen={isOpen} />
      <Container>
        <Link to="/">
          <Logo src={BallLogo} alt="Logo" />
        </Link>
        {isLargerThan500 ? (
          <NavMenuBox />
        ) : (
          <Flex
            onClick={onOpen}
            cursor="pointer"
            width="50px"
            height="50px"
            justifyContent="center"
          >
            <FiMenu color="white" size="45" />
          </Flex>
        )}
        {/* <NavMenu>
        <NavMenuItem href="/">Sobre</NavMenuItem>
        <NavMenuItem href="https://discord.com/invite/H9XrhE4c" target="_blank">
          Comunidade
        </NavMenuItem>
        <NavMenuItem href="/">Equipe</NavMenuItem>
        <NavMenuItem href="/">Contato</NavMenuItem>
      </NavMenu> */}
      </Container>
    </>
  );
};
