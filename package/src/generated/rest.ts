/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/repositories": {
    get: {
      parameters: {
        query: {
          first?: components["parameters"]["firstParameter"];
          after?: components["parameters"]["afterParameter"];
        };
      };
      responses: {
        /**
         * An array of repositories in JSON format.
         */
        "200": {
          "application/json": components["schemas"]["Repository"][];
        };
      };
    };
  };
  "/repositories/{repository}/commits": {
    get: {
      parameters: {
        path: {
          repository: components["parameters"]["repositoryParameter"];
        };
        query: {
          first?: components["parameters"]["firstParameter"];
          after?: components["parameters"]["afterParameter"];
        };
      };
      responses: {
        /**
         * List of all commits in JSON format.
         */
        "200": {
          "application/json": components["schemas"]["Commit"][];
        };
      };
    };
  };
  "/repositories/{repository}/commits/{oid}": {
    get: {
      parameters: {
        path: {
          repository: components["parameters"]["repositoryParameter"];
          oid: components["parameters"]["oidParameter"];
        };
      };
      responses: {
        /**
         * Metadata about a commit in JSON format.
         */
        "200": {
          "application/json": components["schemas"]["Commit"][];
        };
      };
    };
  };
  "/repositories/{repository}/commits/{oid}/diff": {
    get: {
      parameters: {
        path: {
          repository: components["parameters"]["repositoryParameter"];
          oid: components["parameters"]["oidParameter"];
        };
        query: {
          first?: components["parameters"]["firstParameter"];
          after?: components["parameters"]["afterParameter"];
        };
      };
      responses: {
        /**
         * The list of files in the commit, including the diff of each file.
         */
        "200": {
          "application/json": components["schemas"]["CombinedFileDifference"][];
        };
      };
    };
  };
}

export interface operations {}

export interface components {
  parameters: {
    /**
     * The name of the repository.
     */
    repositoryParameter: string;
    /**
     * The commit ID (40 character hexadecimal SHA).
     */
    oidParameter: string;
    /**
     * The maximum number of repositories to return.
     */
    firstParameter: number;
    /**
     * Optional cursor returned by a previous request in the Link header for pagination. If supplied, the list will continue after the item this cursor refers to.
     */
    afterParameter: string;
  };
  schemas: {
    /**
     * A repository.
     */
    Repository: { name: string };
    Commit: {
      /**
       * The object ID of the commit (40-character SHA).
       */
      oid: string;
      /**
       * The subject of the commit (first line of the commit message).
       */
      subject: string;
      /**
       * The body of the commit (commit message without the first line).
       */
      body: string;
      /**
       * The parent commits of this commit (usually just one, except for merge commits).
       */
      parents: {
        /**
         * The commit ID (40 character SHA) of the parent commit.
         */
        oid?: string;
      }[];
      /**
       * The author of the commit.
       */
      author: components["schemas"]["Signature"];
      /**
       * The committer of the commit.
       */
      committer: components["schemas"]["Signature"];
    };
    Signature: {
      /**
       * The full name of the person.
       */
      name: string;
      /**
       * The email address of the person.
       */
      email: string;
      /**
       * A standard ISO8601 date time string of the date and time the person authored or committed the commit, respectively.
       */
      date: string;
      /**
       * A URL to the avatar to show for this person.
       */
      avatarUrl: string;
    };
    CombinedFileDifference: {
      /**
       * The kind of change applied to the file.
       */
      changeKind:
        | "ADDED"
        | "COPIED"
        | "DELETED"
        | "MODIFIED"
        | "RENAMED"
        | "TYPE_CHANGED";
      /**
       * The file before the change of the commit.
       */
      baseFile: {
        /**
         * The path of the file relative to the repository root.
         */
        path: string;
      };
      /**
       * The file after the change of the commit.
       */
      headFile: {
        /**
         * The path of the file relative to the repository root.
         */
        path: string;
      };
      hunks: components["schemas"]["DiffHunk"][];
    };
    DiffHunk: {
      /**
       * The header of the hunk as returned by Git, containing some context information for the user.
       */
      header: string;
      lines: {
        /**
         * The line number in the base revision of the file (left side).
         */
        baseLineNumber: number;
        /**
         * The line number in the head revision of the file (right side).
         */
        headLineNumber: number;
        /**
         * The raw content of this diff line, prefixed with either "+", "-" or " " (a space) depending on the type of change.
         */
        content: string;
      }[];
    };
  };
}
