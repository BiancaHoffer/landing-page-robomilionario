import { ContainerBanner } from "./styles";
import { ButtonBuy } from "../ButtonBuy";

export function Banner() {
  return (
    <ContainerBanner id="/">
      <section>
        <h1>Crie seu Robô e Venda Todos os Dias no Piloto Automático!</h1>
        <ButtonBuy />
      </section>

      <section>
        <img src="/images/banner.png" />
      </section>
    </ContainerBanner>
  )
}