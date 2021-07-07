import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap'
import './index.css'
  
const CardComponent = ({image, alt, title, buttonText, href}) => { 
    return (
        <div>
            <Card className="mt-5 mb-5">
            <CardImg top width="100%" src={image} alt={alt} />
            <CardBody>
                <CardTitle className="card-component-title"><p>{title}</p></CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                <CardText></CardText>
                <a href={href} target="_blank" className="button-link"><span>{buttonText}<span id="button-link-arrow">&#8594;</span></span></a>
            </CardBody>
            </Card>
        </div>
);
};
  
export default CardComponent
