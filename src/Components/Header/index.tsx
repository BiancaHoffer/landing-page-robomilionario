import { BaseHeader, ContainerHeader, ContentHeader, LinkScroll } from "./styles";
import { List } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  activeColorScroll: boolean;
  setisVisibleMenu: Dispatch<SetStateAction<boolean>>;
}

export function Header({ activeColorScroll, setisVisibleMenu }: HeaderProps) {
  return (
    <BaseHeader>
      <ContainerHeader activeColor={activeColorScroll}>
        <ContentHeader>
          <nav>
            <section>
              <LinkScroll to="/" spy={true} smooth={true} offset={-100} duration={500}>Home</LinkScroll>
              <LinkScroll to="about" spy={true} smooth={true} offset={100} duration={500}>Sobre</LinkScroll>
              <LinkScroll to="bonus" spy={true} smooth={true} offset={100} duration={500}>Bônus</LinkScroll>
              <LinkScroll to="creator" spy={true} smooth={true} offset={-30} duration={500}>Quem é João Pedro?</LinkScroll>
              <LinkScroll to="promo" spy={true} smooth={true} offset={100} duration={500}><strong>Promoção!</strong></LinkScroll>
            </section>

            <section onClick={() => setisVisibleMenu(true)}>
              <List size={30} />
            </section>
          </nav>
        </ContentHeader>
      </ContainerHeader>
    </BaseHeader>
  )
}