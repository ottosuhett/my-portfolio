import styles from "./Card.module.scss"
export default function Card(props){
    return (
        <>
            <div className={`${styles.cardContainer} container-fluid`}>
                <div className="card">
                    <img src={props.imgUrl} className={`${styles.cardImg}  card-img-top `} alt={`${props.name}project img`} />
                    <div class={`${styles.cardBody} card-body`}>
                        <h5 className={`${styles.cardTitle} card-title`}>{props.name}</h5>
                        <p className={`${styles.cardText} card-text`}>{props.text}</p>
                        <div className={`${styles.techContainer}  card-text`}>
                            <h3 className={`${styles.techTitle}`}>Technologies:</h3>
                            <p className={`${styles.cardTechnologies}  card-text`}>{props.technologies}</p>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <a href={props.repoUrl} className="btn btn-dark" target="_blank">Github</a>
                            <a href={props.projectUrl} className="btn btn-dark" target="_blank">Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}