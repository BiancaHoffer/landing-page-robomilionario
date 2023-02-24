import { LockSimple } from "phosphor-react";
import { ButtonBuy } from "../ButtonBuy";
import { ContainerBuyCourse } from "./styles";

export function BuyCourse() {
  return (
    <ContainerBuyCourse>
      <h2>COMECE E APROVEITE ESSE DESCONTO ESPECIAL!</h2>
      <p>Se inscrevendo agora você garante o acesso ao incrível <strong>robô Milionário</strong> e aos <strong>Bônus Exclusivos</strong>!</p>

      <div>
        <p>De: <del>R$997,00</del> por apenas:</p>
        <h3>12x de R$ 19,78</h3>
        <p>Ou à vista por <u>R$ 197,00</u></p>
      </div>
      <ButtonBuy />
    </ContainerBuyCourse>
  )
}