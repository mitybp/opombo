import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { HeaderContainer, HeaderLogo, HeaderMenuButton, HeaderMenuContent, HeaderMenuLink } from "../styled";

const Header = () => {
  const [ddState, setDdState] = useState(false);

  return (
    <HeaderContainer>
      <HeaderLogo href="/">
        <img
          src="https://opomboapi.vercel.app/logo-circle.png"
          style={{ width: 55 }}
          alt="logo"
        />
        <span>
          O Pombo
        </span>
      </HeaderLogo>
      <div>
        <HeaderMenuButton
          onClick={() => setDdState(!ddState)}
        >
          {ddState ? (
            <X style={{ transform: "translateY(2px)" }} />
          ) : (
            <List style={{ transform: "translateY(2px)" }} />
          )}
        </HeaderMenuButton>
        <HeaderMenuContent
          style={{
            display: ddState ? "flex" : "none",
          }}
        >
          <HeaderMenuLink href="/sobre">
            Sobre
          </HeaderMenuLink>
          <HeaderMenuLink href="/pesquisar">
            Pesquisar
          </HeaderMenuLink>
          <HeaderMenuLink href="/salvos">
            Salvos
          </HeaderMenuLink>
          <HeaderMenuLink href="/autores">
            Autores
          </HeaderMenuLink>
          <HeaderMenuLink href="/projeto-doce-solidario">
            Projeto Doce Solidário
          </HeaderMenuLink>
          <HeaderMenuLink href="/blog">
            Blog
          </HeaderMenuLink>
          <HeaderMenuLink
            target="_blank"
            href="https://instagram.com/opombo.jornal"
          >
            Instagram
          </HeaderMenuLink>
        </HeaderMenuContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;
