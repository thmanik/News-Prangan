import React, { useEffect } from 'react';

const SITE_NAME = "News-Prangan";

const PageTitle = ({ title }) => {
    useEffect(() => {
        document.title = `${SITE_NAME} | ${title}`;

        return () => { };
    }, [title]);

    return null;
};

export default PageTitle;