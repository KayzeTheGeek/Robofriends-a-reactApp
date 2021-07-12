import Card from "./Card"

function Cardlist({ robots }) {
    return ( <
        div > {
            robots.map(function(user, i) {
                return ( <
                    Card key = { i }
                    id = { user.id }
                    name = { user.name }
                    email = { user.email }
                    />
                )
            })
        } <
        /div>
    );
}

export default Cardlist;