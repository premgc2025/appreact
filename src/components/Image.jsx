
function Image(){

    let pic = {name:"ABC", image:"./image/ABC.jpeg"}
    let inpic ={name:"Lukla", image:"./src/assets/pic/Lukla.JPG"}

    return(
        <div className="image-header">
            <image className="section">
                <h1> This is Image Section</h1>
                <img src="./image/ABC.jpeg" alt="ABC" />
                <img src="./src/assets/pic/Lukla.JPG" alt="lukla" />
                <img src={pic.image} alt="abc" />
                <h3>Lukla Inside</h3>
                <img src={inpic.image} alt="Lukla" />

            </image>
        </div>
    )
}
export default Image;