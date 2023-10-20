import styled from 'styled-components';

//* Body
export const Container = styled.div`
    text-align: justify;
    margin: 20px 20% 40px 20%;
    font-size: 18px;

    &p{
        padding: 4px 0;
        font-size: 18px;
    }
    @media (max-width: 550px) {
        margin-inline: 14px;
    }
`
export const Button = styled.button && styled.a`
    background-color: #f4f4f4;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    outline: none;
`

export const Input = styled.input`
    background-color: #f4f4f4;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    color: #000;
    outline: none;
    width: 100%;
`
//* Card
export const CardList = styled.div`
    padding: 14px 20%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 14px;

    @media (max-width: 550px) {
        padding: 14px;
    }
`
export const CardContainer = styled.div`
    border: 1px solid #ccc;
    background-color: #f4f4f4;
    padding: 20px;
    width: 28rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (max-width: 300px) {
        width: 100%;
    }
    @media (max-width: 550px) {
        width: 80%;
    }
`
export const CardTag = styled.p`
    position: absolute;
    transform: translate(-25px, -25px);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 14px;
`
export const CardTitle = styled.a`
    margin-top: 10px;
    font-size: 26px;
    color: #000;
    text-decoration: none;
    font-style: bold;
    &:hover{
        color: #333;
    }

    @media (max-width: 400px) {
        font-size: 22px;
    }
`
export const CardSimple = styled.a`
    font-size: 20px;
    color: #444;
    text-decoration: none;
    border: 1px solid #ccc;
    background-color: #f4f4f4;
    padding: 20px;
    width: 28rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    &:hover{
        color: #333;
    }

    @media (max-width: 300px) {
        width: 100%;
    }
    @media (max-width: 550px) {
        width: 80%;
    }
`
export const CardInfos = styled.a`
    color: #444;
    text-decoration: none;
`

//* Bio
export const BioContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10% 0;
`
export const BioDivisor = styled.div`
    margin: 40px;
    border: 1px solid #ccc;
    width: 60%;
`
export const BioButton = styled.a`
    background-color: #f4f4f4;
    width: 80%;
    text-align: center;
    margin: 5px 0;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    color: #000;
    text-decoration: none;
`

//* Home
export const HomeDropdownButton = styled.button`
    margin: 10px;
    margin-top: 0;
    align-items: center;
    gap: 10px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 40px;
    display: flex;
    font-size: 15px;
    padding: 0 10px;
    cursor: pointer;
`
export const HomeDivisor = styled.div`
    border-bottom: 1px solid #ccc;
    margin: 10px;
`

//* Post
export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`
export const PostTag = styled.p`
    padding: 4px 8px;
    border-radius: 8px;
    margin-inline: 20%;
    
    @media (max-width: 550px) {
        margin-inline: 14px;
    }
`
export const PostButton = styled.button`
    background-color: #f4f4f4;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;
    height: 40px;
    width: auto;
    color: #000;
`
export const PostTitle = styled.h1`
    margin-inline: 20%;

    @media (max-width: 550px) {
        margin-inline: 14px;
    }
`
export const PostInfo = styled.div && styled.p`
    margin-inline: 20%;

    @media (max-width: 550px) {
        margin-inline: 14px;
    }
`
export const PostCredit = styled.p`
    padding: 6px 0;
`
export const PostSpeechButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    button{
        border: none;
        outline: none;
        font-size: 18px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        width: 40px;
        height: 40px;
        &:first-child{
            border-right: 1px solid #ccc;
        }
    }
`
export const PostShareBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-direction: row;
    width: 120px;
    height: 40px;
    cursor: pointer;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 8px;
    a, button{
        color: #000;
        background-color: transparent;
        padding: 10px;
        outline: none;
        text-decoration: none;
        width: 40px;
        height: 40px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-right: 1px solid #ccc;
        &:last-child{
            border: none;
        }
    }
`
export const PostGoTopButton = styled.a`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 4px;
    color: #000;
`

//* Search
export const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
`
export const SearchButton = styled.button`
    background-color: #f4f4f4;
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    outline: none;
    border-right: 0;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`
export const SearchInput = styled.input`
    height: 40px;
    border: 1px solid #ccc;
    padding: 10px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;
    width: 100%;
`
export const SearchButtonFilter = styled.button`
    background-color: #f4f4f4;
    height: 40px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding-inline: 12px;
`

//* Header
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 999;
    border-bottom: 1px solid #ccc;
    padding: 0 40px;

    @media (max-width: 500px) {
        padding: 0 10px;
    }
`
export const HeaderLogo = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 24px;
    color: #000;
    text-decoration: none;

    &:hover{
        color: #000;
    }

    @media (max-width: 400px) {
        span{
            display: none;
        }
    }
`
export const HeaderMenuButton = styled.button`
    width: 40px;
    height: 40px;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 18px;
`
export const HeaderMenuContent = styled.div`
    position: absolute;
    top: 70px;
    right: 40px;
    width: 18rem;
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    flex-direction: column;
    gap: 10px;
    z-index: 999;
    display: flex;
    transform: translateX(500px);
    transition: 0.2s all ease-in-out;

    @media (max-width: 550px){
        width: auto;
        right: 10px;
        left: 10px;
    }
`
export const HeaderMenuLink = styled.a`
    color: #222;
    text-decoration: none;
`

//* Loading
export const LoadingContainer = styled.div`
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffffaa;

    h1{
        background-color: #DBBAA9;
        padding: 8px 16px;
        border-radius: 8px;
    }
`

//* Scroll Indicator
export const ScrollIndictorContainer = styled.div`
    width: 100%;
    height: 8px;
    background-color: transparent;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
`
