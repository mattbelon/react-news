import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    // extract data
    const {urlToImage, url, title, description} = noticia;                             
    
    return ( 
        <div className="col s16 m6 l4">
            <div className="card">
            <div className="card-image">
                <img src={urlToImage} alt={title}></img>
            </div>

            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <a 
                className="waves-effect waves-light btn"
                href={url}>Leer Noticia</a>
            </div>

            </div>

        </div>
     );
}
Noticia.propTypes = {
    Noticia : PropTypes.object.isRequired
}
export default Noticia;