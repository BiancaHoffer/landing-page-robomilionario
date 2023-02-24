import Link from "next/link";
import { LockSimple } from "phosphor-react";
import { ContainerButtonBuy } from "./styles";

export function ButtonBuy() {
  return (
    <ContainerButtonBuy>
      <Link href="*">
        Quero me inscrever
      </Link>

      <span>
        <LockSimple size={16} weight='fill' />
        Você será redirecionado para um ambiente seguro.
      </span>
    </ContainerButtonBuy>
  )
}