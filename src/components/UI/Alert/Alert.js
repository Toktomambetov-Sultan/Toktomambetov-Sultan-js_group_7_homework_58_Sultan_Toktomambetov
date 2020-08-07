import React, { useState } from 'react';
import "./Alert.css";

export default function Alert(props) {
    return (
        <>
            <div
                className={["Alert", props.type].join(" ")}
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
