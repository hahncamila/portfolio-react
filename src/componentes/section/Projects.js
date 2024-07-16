import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'

function Projects(){
    return(
        <div id='projects' className={styles.projects}>
            <h2>Meus projetos</h2>
            <Card 
            img={lpdnc}
            title="link-personalizado-instagram"
            tech="HTML e CSS"
            description="Nessa página existem links que direcionam possíveis clientes ao WhatsApp já com uma mensagem personalizada."
            site=" "
            repo="https://github.com/hahncamila/link-personalizado-instagram"
            />
            <Card 
             img={portfolio}
             title="listagem-produtos"
             tech="HTML, CSS e JAVASCRIPT"
             description="Sistema de listagem de produtos onde é possível cadastrar novos produtos e deletar produtos cadastrados."
             site=" "
             repo="https://github.com/hahncamila/listagem-produtos"
             />
            <ButtonB text="Acesse meu repositório" link='https://github.com/hahncamila?tab=repositories'/>
        </div>
    )
}

export default Projects