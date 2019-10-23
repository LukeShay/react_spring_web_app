import React from "react";
import NavigationOption from "./NavigationOption.js";
import "./NavigationBar.css";

export default class NavigationBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className="navigation-bar">
                <NavigationOption
                    align="left"
                    title="Home"
                    link="/Home"/>
                <NavigationOption
                    align="left"
                    title="Items"
                    link="/classes"/>
                <NavigationOption
                    align="left"
                    title="Reminders"
                    link="/reminders"/>
                <NavigationOption
                    align="left"
                    title="Calendar"
                    link="/calendar"/>
                <NavigationOption
                    align="right"
                    img="./white-circle.png"
                    title="Account"
                    link="/account"/>
            </ul>
        );
    }
}