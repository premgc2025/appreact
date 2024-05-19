
function Image(){

    let products = [
        {name:"ABC", image:"./image/ABC.jpeg"},
        {name:"ABC", image:"./image/ABC2.webp"},
        {name:"ABC", image:"./image/Bhumeshwori Temple.JPG"},
        {name:"ABC", image:"./image/EBC.jpeg"},
        {name:"ABC", image:"./image/manaslu.jpeg"},
    ]

  
    let inpic ={name:"Lukla", image:"./src/assets/pic/Lukla.JPG"}

    return(
        <div className="image-header">

            <div className="image-slide">
                <h3>Image from public folder</h3>
                {
                    products.map((product,index)=>{
                        return (

                            <div className="image-collection" key={index}>
                                <h3>{product.name}</h3>
                                <img className="image-all" src={product.image} alt="" />

                            </div>
                        )
                    })
                }
            </div>




            <image className="section">
                <h1> This is Image Section</h1>
                <img src="image/ABC.jpeg" alt="ABC" />
                <h3>This is Lukla in src section </h3><br />
                <img src="./src/assets/pic/Lukla.JPG" alt="lukla" />
                <h1>This is ABC in public section</h1>
                <img src={pic.image} alt="abc" />
                <h3>Lukla Inside src</h3>
                <img src={inpic.image} alt="Lukla" />

            </image>
        </div>
    )
}
export default Image;