/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Avatar, CommitMessage, MetaInfo, Name } from "../components/lib";

interface ICommitHeader {
    message: string | undefined;
    author: string | undefined;
    committer: string | undefined;
    avatarUrl: string | undefined;
}

const CommitHeader: React.FC<ICommitHeader> = ({
    message,
    author,
    committer,
    avatarUrl,
}) => (
    <div css={{ display: "flex", marginTop: "2rem" }}>
        <Avatar src={avatarUrl} />
        <div css={{ marginLeft: "0.5rem", width: "100%" }}>
            <CommitMessage data-testid="commit-message">
                {message}
            </CommitMessage>
            <div
                css={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <MetaInfo>
                    Authored by <Name>{author}</Name>
                </MetaInfo>
                <MetaInfo>
                    Committed by <Name>{committer}</Name>
                </MetaInfo>
            </div>
        </div>
    </div>
);

export default CommitHeader;
