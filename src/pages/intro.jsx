import "./intro.scss"
import Logo from "../assets/logo.svg"
import Line from "../assets/line.svg"
import Cross from "../assets/crossOut.svg"
import eyeOff from "../assets/eyeOff.svg"
import { useState } from "react"




export default function Intro() {
    const [hidde, setHidde] = useState("hidde")
    const [hiddeWarning, setWarning] = useState("hidde")
    const [hiddeInfo, setInfo] = useState("show")
    const [hiddeSeed, setSeed] = useState("hidde")
    const [seedPhrase, setSeedPhrase] = useState({ data: { seed0: "", } })
    const [hiddeLogin, setLogin] = useState("hidde")
    const [loginStatus, setLoginStatus] = useState('')
    async function createAccount() {
        const res = await fetch("http://localhost:1000/api/users",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({})
            })
        const data = await res.json()
        setSeedPhrase(data)
        console.log(data)
    }

    async function login() {
        const seed = seed1.value + "-" + seed2.value + "-" + seed3.value + "-" + seed4.value + "-" + seed5.value + "-" + seed6.value + "-" + seed7.value + "-" + seed8.value + "-" + seed9.value + "-" + seed10.value + "-" + seed11.value + "-" + seed12.value
        const res = await fetch("http://localhost:1000/api/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ seed })
            })
        const data = await res.json()
        console.log(data.found)
        if (data.found) {
            localStorage.setItem('seed', seed);
            window.location.href = "/home"
            setLoginStatus("user Founded")

        } else {
            setLoginStatus("no use founded")
        }
    }

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
                        <button className="createAccount" onClick={() => { setHidde("show") }}>Create an account</button>
                        <button className="importAccount" onClick={() => { setLogin("show") }}>Import an account</button>
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
            <main className="introContainerMobile">
                <div className="logoMobileContainer">
                    <img src={Logo} alt="logo" className="logoMobile" />
                </div>
                <div className="sloganContainer">
                    <span>We don't know who you are,</span>
                    <span>you don't know who we are.</span>
                </div>
                <div className="bottonsContainer">
                    <span>Import an account or create one.</span>
                    <button className="buttonCreate">Create an account</button>
                    <img src={Line} className="line" />
                    <button className="buttonImport">Import an account</button>
                </div>
            </main>
            <div className={`${hidde} modalContainer `}>
                <button className="closeModal" onClick={() => { setHidde("hidde"); setWarning("hidde") }}><img src={Cross} /></button>
                <div className={`${hiddeInfo} infoModal`}>
                    <img src={Logo} className="logoModal" />
                    <span className="modalTitle">Create an account</span>
                    <span className="modalSubtitle">without emails, without passwords and without third parties</span>
                    <div className="cautionContainer">
                        <span className="titleCaution">Manual</span>
                        <span className="listCaution">When you create your account, your <span className="seed"> seed phrase</span> is generated, which will always be requested to log in.</span>
                        <span className="listCaution">TwitterChain CANNOT RETRIEVE YOUR<span className="seed"> SEED PHRASES </span></span>
                        <span className="listCaution">Save your <span className="seed">seed phrase</span> in a safe place without it you can't log in</span>
                    </div>
                    <button className="next" onClick={() => { setWarning("show") }}>Next()</button>
                </div>
                <div className={`${hiddeWarning} warningModale  `}>
                    <img src={eyeOff} alt="eyeoff" className="iconEyeOff" />
                    <span className="warningTitle">Show your seed phrase</span>
                    <span className="warningSubtitle">Make sure no one is watching your phone screen.</span>
                    <button className="skipWarning" onClick={() => { createAccount(); setWarning("hidde"); setInfo("hidde"); setSeed("show") }}>next()</button>
                </div>
                <div className={`${hiddeSeed} seedModal `}>
                    <img src={Logo} className="logoModal" />
                    <span className="modalTitle">Your seed phrase</span>
                    <span className="modalSubtitle">This is your passphrase of your account. Write it down on a piece of paper and keep it in a safe place.</span>
                    <div className="seedPhraseContainer">
                        <div className="column">
                            <span className="seedContainer">1.-{seedPhrase.data.seed0}</span>
                            <span className="seedContainer">2.-{seedPhrase.data.seed1}</span>
                            <span className="seedContainer">3.-{seedPhrase.data.seed2}</span>
                        </div>
                        <div className="column">
                            <span className="seedContainer">4.-{seedPhrase.data.seed3}</span>
                            <span className="seedContainer">5.-{seedPhrase.data.seed4}</span>
                            <span className="seedContainer">6.-{seedPhrase.data.seed5}</span>
                        </div>
                        <div className="column">
                            <span className="seedContainer">7.-{seedPhrase.data.seed6}</span>
                            <span className="seedContainer">8.-{seedPhrase.data.seed7}</span>
                            <span className="seedContainer">9.-{seedPhrase.data.seed8}</span>
                        </div>
                        <div className="column">
                            <span className="seedContainer">10.-{seedPhrase.data.seed9}</span>
                            <span className="seedContainer">11.-{seedPhrase.data.seed10}</span>
                            <span className="seedContainer">12.-{seedPhrase.data.seed11}</span>
                        </div>
                    </div>
                    <button className="next" onClick={() => { setHidde("hidde") }}>Next()</button>
                </div>

            </div>
            <div className={`${hiddeLogin} modalContainer`}>
                <button className="closeModal" onClick={() => { setLogin("hidde") }}><img src={Cross} /></button>
                <div className={`show infoModal`}>
                    <img src={Logo} className="logoModal" />
                    <span className="modalTitle">Enter your seed </span>
                    <span className="modalSubtitle">Enter your 12 word seed phrase</span>
                    <div className="seedPhraseContainer">
                        <div className="column">
                            <input className="seedContainer" placeholder="1.-" id="seed1" />
                            <input className="seedContainer" placeholder="2.-" id="seed2" />
                            <input className="seedContainer" placeholder="3.-" id="seed3" />
                        </div>
                        <div className="column">
                            <input className="seedContainer" placeholder="4.-" id="seed4" />
                            <input className="seedContainer" placeholder="5.-" id="seed5" />
                            <input className="seedContainer" placeholder="6.-" id="seed6" />
                        </div>
                        <div className="column">
                            <input className="seedContainer" placeholder="7.-" id="seed7" />
                            <input className="seedContainer" placeholder="8.-" id="seed8" />
                            <input className="seedContainer" placeholder="9.-" id="seed9" />
                        </div>
                        <div className="column">
                            <input className="seedContainer" placeholder="10.-" id="seed10" />
                            <input className="seedContainer" placeholder="11.-" id="seed11" />
                            <input className="seedContainer" placeholder="12.-" id="seed12" />
                        </div>
                    </div>
                    <button className="next" onClick={() => { login() }}>Next()</button>
                    <h2>{loginStatus}</h2>
                </div>
            </div>
        </div >
    )
}