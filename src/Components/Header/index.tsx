import { ContainerHeader, ContentHeader, LinkScroll } from "./styles";

interface HeaderProps {
  activeColorScroll: boolean;
}

export function Header({ activeColorScroll }: HeaderProps) {
  return (
    <ContainerHeader activeColor={activeColorScroll}>
      <ContentHeader>
        <nav>
          <LinkScroll to="/" spy={true} smooth={true} offset={0} duration={500}>Home</LinkScroll>
          <LinkScroll to="about" spy={true} smooth={true} offset={50} duration={500}>Sobre</LinkScroll>
          <LinkScroll to="bonus" spy={true} smooth={true} offset={-100} duration={500}>Bônus</LinkScroll>
          <LinkScroll to="creator" spy={true} smooth={true} offset={-60} duration={500}>Quem é João Pedro?</LinkScroll>
        </nav>
      </ContentHeader>
    </ContainerHeader>
  )
}