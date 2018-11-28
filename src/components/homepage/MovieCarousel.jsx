import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import MovieCarouselItem from './MovieCarouselItem.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MovieCarousel extends Component {

    render() {
        return (
            <Category>
                <CategoryTitle>{this.props.title}</CategoryTitle>
                <Slider {...settings}>
                    {this.props.movies.map(movie => (
                        <MovieCarouselItem key={movie.id} movie={movie}/>
                    ))}
                </Slider>
            </Category>
        );
    }
}

const Category = styled.div`
    margin: 3em;
`;

const CategoryTitle = styled.h3`
    color: white;
    margin: .5em;
`;

export default MovieCarousel;

  
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 5,
                initialSlide: 7,
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 4,
                initialSlide: 6,
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                initialSlide: 5,
            }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 4,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 3,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            }
        },
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            }
        }
    ]
};