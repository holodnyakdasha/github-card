import React from "react";

const Card =(props) => {
    return(
        <div className={'container'}>
            <img src={props.avatar_url}/>
            <div className={'describe_container'}>
                <div className={'name'}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>

    );

};
export default Card;