function Cards(probs){
    const {title, image, desc} = probs
    return(
<div className="col-md-3 card hover p-0 ">
    <div className= "title my-0 py-2"><h5 className="card-title">{title}</h5></div>
    <div className="img my-0 p-3">
    <img src={image} className="card-img-top" alt="img"/>
    </div> 
    <div className="accordion">
    <div className= "card-body">
           <p>{desc}</p>
    </div>
</div>
    </div>
  
    )
    
}

export default Cards