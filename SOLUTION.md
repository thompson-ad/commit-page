## Approach:

1. Defined a typed api client in `/api/fetchClient` that allows me to create an interface for the frontend in '/api/api.ts`

2. Data fetching using React.useEffect from the Commit page component. The use effect handles the component status during fetching using status enums such as 'IDLE' or 'REJECTED'. When the data is resolved, the component show the fetched data, if it is pending, it will show the loading state.

3. Styled components - seeing as, at sourcegraph, you are planning to update your design system I wanted to show that I am familiar with CSS-in-JS styling solutions such as emotion. I have abstracted a component 'library' in to `/components/lib.ts`.

## Known limitations

1. The handling of data fetching from the CommitPage component could be better. The soltuion does not yet handle the IDLE state, does not display a user friendly error UI. If I had more time I would abstract fetching into a `useAsync()` custom hook that would memoize the useEffect and also cancel the request should the user navigate away from the page (i.e. the component unmounts)

## Missing

1. CORRECT FONTS - I could not find the SF Pro Display font and so used the closest google font I could find.
2. Date functions - The UI is missing the capability to process the timestamp of the commit to display informtion like 'committed 4 days ago' etc. If I had more time I would use a library such as `date-fns` to help me with this.
