import { CardAbout } from "./CardAout";
import { ContainerAbout, ContentAbout } from "./styles";

export function About() {
  return (
    <ContainerAbout id="about">
      <ContentAbout>
        <CardAbout variant="purple600" number="01" text="Inscrição por menos de R$1,00 real por dia." />
        <CardAbout variant="purple500" number="02" text="7 dias de garantia." />
        <CardAbout variant="purple300" number="03" text="Compra e acesso ao curso 100% seguros." />
      </ContentAbout>
    </ContainerAbout>
  )
}