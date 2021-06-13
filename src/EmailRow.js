import React from 'react';
import "./EmailRow.css";
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import {  IconButton } from '@material-ui/core';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';

export default function EmailRow({id, title, subject, description, time}) {

    const history = useHistory();

    return (
        <div onClick={()=> history.push("/mail")} className="emailRow">
            <div className="emailRow__Options">
                <CheckBoxOutlineBlankOutlinedIcon />
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton >
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <h4 className="emailRow__message">
                {subject}
                <span className="emailRow__description">{description}</span>
            </h4>
            <p className="emailRow__description">
            {time}
            </p>
        </div>
        
    )
}
