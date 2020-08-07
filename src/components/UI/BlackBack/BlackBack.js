import React from 'react';
import "./BlackBack.css";

export default function BlackBack(props) {
    return (
        <div
            className="BlackBack"
            onClick={props.onClick}
            style={{
                display: props.show ? "block" : "none",
            }}
        />
    );
}
