
function Image(){

    let products = [
        {name:"ABC", image:"./image/ABC.jpeg"},
        {name:"ABC", image:"./image/ABC2.webp"},
        {name:"ABC", image:"./image/Bhumeshwori Temple.JPG"},
        {name:"ABC", image:"./image/EBC.jpeg"},
        {name:"ABC", image:"./image/manaslu.jpeg"},
    ]

  
   

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
                

            </image>
        </div>
    )
}
export default Image;