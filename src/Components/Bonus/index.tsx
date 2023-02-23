import { CardBonus } from "./CardBonus";
import { ContainerBonus, ContentCardBonus } from "./styles";

export function Bonus() {
  return (
    <ContainerBonus>
      <h2><strong>+ 10 BÔNUS EXCLUSIVOS PARA VOCÊ</strong> <br />  SE INSCREVER HOJE!</h2>

      <ContentCardBonus>
        <CardBonus title="Template de alta conversão" text="Você terá acesso a um modelo de robô que me fez gerar mais de R$1.000.000,00 em vendas, se você fosse pagar algum profissional para fazer esse template pra você, iria custar pelo menos R$5.000,00 e hoje você vai ser seu de graça! Com esse template basta você copiar e colar e ver os resultados aparecerem" />
        <CardBonus title="Auas ao vivo em grupo" text="Você e todos os outros alunos terão uma aula ao vivo comigo em grupo em uma sala online e poderão tirar todas as suas dúvidas sobre o conteúdo, essa aula acontece mensalmente. Como eu já disse, o valor da minha consultoria é de R$10.000,00 por mês, então imagine o valor deste bônus!" />
        <CardBonus title="Facebook ADS para afiliados" text="Você vai aprender a atingir milhares de pessoas com anúncios específicos, escalando suas vendas cada dia mais! Estratégia única, para você utilizar o máximo dos seus clientes" />
        <CardBonus title="Instagram ADS para afiliados" text="Como utilizar o Instagram como grande ferramenta de divulgação, vendas, geração de conversão, autoridade e muito mais. Descubra aqui o passo a passo exato para: Gerar Toneladas De Tráfego para seu site; Construir Autoridade; Fazer Vendas Como Afiliado; Construir Lista; E Muito Mais…" />
        <CardBonus title="YouTube para afiliados" text="Utilize o YouTube como uma ferramenta de trabalho para alavancar as suas vendas, aprenda todos os segredos dos vídeos e o melhor, você não precisa aparecer em nenhum!" />
        <CardBonus title="Google ADS para afiliados" text="Como Anunciar no Google Ads Como Afiliado. Como fazer para anunciar com site próprio e sem site próprio. Descubra os Melhores Produtos para anunciar (muito importante!)." />
        <CardBonus title="Fómula dos digitais influencers" text="Como trabalhar com digital influencers, youtubers, instagrammers, entre outros. Vou te explicar como conseguir tráfego muito barato dessas pessoas e obter um ótimo retorno. Vou te passar modelo de emails, mensagens, média de valores, tudo para facilitar sua vida, tudo mastigado." />
        <CardBonus title="Canal secreto no Telegram" text="Você terá acesso a um canal exclusivo onde você terá acesso a pessoas que assim como você tem negócios online e isso tem um valor infinito. É nesse tipo de grupo que a mágica acontece, lá é onde você vai conhecer os maiores afiliados do Brasil e vai ser ajudado todos os dias, sem ter que pagar um centavo a mais por isso." />
        <CardBonus title="Afiliação de produtos exclusivos" text="Ao se inscrever você terá acesso a produtos ocultos nas plataformas de afiliados, ou seja, terá acesso a produtos que não estão visíveis para todos os afiliados que acessam as plataformas. Esses produtos são de altíssima conversão e muito fáceis de vender, além disso você como aluno receberá uma comissão diferenciada para que possa maximizar seus lucros." />
        <CardBonus title="Comissões exclusivas" text="Você terá acesso a produtos exclusivos com comissões diferenciadas! Isso vai facilitar muito seu trabalho, você vai receber no mínimo 50% de comissão em produtos que ninguém no mercado tem acesso, além de todo material necessário pra você divulgar!" />
      </ContentCardBonus>
    </ContainerBonus>
  )
}