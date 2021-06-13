import React from 'react'
import "./Mail.css";
import {IconButton} from "@material-ui/core"
import {useHistory} from "react-router-dom";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/Delete';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import EmailIcon from '@material-ui/icons/Email';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { ExitToApp, UnfoldMore, Print } from '@material-ui/icons';
export default function Mail() {

    const history = useHistory();

    return (
        <div className="mail">
        <div className="mail__tools">
            <div className="mail__toolsleft">
            <IconButton onClick={()=> history.push("/")} className="emailRow">
                <ArrowBackIcon/>
            </IconButton>
            <IconButton>
                <MoveToInboxIcon/>
            </IconButton>
            <IconButton>
                <ErrorIcon/>
            </IconButton>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
            <IconButton>
                <EmailIcon/>
            </IconButton>
            <IconButton>
                <WatchLaterIcon/>
            </IconButton>
            <IconButton>
                <CheckCircleIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
            </div>
            <div className="mail__toolsRight">
                <IconButton>
                <UnfoldMore/>
            </IconButton>
            <IconButton>
                <Print/>
            </IconButton>
            <IconButton>
                <ExitToApp/>
            </IconButton>
                </div>
        </div>
           <div className="mail__body">
            <div className="mail__bodyHeader">
                <h2>Subject</h2>
                <LabelImportantIcon className="mail__important"/>
                    <p className="">Title</p>
                    <p className="mail__time">10pm</p>
            </div>
            <div className="mail__message">
                <p>This is a message</p>
            </div>
           </div>
        </div>
    )
}
