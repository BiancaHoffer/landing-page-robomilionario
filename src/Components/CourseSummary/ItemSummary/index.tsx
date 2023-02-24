import { Check } from 'phosphor-react';
import { ContainerItemSummary } from './styles';

interface ItemSummaryProps {
  text: string;
}

export function ItemSummary({ text }: ItemSummaryProps) {
  return (
    <ContainerItemSummary>
      <span>
        <Check size={30} color="#8E89FF" />
      </span>


      {text}
    </ContainerItemSummary>
  )
}