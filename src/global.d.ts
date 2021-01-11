declare var process: {
    env: {
        /**
         * The URL of the GraphQL API.
         * This is injected by Parcel with whatever value the environment variable API_URL is set to at build time.
         */
        API_URL: string
    }
}
