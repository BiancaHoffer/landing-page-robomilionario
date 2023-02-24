import Link from "next/link";
import { LockSimple } from "phosphor-react";
import { ContainerButtonBuy } from "./styles";

export function ButtonBuy() {
  return (
    <ContainerButtonBuy>
      <Link href="https://app.monetizze.com.br/r/AZW8291094?u=c&pl=EX135769">
        Quero me inscrever
      </Link>

      <span>
        <LockSimple size={16} weight='fill' />
        Você será redirecionado para um ambiente seguro.
      </span>
    </ContainerButtonBuy>
  )
}