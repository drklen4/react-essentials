
const Offer = props => {

    return (
        <div>
            <h4>{props.name}</h4>
            <ul>
            <figure className="travel__image">
                <img src={props.image} style={{
                    alignSelf: 'normal',
                    height: 350,
                    width: 600,
                    borderWidth: 1,
                    borderRadius: 75
                }} alt="Offer"/>
            </figure>
            <li>Destination : {props.destination}</li>
            <li >Dates: {props.dates}</li>
            <li>
                Cost: 
            </li>
            </ul>
        </div>
    );

}

export default Offer