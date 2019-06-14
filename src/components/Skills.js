import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
    return (
        <div className="skills">
            <CircularProgressbar className="skill" value={90} text='Javascript' />
            <CircularProgressbar className="skill" value={90} text='React' />
            <CircularProgressbar className="skill" value={80} text='Java' />
            <CircularProgressbar className="skill" value={75} text='Angular' />
            <CircularProgressbar className="skill" value={80} text='HTML' />
            <CircularProgressbar className="skill" value={75} text='CSS' />
            <CircularProgressbar className="skill" value={90} text='Git' />
        </div>
);
}

export default Skills;
