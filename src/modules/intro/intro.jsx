import "./intro.scss"
import Logo from "../../assets/logo.svg"
export default function Intro() {

    return (
        <div className="intro">
            <main className="introContainer">
                <div className="loginContainer" >
                    <div className="logoContainer">
                        <img src={Logo} alt="logoImagen" className="logoIcon" />
                        <h1 className="textLogo">TwitterChain</h1>
                    </div>
                    <div className="welcomeHome">
                        <h2 className="welcomeText">Welcome to</h2>
                        <h2 className="textLogo">TwitterChain</h2>
                        <h3 className="infoText">Import an account or create one.</h3>
                        <button className="createAccount">Create an account</button>
                        <button className="importAccount">Import an account</button>
                    </div>
                </div>
                {/* imagen section  🖼️*/}
                <div className="introImagenContainer" style={{ backgroundImage: `url(${Logo})`, backgroundRepeat: "no-repeat", backgroundSize: "25vw", backgroundPosition: "center" }}>
                    <div className="lemmaContainer">
                        <span>We don't know who you are,</span>
                        <span>you don't know who we are.</span>
                    </div>
                </div>

            </main>
        </div>
    )
}