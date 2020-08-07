import React from 'react';
import "./Alert.css";
import BlackBack from '../BlackBack/BlackBack';

export default function Alert(props) {
    return (
        <>
            <BlackBack
                onClick={props.closed}
                show={props.show}
            />
            <div
                className="Alert"
                style={{
                    display: props.show ? "flex" : "none",
                    backgroundColor: props.color,
                }}
            >
                <p className="content">{props.children}</p>
                {props.dismiss ? (
                    <button
                        onClick={props.dismiss}
                        className="close-btn"
                    >&#10006;</button>
                ) : null}
            </div>
        </>
    );
}
