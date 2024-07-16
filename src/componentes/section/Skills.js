import styles from './Skills.module.css'
import html from '../../image/skill/html.svg'
import css from '../../image/skill/css.svg'
import javascript from '../../image/skill/javascript.svg'
import react from '../../image/skill/react.svg'

function Skills(){
    return(
        <div className={styles.skill} id="habilidades" >
            <h2>Minhas habilidades</h2>
            <p> Conheça um pouco das minhas principais habilidades e conhecimentos. </p>
            <div>
                <img src={html}></img>
                <img src={css}></img>
                <img src={javascript}></img>
                <img src={react}></img>
            </div>
        </div>
    )
}

export default Skills