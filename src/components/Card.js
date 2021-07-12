function Card({ name, id, email }) {
    return ( <
        div className = "tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5" >
        <
        img src = { `http://robohash.org/${id}?size=200x200` }
        alt = "" / >
        <
        div >
        <
        h1 > { name } < /h1> <
        p1 > { email } < /p1> < /
        div > < /
        div >
    );
}

export default Card;