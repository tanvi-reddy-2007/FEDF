import "./EventCard.css";

function EventCard({event}){

return(

<div className="card">

<img src={event.image}/>

<h2>{event.name}</h2>

<p>{event.location}</p>

<h3>{event.price}</h3>

<button>Book Now</button>

</div>

)

}

export default EventCard;