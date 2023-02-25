import { ItemSummary } from "./ItemSummary";
import { ContainerCourseSummary, ContainerSummary, ContentCourseSummary } from "./styles";

export function CourseSummary() {
  return (
    <ContainerCourseSummary>
      <ContentCourseSummary>
        <h2>Veja um pouco do que<strong> você vai aprender</strong></h2>

        <ContainerSummary>
          <ItemSummary text="Você Vai Aprender, de Maneira Fácil e Prática Encontrar Seus Clientes Em Potenciais." />
          <ItemSummary text="Estratégias e Métodos para Você Potencializar Seus Resultados! Fique Tranquilo, Você Vai Aprender Tudo do Absoluto Zero." />
          <ItemSummary text="Como Funciona o Mercado Digital, por Que Ele é Tão Bom e Qual o Mindset Que Você Precisará Ter para Começar a Empreender." />
          <ItemSummary text="Como Definir o Seu Segmento de Mercado e Quais os Melhores Produtos para Você Se Afiliar e Vender." />
          <ItemSummary text="O Passo a Passo de Como Usar a Arma Mais Poderosa das Vendas na Internet e Como Aplicar Em Seu Nicho de Mercado." />
          <ItemSummary text="Copy e Gatilhos Mentais Mais Poderosos." />
          <ItemSummary text="Dicas e Sacadas Adicionais Que Vão Te Motivar e Aumentarão o Seu Potencial Diante de Tudo o Que Aprendeu Até o Momento." />
          <ItemSummary text="Como Criar Conteúdo de Qualidade." />
          <ItemSummary text="Como Construir Seu Público Em Todas as Redes Sociais, Gerando Pessoas Interessadas Todos os Dias Com Técnicas Já Testadas e Comprovadas de Modo Orgânico e Pago." />
          <ItemSummary text="Passo a Passo Simples, Que Pode Ser Implementado por Qualquer Pessoa, Mesmo Que Não Tenha Conhecimento Algum Com Marketing Digital." />
          <ItemSummary text="Como Construir Seu Robô Passo a Passo, a Melhor Técnica Para Vender Hoje Como Afiliado!" />
        </ContainerSummary>
      </ContentCourseSummary>
    </ContainerCourseSummary>
  )
}