import Link from "next/link";
import { ContainerBanner, ContentBanner } from "./styles";
import { LockSimple } from 'phosphor-react'

export function Banner() {
  return (
    <ContainerBanner>
      <ContentBanner>
        <h1>Crie seu Robô e Venda Todos os <br /> Dias no Piloto Automático!</h1>

        <Link href="*">
          Quero me inscrever
        </Link>

        <span>
          <LockSimple size={16} weight='fill' />
          Você será redirecionado para um ambiente seguro.
        </span>
      </ContentBanner>
    </ContainerBanner>
  )
}