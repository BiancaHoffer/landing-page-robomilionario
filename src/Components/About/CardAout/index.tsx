import { ContainerCardAbout } from "./styles";

interface CardAboutProps {
  variant: 'purple600' | 'purple500' | 'purple300';
  number: string;
  text: string;
}

export function CardAbout({ variant, number, text }: CardAboutProps) {
  return (
    <ContainerCardAbout variant={variant}>
      <span>{number}</span>
      <div>
        <p>{text}</p>
      </div>
    </ContainerCardAbout>
  )
}