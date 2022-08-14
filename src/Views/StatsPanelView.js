import Attributes from "../Components/StatsPanelComponents/Attributes";
import Proficiencies from "../Components/StatsPanelComponents/Proficiencies";

const StatsPanelView = () => {
    return (
        <div className='StatsPanelView'>
            <Attributes />
            <Proficiencies />
        </div>
    )
}

export default StatsPanelView;