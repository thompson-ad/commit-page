/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { getCommitById, Commit } from "../api/api";
import { useParams } from "react-router-dom";
import CommitHeader from "./CommitHeader";

interface CommitPageState {
    status: "IDLE" | "RESOLVED" | "PENDING" | "REJECTED";
    commit: Commit | undefined;
    error: string | null;
}

interface Params {
    repository: string;
    commitSHA: string;
}

const CommitPage = () => {
    const params: Params = useParams();
    const { repository, commitSHA }: Params = params;
    const [state, setState] = useState<CommitPageState>({
        status: "IDLE",
        commit: undefined,
        error: null,
    });

    const { status, commit, error } = state;

    useEffect(() => {
        if (!repository || !commitSHA) {
            return;
        }
        setState({ ...state, status: "PENDING" });
        getCommitById(repository, commitSHA)
            .then((data) => {
                console.log(data.parsedBody);
                const commit = data.parsedBody;
                setState({
                    ...state,
                    status: "RESOLVED",
                    commit,
                });
            })
            .catch((error) => {
                console.error(error);
                setState({ ...state, status: "REJECTED", error });
            });
    }, [params]);

    if (status === "IDLE") {
        return "IDLE CONTENT";
    } else if (status === "PENDING") {
        return "Loading";
    } else if (status === "REJECTED") {
        return (
            <div>
                There was an error:{" "}
                <pre style={{ whiteSpace: "normal" }}>{error}</pre>
            </div>
        );
    } else if (status === "RESOLVED") {
        return (
            <CommitHeader
                author={commit?.author.name}
                committer={commit?.committer.name}
                message={commit?.message}
                avatarUrl={commit?.author.avatarUrl}
            />
        );
    }
};

export default CommitPage;
