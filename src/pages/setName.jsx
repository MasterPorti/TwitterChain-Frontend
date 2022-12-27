import setName from "../services/setName"


export default function Setname() {
    const seed = localStorage.getItem('seed');
    return (
        <div>
            <input placeholder="Name" id="inputName" />
            <button onClick={() => { setName(seed, inputName.value) }}>Set Name</button>
        </div>
    )
}