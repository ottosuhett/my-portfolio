import styles from "./Skills.module.scss"
export default function Skills(){
    return(
        <div className={`${styles.skillsContainer} container-fluid`} id="skills">
            <div className={`${styles.skillsTitleContainer}`}>
                <p className={`${styles.skillsTitle}`}>Skills</p>
            </div>
            <div className={`${styles.imgContainer}`}>
                <i className={`${styles.img} devicon-html5-plain-wordmark colored`}></i>
                <i className={`${styles.img} devicon-css3-plain-wordmark colored`}></i>
                <i className={`${styles.img} devicon-javascript-plain colored`}></i>
                <i className={`${styles.img} devicon-react-original-wordmark colored`}></i>
                <i className={`${styles.img} devicon-sass-original colored`}></i>
                <i className={`${styles.img} devicon-bootstrap-plain-wordmark colored`}></i>
            </div>
            
        </div>
    )
}