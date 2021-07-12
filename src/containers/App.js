import React, {
    Component
} from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((res) =>
                this.setState({
                    robots: res,
                })
            );
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value,
        });
    };

    render() {
        const {
            robots,
            searchfield
        } = this.state;
        const filteredRobot = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ? ( <
            h1 > ...loading < /h1>
        ) : ( <
            div className = "tc" >
            <
            h1 className = "f1" > Robofriends < /h1>{" "} <
            Searchbox searchChange = {
                this.onSearchChange
            }
            />{" "}   <
            Scroll > <
            Cardlist robots = {
                filteredRobot
            }
            />{" "}   < /
            Scroll > {
                " "
            } < /
            div >
        );
    }
}

export default App;