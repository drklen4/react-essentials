
const Offer = props => {

    return (
        <>
            <h4>{props.name}</h4>
            <figure className="travel__image">
                <img src={props.image} style={{
                    float: 'left',
                    marginRight: 15,
                    height: 350,
                    width: 600,
                    borderWidth: 1,
                    borderRadius: 75
                }} alt="Offer"/>
            </figure>
            <ul>
                <li>Destination : {props.destination}</li>
                <li>Dates: {props.dates}</li>
                <li>Cost:</li>
            </ul>
        </>
    );

}

export default Offer