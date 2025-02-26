import './App.css';
import soccerResources from './soccer-resource.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPersonRunning, faFutbol, faBowlFood } from '@fortawesome/free-solid-svg-icons';

library.add(faPersonRunning, faFutbol, faBowlFood);


const App = () => {

    const getIcon = (title) => {
        switch (title) {
            case "Fitness Training":
                return <FontAwesomeIcon icon="fa-solid fa-person-running"/>;
            case "Nutrition Tips":
                return <FontAwesomeIcon icon="fa-solid fa-bowl-food" />;
            default:
                return null;
        }
    };

    return (
        <div className="App">
            <h1>Soccer Skill Development <FontAwesomeIcon icon="fa-solid fa-futbol" bounce/></h1>
            <div className="container">
                {soccerResources.map((resource, index) => (
                    <div className="card" key={index}>
                        <img className="img" src={resource.images} alt={resource.title}/>
                        <h3>{resource.title} {getIcon(resource.title)}</h3>
                        <h4>{resource.description}</h4>
                        <a href={resource.link} target="_blank">
                            <button>View Resource</button>
                        </a>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default App