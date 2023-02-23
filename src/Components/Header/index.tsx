import { ContainerHeader, ContentHeader } from "./styles";

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Bônus</a>
          <a href="#">Quem é João Pedro?</a>
        </nav>
      </ContentHeader>
    </ContainerHeader>
  )
}