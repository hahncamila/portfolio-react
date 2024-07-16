import ButtonA from '../elements/ButtonA';
import styles from './Presentation.module.css';
function Presentation(){
    return(
        <div className={styles.presentation} id="apresentacao">
            <h4><strong>Bem-vinda ao meu Portfólio</strong></h4>
            <h1> Olá, eu me chamo Camila!</h1>
            <p>Sou formada em Técnico em Informática pelo IFRS-Campus Feliz, Bacharela em Educação Física pela Unisinos e atualmente estudante de Análise e Desenvolvimento de Sistemas pela Estácio. Nessas áreas tive a oportunidade de experienciar dois mundos, com características muito particulares, mas que me ensinaram coisas que ambas exigem em comum: criatividade, atenção, disciplina e muito estudo para estar sempre atualizada. Porém, não sentia que a Educação Física era algo que me realizava profissionalmente. Com isso, surgiu o desejo de voltar para a área da tecnologia. E para que essa transição de carreira se tornasse possível, atualmente estou cursando Análise e Desenvolvimento de Sistemas pela Estácio e também realizando o curso de Desenvolvedor Front-end da Escola DNC.</p>
            <ButtonA link="https://www.linkedin.com/in/camilahahn/" text='Conecte-se comigo!' />
        </div>
    )
}

export default Presentation