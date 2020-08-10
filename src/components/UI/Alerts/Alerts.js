import React from 'react';
import './Alerts.css'

export default function Alerts(props) {
    return (
        <div className="Alerts">
            {props.children}
        </div>
    );
}
