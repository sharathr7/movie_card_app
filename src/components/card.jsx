import React from 'react'
import './card.css'

const Card = (props) => {
    return (
            <div className='card'>
                <div className='left_card'>
                    <div className='name_container'>
                        <div className='movie_img'>
                            <img src={props.img} alt="" />
                        </div>
                        <div className='movie_details'>
                            <h1>{props.movieName}</h1>
                            <h6>{props.year}</h6>
                            <div>
                                <h5 id='time'>{props.time}min</h5>
                                <h5 id='type'>{props.type}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='name_container'>
                        <p className='details_container'>{props.para}</p>
                    </div>
                    <div className='name_container'>
                        <i class="fa-sharp fa-solid fa-share-nodes"></i>
                        <i class="fa-sharp fa-solid fa-heart"></i>
                        <i class="fa-solid fa-message"></i>
                    </div>
                </div>
                <div className='right_card'>
                    <img src={props.rightImg} alt="" />
                </div>
            </div>
    )
}

export default Card
