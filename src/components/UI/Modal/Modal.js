import React from 'react';
import './Modal.css';
import BlackBack from '../BlackBack/BlackBack';

export default function Modal(props) {
    return (
        <>
            <BlackBack
                onClick={props.closed}
                show={props.show}
            />

            <div className="Modal" style={{
                display: props.show ? "block" : "none",
            }}>
                <div className="top">
                    <h4 className="title">{props.title}</h4>
                    <button
                        onClick={props.closed}
                        className="close-btn"
                    >&#10006;</button>
                </div>
                <div className="center">
                    <p className="content">
                        {props.children}
                    </p>
                </div>
                {
                    props.modalBtns ? (
                        <div className="bottom">
                            {
                                props.modalBtns.map(button => (
                                    <button
                                        key={button.label}
                                        onClick={button.clicked}
                                        className={["bottomBtn", button.type].join(" ")}
                                    >{button.label}</button>
                                ))
                            }
                        </div>
                    ) : null
                }

            </div>
        </>
    );
}
