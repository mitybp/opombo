import { useState } from "react";
import { Bookmarks, List, MagnifyingGlass, X } from "@phosphor-icons/react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenuButton,
  HeaderMenuContent,
  HeaderMenuLink,
  HeaderBackButton,
} from "../styled";

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
        <span>O Pombo</span>
      </HeaderLogo>
      <div className="menuButtons">
        <HeaderMenuButton
          onClick={() => (document.location.pathname = "/pesquisar")}
          className="searchIcon"
        >
          <MagnifyingGlass style={{ transform: "translateY(2px)" }} />
          <span>Pesquisar</span>
        </HeaderMenuButton>
        <HeaderMenuButton
          onClick={() => setDdState(!ddState)}
          className="close-button"
        >
          {ddState ? (
            <X style={{ transform: "translateY(2px)" }} />
          ) : (
            <List style={{ transform: "translateY(2px)" }} />
          )}
        </HeaderMenuButton>
      </div>
      <HeaderMenuContent
        style={{
          transform: ddState ? "translateX(0)" : "translateX(1000px)",
        }}
      >
        <HeaderMenuLink href="/sobre">Sobre nós</HeaderMenuLink>
        <HeaderMenuLink href="/salvos">Matérias salvas</HeaderMenuLink>
        <HeaderMenuLink href="/espaco-aberto">Espaço Aberto</HeaderMenuLink>
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
      <HeaderBackButton
        style={{ display: ddState ? "block" : "none" }}
        onClick={() => setDdState(false)}
      />
    </HeaderContainer>
  );
};

export default Header;
