// Component to build & retrieve card info & images
const Card = ({name, email, id, phone }) => {
    return (   
        <div className="tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src ={`https://www.robohash.org/${id}?set=set5`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    );
}

export default Card;
