import { CaretUp } from "phosphor-react";
import { Link } from "react-scroll";
import { ContainerFooter } from "./styles";

export function Footer() {
  return (
    <ContainerFooter>
      <div />
      <p>© Todos os Direitos Reservados</p>
      <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
        <CaretUp size={30} />
      </Link>
    </ContainerFooter>
  )
}