import Link from "next/link";
import { ContainerBanner, ContentBanner } from "./styles";
import { LockSimple } from 'phosphor-react'
import { ButtonBuy } from "../ButtonBuy";

export function Banner() {
  return (
    <ContainerBanner id="/">
      <ContentBanner>
        <h1>Crie seu Robô e Venda Todos os <br /> Dias no Piloto Automático!</h1>
        <ButtonBuy />
      </ContentBanner>
    </ContainerBanner>
  )
}