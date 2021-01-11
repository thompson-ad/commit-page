import React from 'react'
import { render } from '@testing-library/react'
import { Placeholder } from './Placeholder'
import '@testing-library/jest-dom/extend-expect'

describe('Placeholder component', () => {
    it('renders a placeholder message for pages that are not part of the exercise with a link to the commit page', () => {
        const { queryByTestId } = render(<Placeholder />)
        expect(queryByTestId('commit-example')).toHaveAttribute(
            'href',
            expect.stringMatching(
                /\/repositories\/sourcegraph\/commits\/[a-f0-9]{40}$/
            )
        )
    })
})
