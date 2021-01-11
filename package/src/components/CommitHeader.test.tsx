import React from "react";
import { render } from "@testing-library/react";
import CommitHeader from "./CommitHeader";
import "@testing-library/jest-dom/extend-expect";

const mockCommitHeaderData = {
    message: "test message",
    author: "test author",
    committer: "test committer",
    avatarUrl: "test url",
};

describe("<CommitHeader />", () => {
    it("renders a header for the commit page complete with a message, author and committer information", () => {
        const { queryByTestId } = render(
            <CommitHeader {...mockCommitHeaderData} />
        );
        expect(queryByTestId("commit-message")).toHaveTextContent(
            "test message"
        );
    });
});
