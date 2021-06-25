import React from 'react';
import RepoCard from './RepoCard';
import ResultCard from "./ResultCard";

const Result = ({ userData }) => {
    const { status, data, repos } = userData;
    switch (status) {
        case "pending":
            return <div style={{ color: "white", fontSize: "24px" }}>Loading...</div>;
        case "resolved":
            return (
                <>
                    <ResultCard data={data} />
                    <RepoCard repos={repos} />
                </>);
        case "rejected":
            return (
                <div style={{ color: "white", fontSize: "24px" }}>User Not Found</div>
            );
        case "idle":
        default:
            return <div></div>;
    }
};

export default Result;