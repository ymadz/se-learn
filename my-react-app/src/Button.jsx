
function Button(){

    const handleClick = (e) => {
        e.target.textContent = "ouch";
    }

    return (
        <button className="shadow-md p-5 rounded-md cursor-pointer active:bg-red-400" onDoubleClick={(e) => handleClick(e)}>click me 🥹</button>
    )
}

export default Button