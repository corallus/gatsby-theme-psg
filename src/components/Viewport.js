import React from 'react';
import { Helmet } from 'react-helmet';

export default function Viewport({ children }) {
    return (
        <Helmet>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            {children}
        </Helmet>
    );
}