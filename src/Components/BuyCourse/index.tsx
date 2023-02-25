import { LockSimple } from "phosphor-react";
import { ButtonBuy } from "../ButtonBuy";
import { ContainerBuyCourse, ContentBuyCourse } from "./styles";

export function BuyCourse() {
  return (
    <ContainerBuyCourse id="promo">
      <ContentBuyCourse>
        <h2>Comece e aproveite esse desconto especial!</h2>
        <p>Se inscrevendo agora você garante o acesso ao incrível <strong>robô Milionário</strong> e <br /> aos <strong>Bônus Exclusivos</strong>!</p>

        <div className="section-values">
          <p>De: <del>R$997,00</del> por apenas:</p>
          <h3>12x de R$ 19,78</h3>
          <p>Ou à vista por <u>R$ 197,00</u></p>
        </div>

        <ButtonBuy />
      </ContentBuyCourse>
    </ContainerBuyCourse>
  )
}