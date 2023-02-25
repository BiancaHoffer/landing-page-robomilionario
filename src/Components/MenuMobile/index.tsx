import { Dispatch, SetStateAction, useRef, useState } from "react";
import { ContainerMenuMobile, LinkScroll } from "./styles";
import { X } from "phosphor-react";
import * as Scroll from 'react-scroll';

interface MenuMobilProps {
  isVisibleMenu: boolean;
  setisVisibleMenu: Dispatch<SetStateAction<boolean>>;
}

export function MenuMobile({ isVisibleMenu, setisVisibleMenu }: MenuMobilProps) {
  const [eventClick, setEventClick] = useState("click");

  function handleCloseMenu() {
    setisVisibleMenu(false);
  }



  return (
    <ContainerMenuMobile isVisible={isVisibleMenu}>
      <X size={30} onClick={() => handleCloseMenu()} />

      <nav>
        <section>
          <LinkScroll to="/" spy={true} smooth={true} offset={-100} duration={500} onClick={() => handleCloseMenu()}>Home</LinkScroll>
          <LinkScroll to="about" spy={true} smooth={true} offset={100} duration={500} onClick={() => handleCloseMenu()}>Sobre</LinkScroll>
          <LinkScroll to="bonus" spy={true} smooth={true} offset={100} duration={500} onClick={() => handleCloseMenu()}>Bônus</LinkScroll>
          <LinkScroll to="creator" spy={true} smooth={true} offset={-30} duration={500} onClick={() => handleCloseMenu()}>Quem é João Pedro?</LinkScroll>
          <LinkScroll to="promo" spy={true} smooth={true} offset={100} duration={500} onClick={() => handleCloseMenu()}><strong>Promoção!</strong></LinkScroll>
        </section>
      </nav>
    </ContainerMenuMobile>
  )
}