import React from 'react'
import { NavLink } from 'react-router-dom'

const ChoiceBar = (props) => {
    return (
        <div>
            <div className="mb-2 row text-center">
                {props.link1 && <ChoiceButton link={props.link1} text={props.text1} />}
                {props.link2 && <ChoiceButton link={props.link2} text={props.text2} />}
                {props.link3 && <ChoiceButton link={props.link3} text={props.text3} />}
                {props.link4 && <ChoiceButton link={props.link4} text={props.text4} />}
                {props.link5 && <ChoiceButton link={props.link5} text={props.text5} />}
                {props.link6 && <ChoiceButton link={props.link6} text={props.text6} />}
            </div>
        </div>
    )
}

const ChoiceButton = (props) => {

    return (
        <NavLink to={props.link} activeClassName="border-bottom border-3 bg-white" className="col py-3" exact>
            {props.text}
        </NavLink>
    )
}

export default ChoiceBar
