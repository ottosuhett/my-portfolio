import styles from "./Footer.module.scss"
export default function Footer(){
    return (
        <>
            <div>
                <nav className="nav-bar">
                    <div className="container-fluid">
                        <ul className= {` ${styles.itemsContainer}`} id="contact">
                            <li className="nav-item">
                                <a className={`${styles.navItem} nav-link`} aria-current="page" href="https://www.instagram.com/ottosuhett/" target= "_blank">
                                    <i className={`${styles.bi} bi bi-instagram`}></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`${styles.navItem} nav-link`} aria-current="page" href="mailto:ottosuhett@gmail.com" target= "_blank">
                                    <i className={`${styles.bi} bi bi-envelope-at`}></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`${styles.navItem} nav-link`} aria-current="page" href="https://www.linkedin.com/in/ottopereira/" target= "_blank">
                                    <i className={`${styles.bi} bi-linkedin`}></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`${styles.navItem} nav-link`} aria-current="page" href="https://github.com/ottosuhett" target= "_blank">
                                    <i className={`${styles.bi} bi bi-github`}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}