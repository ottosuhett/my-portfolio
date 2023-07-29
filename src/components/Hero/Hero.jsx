import styles from "./Hero.module.scss"
export default function Hero(){
    return (
        <>
            <div className={`${styles.heroContainer} container-fluid`}>
                <video autoPlay loop muted playsInline  className={styles.hero}>
                    <source src="./hero.mp4" type="video/mp4"/>
                    <source src="./hero.webm" type="video/webm" /> 
                    <source src="./hero.ogv" type="video/ogv" />
                    <p>Your browser does not support video playback.</p>
                </video>
            </div>
        </>
    )
}