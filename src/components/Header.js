import { useState } from "react";
import { Bookmarks, List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { HeaderContainer, HeaderLogo, HeaderMenuButton, HeaderMenuContent, HeaderMenuLink } from "../styled";

const Header = () => {
  const [ddState, setDdState] = useState(false);
  return (
    <HeaderContainer>
      <HeaderLogo href="/">
        <img
          src="https://opomboapi.vercel.app/logo-circle.png"
          style={{ width: 40 }}
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
            transform: ddState ? "translateX(0)" : "translateX(500px)",
          }}
        >
          <HeaderMenuLink href="/sobre">
            Sobre nós
          </HeaderMenuLink>
          <HeaderMenuLink href="/salvos">
            Matérias salvas
          </HeaderMenuLink>
          <HeaderMenuLink href="/espaco-aberto">
            Espaço Aberto
          </HeaderMenuLink>
          <HeaderMenuLink
            target="_blank"
            href="https://instagram.com/opombo.jornal"
          >
            Instagram
          </HeaderMenuLink>
          <HeaderMenuLink
            target="_blank"
            href="https://youtube.com/@opombojornal"
          >
            Podcast
          </HeaderMenuLink>
        </HeaderMenuContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;
