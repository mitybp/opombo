import { useState } from "react";
import { List, MagnifyingGlass, X } from "@phosphor-icons/react";
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
        <HeaderMenuButton style={{marginRight: 4}} onClick={()=>document.location.pathname="/pesquisar"}>
          <MagnifyingGlass style={{ transform: "translateY(2px)" }} />
        </HeaderMenuButton>
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
            Sobre nós
          </HeaderMenuLink>
          <HeaderMenuLink href="/salvos">
            Salvos
          </HeaderMenuLink>
          {/* <HeaderMenuLink href="/cargos">
            Cargos
          </HeaderMenuLink> */}
          <HeaderMenuLink href="/blog">
            Blog
          </HeaderMenuLink>
          <HeaderMenuLink href="/galeria">
            Galeria de fotos
          </HeaderMenuLink>
          <HeaderMenuLink href="/interclasse">
            Interclasse
          </HeaderMenuLink>
          <hr/>
          <HeaderMenuLink
            target="_blank"
            href="https://instagram.com/opombo.jornal"
          >
            Instagram
          </HeaderMenuLink>
          <HeaderMenuLink
            target="_blank"
            href="https://colegiointegral.com.br"
          >
            Colégio Integral
          </HeaderMenuLink>
        </HeaderMenuContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;
