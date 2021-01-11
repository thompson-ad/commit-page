import React from 'react'

export const Placeholder: React.FunctionComponent = () => (
    <div>
        <h1>You escaped the matrix!</h1>
        <p>
            For the sake of the exercise, there is no content for this page.
            Just imagine something was here!
        </p>
        <p>
            If you're looking for a commit, you should find one under this URL:{' '}
            <a
                href="http://localhost:1234/repositories/sourcegraph/commits/d219ebdc745786fa08a48b85831b77726dd1d118"
                data-testid="commit-example"
            >
                http://localhost:1234/repositories/sourcegraph/commits/d219ebdc745786fa08a48b85831b77726dd1d118
            </a>
        </p>
    </div>
)
