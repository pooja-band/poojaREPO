import { useState } from "react";
import image1 from './image1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Likes(props)
{
const [likes, setLikes]=useState(props.value);

const handleOnClick=()=>{
    setLikes(likes+1);
}
return(
    
<div className="text-center">
      <img src={image1} alt="Nature's image" style={{ width: '400px', height: '400px' }}className="img-fluid rounded mx-auto d-block mb-3" />
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary" onClick={handleOnClick}>Like</button>
        {likes > 0 && <span className="ml-3">{likes}</span>}
      </div>
    </div>
);



}
export default Likes;