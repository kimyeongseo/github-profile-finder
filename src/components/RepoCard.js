import React from 'react';

const RepoCard = ({ repos }) => {
    console.log(repos[Math.floor(Math.random() * repos.length) + 0])
    return repos && (
        <>
            <div>
                {repos[Math.floor(Math.random() * repos.length) + 0].html_url}
            </div>
        </>
    );
};

export default RepoCard;