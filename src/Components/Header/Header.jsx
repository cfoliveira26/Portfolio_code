import * as S from "./Header_style.jsx"

export default function Header(){
    return(
        <S.Header>
        <S.Header_Logo src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
         alt="Imagem logo do site em cor azul claro" />
        <S.Header_Nav>
            <ul>
               <a href="#">
                 <li>Sobre Mim</li>
                </a>
                <a href="#"> 
                <li>Projetos</li>
                </a>
                <a href="#">
                <li>Skills</li>
                </a>
                <a href="#">
                <li>Contato</li>
                </a>
            </ul>
        </S.Header_Nav>
        <S.Header_Button>Download CV</S.Header_Button>
        </S.Header>
    )
}