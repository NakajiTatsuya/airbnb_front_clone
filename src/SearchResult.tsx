import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

type SearchProps = {
    img: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string,
    total: string,
}

const SearchResult = (props: SearchProps) => (
    <div className='searchResult'>
        <img src={props.img} alt="" />
        <FavoriteBorderIcon className="searchResult__heart" />

        <div className='searchResult__info'>
            <div className="searchResult__infoTop">
                <p>{props.location}</p>
                <h3>{props.title}</h3>
                <p>____</p>
                <p>{props.description}</p>
            </div>

            <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                    <StarIcon className="searchResult__star" />
                    <p>
                        <strong>{props.star}</strong>
                    </p>
                </div>
                <div className='searchResults__price'>
                    <h2>{props.price}</h2>
                    <p>{props.total}</p>
                </div>
            </div>
        </div>
    </div>
);

export default SearchResult;
