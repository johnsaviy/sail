import React from "react";
import PropTypes from "prop-types";
// import { Container, Row, Col } from "react-bootstrap";
import "./YoutubeEmbed.css"


const YoutubeEmbed = ({ embedId }) => {
  
 
  return (
      <div className="video-responsive">
        <iframe
          
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="SAIL"
        />
      </div>

      
)};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;