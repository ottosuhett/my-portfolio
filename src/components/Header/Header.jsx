import styles from "./Header.module.scss"
export default function Header(){
    return (
        <>
            <nav className={`${styles.mainContainer} navbar navbar-expand-sm`}>
                <div className="container-fluid">
                    <a className={`${styles.navBrand} navbar-brand `} href="#">
                        <img className="img-fluid" src="./logo.png" alt="logo"></img>
                    </a>
                    <button className={`${styles.togglerIcon} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className={` ${styles.itemsContainer} navbar-nav me-auto mb-2 mb-lg-0`}>
                        <li className="nav-item">
                            <a className={ `${styles.navItem} nav-link `} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${styles.navItem} nav-link`} href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${styles.navItem} nav-link`} href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${styles.navItem} nav-link`} href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${styles.navItem} nav-link`} href="#contact">Contact</a>
                        </li>
                    </ul>
                    <span className="navbar-text"> 
                    </span>
                    </div>
                </div>
            </nav>
        </>
    )
}