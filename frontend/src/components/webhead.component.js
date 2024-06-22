import React from 'react';
import { Helmet } from 'react-helmet';

import {
    SiteTitle, Author,
    // Favicon
} from './constants.component';

function WebHead({ headInsiders }) {

    const author = Author;
    // const favicon = Favicon;

    const keywordsMaker = () => {
        var keywords = headInsiders.keywords;
        const keywordString = keywords.join(', ');
        return keywordString;
    }

    return (
        <>
            <Helmet>
                <title>{(headInsiders.page_title !== '' && headInsiders.page_title !== null) ? headInsiders.page_title + " - " + SiteTitle : SiteTitle}</title>
                <meta name="keywords" content={keywordsMaker()} />
                <meta name="description" content={headInsiders.description} />

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="author" content={author} />

                {/* <link rel="icon" href={favicon} type="image/png" /> */}

                {/* bootstrap.js, popper.js */}
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </Helmet>
        </>
    );
}

export default WebHead;