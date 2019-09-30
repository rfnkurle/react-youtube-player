import React from "react";
import styled from 'styled-components';

const List = styled.ul `
    list-style: none;
    padding-left: 0;

`

const ListItem = styled.li `
    margin-bottom: 1em;  
    text-align: right;
    img {
        border: ${props => props.active ? "2px solid palevioletred" : "2px solid gray"};
        border-radius: 10px;
        cursor: pointer
        :hover {
            border-color: red
        }
    }       

`

export const VideoList = (props) => {
//gives permission for this to act as a wrapper element and for other elements
//(components) to be rendered inside
    return (
        
        <List>{props.children}</List>
    )
};

export const VideoListItem = ({video, selectedVideo, onVideoSelect}) => {
    //above is a destructed list taken from App.js, then given to ListItem below
    return(
        
        <ListItem active={video === selectedVideo}>
            <img 
            
            src ={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.title}
            onClick={ () => onVideoSelect(video)}
            />
        </ListItem>
    
    )
}


