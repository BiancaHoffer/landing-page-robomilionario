import { ContainerBanner, ContentBanner, ContentImage } from "./styles";
import { ButtonBuy } from "../ButtonBuy";

export function Banner() {
  return (
    <ContainerBanner id="/">
      <ContentBanner>
        <h1>Crie seu Robô e Venda Todos os <br /> Dias no Piloto Automático!</h1>
        <ButtonBuy />
        <ContentImage />
      </ContentBanner>
    </ContainerBanner>
  )
}