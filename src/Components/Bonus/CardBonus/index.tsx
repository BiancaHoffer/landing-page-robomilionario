import { ContainerCardBonus } from "./styles";

interface CardBonusProps {
  text: string;
  title: string;
}

export function CardBonus({ text, title }: CardBonusProps) {
  return (
    <ContainerCardBonus>
      <span>BÔNUS</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </ContainerCardBonus>
  )
}