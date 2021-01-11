export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    /** A 40-character Git object ID. */
    GitObjectID: any
}

export type Query = {
    __typename?: 'Query'
    repository?: Maybe<Repository>
    repositories: RepositoryConnection
}

export type QueryRepositoryArgs = {
    name: Scalars['String']
}

export type QueryRepositoriesArgs = {
    after?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
}

export type Repository = {
    __typename?: 'Repository'
    name?: Maybe<Scalars['String']>
    commits: CommitConnection
    commit?: Maybe<Commit>
}

export type RepositoryCommitsArgs = {
    after?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    before?: Maybe<Scalars['String']>
    last?: Maybe<Scalars['Int']>
    messagePattern?: Maybe<Scalars['String']>
    startRevision?: Maybe<Scalars['String']>
    since?: Maybe<Scalars['String']>
    until?: Maybe<Scalars['String']>
    path?: Maybe<Scalars['String']>
}

export type RepositoryCommitArgs = {
    oid: Scalars['GitObjectID']
}

/** A connection to a list of items. */
export type CommitConnection = {
    __typename?: 'CommitConnection'
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<CommitEdge>>>
}

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: 'PageInfo'
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']>
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']>
}

/** An edge in a connection. */
export type CommitEdge = {
    __typename?: 'CommitEdge'
    /** The item at the end of the edge */
    node?: Maybe<Commit>
    /** A cursor for use in pagination */
    cursor: Scalars['String']
}

/** A git commit object. */
export type Commit = {
    __typename?: 'Commit'
    oid: Scalars['GitObjectID']
    /** The full commit message, including subject and body. */
    message: Scalars['String']
    /** The commit subject (first line of the commit message). */
    subject: Scalars['String']
    /** The commit message without the subject. */
    body: Scalars['String']
    author: Signature
    committer: Signature
    /** The parent commits. This list usually contains just one commit, but will contain multiple for a merge commit. */
    parents: Array<Commit>
    repository: Repository
    /** The diff between this commit and its parent. */
    diff: CombinedFileDifferenceConnection
    /** The files that existed at this commit in the repository */
    files: FileConnection
    /** A specific file in the repository at this commit. */
    file?: Maybe<File>
}

/** A git commit object. */
export type CommitDiffArgs = {
    after?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
}

/** A git commit object. */
export type CommitFilesArgs = {
    after?: Maybe<Scalars['String']>
    first?: Maybe<Scalars['Int']>
    directory?: Maybe<Scalars['String']>
    pathPattern?: Maybe<Scalars['String']>
}

/** A git commit object. */
export type CommitFileArgs = {
    path: Scalars['String']
}

export type Signature = {
    __typename?: 'Signature'
    name: Scalars['String']
    /** A URL to an avatar image that can be passed to an `<img src="...">` */
    avatarUrl: Scalars['String']
    email: Scalars['String']
    date: Scalars['String']
}

/** A connection to a list of items. */
export type CombinedFileDifferenceConnection = {
    __typename?: 'CombinedFileDifferenceConnection'
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<CombinedFileDifferenceEdge>>>
}

/** An edge in a connection. */
export type CombinedFileDifferenceEdge = {
    __typename?: 'CombinedFileDifferenceEdge'
    /** The item at the end of the edge */
    node?: Maybe<CombinedFileDifference>
    /** A cursor for use in pagination */
    cursor: Scalars['String']
}

/** The difference between two versions of a file in [Git's default combined diff format](https://git-scm.com/docs/git-diff#_combined_diff_format).This format is used to represent a combined diff for comparisons with potentially multiple base revisions, e.g. to compare a file in a commit to its parents.It will only list files that were modified from all base revisions. */
export type CombinedFileDifference = {
    __typename?: 'CombinedFileDifference'
    changeKind: FileChangeKind
    /** The version of the file at the head revision. null if the file no longer exists in the head revision. */
    headFile?: Maybe<File>
    baseFile?: Maybe<File>
    hunks: Array<DiffHunk>
}

export enum FileChangeKind {
    Added = 'ADDED',
    Copied = 'COPIED',
    Deleted = 'DELETED',
    Modified = 'MODIFIED',
    Renamed = 'RENAMED',
    TypeChanged = 'TYPE_CHANGED',
}

export type File = {
    __typename?: 'File'
    path: Scalars['String']
    /** The file content from the git repository. null if the repository was not uploaded. */
    content?: Maybe<Scalars['String']>
    /** The commit this file exists at. */
    commit: Commit
}

export type DiffHunk = {
    __typename?: 'DiffHunk'
    /** The hunk header, e.g. `@@ -11,7 +11,10 @@ class Greeter` */
    header: Scalars['String']
    /** The lines of this diff hunk. */
    lines: Array<DiffHunkLine>
}

export type DiffHunkLine = {
    __typename?: 'DiffHunkLine'
    /** The line number in the base revision of the file. */
    baseLineNumber: Scalars['Int']
    /** The line number in the head revision of the file. */
    headLineNumber: Scalars['Int']
    /** The code content of the line, including the "+"/"-"/" " prefix. */
    content: Scalars['String']
}

/** A connection to a list of items. */
export type FileConnection = {
    __typename?: 'FileConnection'
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<FileEdge>>>
}

/** An edge in a connection. */
export type FileEdge = {
    __typename?: 'FileEdge'
    /** The item at the end of the edge */
    node?: Maybe<File>
    /** A cursor for use in pagination */
    cursor: Scalars['String']
}

/** A connection to a list of items. */
export type RepositoryConnection = {
    __typename?: 'RepositoryConnection'
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<RepositoryEdge>>>
}

/** An edge in a connection. */
export type RepositoryEdge = {
    __typename?: 'RepositoryEdge'
    /** The item at the end of the edge */
    node?: Maybe<Repository>
    /** A cursor for use in pagination */
    cursor: Scalars['String']
}

export type Mutation = {
    __typename?: 'Mutation'
    /** Delete a repository. */
    deleteRepository?: Maybe<DeleteRepositoryPayload>
}

export type MutationDeleteRepositoryArgs = {
    input: DeleteRepositoryInput
}

export type DeleteRepositoryInput = {
    /** The repository to delete. */
    repository: Scalars['String']
    clientMutationId?: Maybe<Scalars['String']>
}

export type DeleteRepositoryPayload = {
    __typename?: 'DeleteRepositoryPayload'
    clientMutationId?: Maybe<Scalars['String']>
}
