
function PFP(){
    const imageURL = './src/assets/cat.png'
const handleClick = (e) => {
    e.target.style.display = "none";
}

    return (
        <img onClick= {(e) => handleClick(e)} src={imageURL} alt="cat" />
    )
}

export default PFP