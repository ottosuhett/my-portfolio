import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from "../../pages/Index/index.module.scss"
import Hero from "../../components/Hero/Hero"
import Card from "../../components/Card/Card"
import About from "../../components/About/About"
import Skills from "../../components/Skills/Skills"

export default function RootPage(){
    return(
        <div className={styles.indexContainer}>
            <div className={styles.header}>
                <Header />
            </div>
            <main className={styles.mainContainer}> 
                <Hero />
                <About />
                <div className={`${styles.cardsContainer} container-fluid`} id="projects">
                    <Card 
                        imgUrl="/xpace.jpg"
                        name= "XpaceWeb"
                        text="Xpace is a responsive web application inspired by SpaceX."
                        technologies = "html sass bootstrap aos"
                        repoUrl="https://github.com/ottosuhett/xpaceweb.git"
                        projectUrl="https://ottosuhett.github.io/xpaceweb/"
                    />
                    <Card 
                        imgUrl="/advice-gen.png"
                        name= "Advice Generator"
                        text="Generate a new piece of advice by clicking the dice icon. Advice is cached for 2 seconds. 
                        Any repeat-request within 2 seconds will return the same piece of advice."
                        technologies = "html css js"
                        repoUrl="https://github.com/ottosuhett/advice-generator-app.git"
                        projectUrl="https://ottosuhett.github.io/advice-generator-app/"
                    />
                    <Card 
                        imgUrl="/pokedex.png"
                        name= "Pokedex"
                        text="Pokedex is a web application that utilizes the PokeAPI to provide users with information about different Pokemon species."
                        technologies = "css js react"
                        repoUrl="https://github.com/ottosuhett/pokedex-react.git"
                        projectUrl="https://pokedex-red-one.vercel.app/"
                    />
                    <Card 
                        imgUrl="/git-search.png"
                        name= "Github User Search"
                        text="Type username and see a summary of the Github profile"
                        technologies = "html css js"
                        repoUrl="https://github.com/ottosuhett/github-user-search.git"
                        projectUrl="https://ottosuhett.github.io/github-user-search/"
                    />
                    <Card 
                        imgUrl="/comments-section.png"
                        name= "Comments Section"
                        text="A responsive web application for registering, storing, and displaying comments."
                        technologies = "react js sass"
                        repoUrl="https://github.com/ottosuhett/react-comments-section.git"
                        projectUrl="https://react-comments-section.vercel.app/"
                    />
                    <Card 
                        imgUrl="/xyz.png"
                        name= "XYZ"
                        text="SPA with HTML and CSS using grid and flex"
                        technologies = "html css"
                        repoUrl="https://github.com/ottosuhett/xyz-landing-page.git"
                        projectUrl="https://ottosuhett.github.io/xyz-landing-page/"
                    />
                </div>
                <Skills />
            </main>
            <Footer className={styles.footer}/>
        </div>
    )
}