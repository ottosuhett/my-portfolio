import styles from "./About.module.scss"
export default function About(){
    return(
        <div>
            <div className={`${styles.aboutContainer} container-fluid`} id="about">
                <div className={`${styles.imgAboutContainer} container-fluid`}>
                    <img src="./Foto.png" alt="bio-avatar" className={`${styles.img} img-fluid`} />
                </div>
                <p className={`${styles.text}`}>Software Engineering student and Frontend Developer constantly evolving and exploring the realms of HTML, CSS, JavaScript, React, Sass and Bootstrap. Enthusiastic about crafting user-centric web experiences and eager to collaborate on innovative projects that push the boundaries of technology.<br></br></p>
            </div>
            <div  className={`${styles.msgAboutContainer} container-fluid`}>
                <p className={`${styles.msg} container-fluid`}>Let's connect and build something amazing together! </p>
            </div>
        </div>
        
    )
}