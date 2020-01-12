import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { Link } from 'react-router-dom';

const ShowCard = (props) => {
  const { data, storeId } = props;
  const { show } = data;
  const { id, name, rating, runtime, genres, image,network } = show;
  const { average } = rating;
 
  return (
    <div className="show-card">
      { image ? 
        <div className="show-image"><img src={image.original}/></div> 
                                    : 
        <div className="show-image blank-image column">{network.name}</div> 
      }  
      <div className="show-details">
        <div className="row name-rating">
          <Link to={`/show/:${name}`} onClick={() => storeId(id)}>
            <h3>{name}</h3>
          </Link>
            {<p className={average > 5 ? "good-rating" : "poor-rating"}>{average ? average : "No rating"}</p>}
        </div>
        <div className="genres row">
          {genres.map(genre => <span key={genre} className="genre">{genre}</span>)}
          <p className="runtime">{runtime}minutes</p>
        </div>
      </div>
    </div>
  );
};

ShowCard.defaultProps = {
  show: {},
};

ShowCard.propTypes = {
  show: PropTypes.arrayOf(oneOfType(['strings'])),
};

export default ShowCard;