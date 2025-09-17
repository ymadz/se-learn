
import PropTypes from 'prop-types';

function Props(props){
    return (
        <h1>hello {props.name}</h1>
    )
}

Props.PropTypes = {
    name: PropTypes.string
}

Props.defaultProps = {
    name: "guest"
}

export default Props