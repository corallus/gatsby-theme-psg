import React from 'react';
import Carousel from 'react-material-ui-carousel'

export const Slide = ({pageSize, items, Component}) => {
    const pages = Math.ceil(items.length/pageSize)
    return (
        <Carousel
            autoPlay={false}
        >
            {[...Array(pages)].map((e, i) =>
                <Component key={i} items={items.slice(i*pageSize, (i+1) * (pageSize))} />
            )}
        </Carousel>
    )
}