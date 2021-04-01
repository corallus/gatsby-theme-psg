import React from 'react';
import Carousel from 'react-material-ui-carousel'

export const Slide = ({pageSize, items, Component}) => {
    const pages = Math.ceil(items.length/pageSize)
    return (
        <Carousel
            navButtonsProps={{
                style: {
                    backgroundColor: 'transparent'
                }
            }}
            navButtonsAlwaysVisible={pages > 1}
            navButtonsAlwaysInvisible={pages < 2}
            autoPlay={false}
        >
            {[...Array(pages)].map((e, i) =>
                <Component key={i} items={items.slice(i*pageSize, (i+1) * (pageSize))} />
            )}
        </Carousel>
    )
}