import * as fetch from "./fetchClient";
import { HttpResponse } from "./fetchClient";

// GET profile
export interface Commit {
    oid: string;
    message: string;
    author: {
        name: string;
        date: string;
        email: string;
        avatarUrl: string;
    };
    committer: {
        name: string;
        date: string;
        email: string;
    };
    parents: [
        {
            oid: string;
        }
    ];
}

export function getCommitById(
    repository: string,
    oid: string
): Promise<HttpResponse<Commit>> {
    return fetch.get<Commit>(
        `https://mini-git.sgdev.org/repositories/${repository}/commits/${oid}`
    );
}
