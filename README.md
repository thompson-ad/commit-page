# Commit page frontend coding exercise

This exercise is designed to give you an opportunity to demonstrate your skills building frontend UIs.

## Task 📝

Your goal is to implement a page inside an imaginary app that displays information about a **Git commit** to the user, including the **diff** of the commit, according to this [Figma design](https://www.figma.com/file/xZtzh74mCJHtG8tf4jY0dN/Commit-page-CODING-EXERCISE?node-id=0%3A1).
The commit page should appear when navigating to http://localhost:1234/repositories/:repository/commits/:commitSHA (as displayed in the design), for example http://localhost:1234/repositories/sourcegraph/commits/d219ebdc745786fa08a48b85831b77726dd1d118.
You do not need to implement any other pages.

You have 3 hours for your submission.
Reserve 10 minutes at the end of your time to fill out the SOLUTION.md file documenting in detail:

- Any context about your approach that you want to share with the reviewers - particular architectural decisions, technology choices, intentional deviations etc.
- Any known limitations of your solution and how you chose those trade-offs.
- Anything that's missing from your solution that you would add if you had more time. Please, explain in detail the 'what, how, and why' of each item.

The SOLUTION.md file is a very important part of this coding exercise and will be taken into consideration for the final score.

Once you're done, pack your solution into an archive with `npm pack` and send it back to us.
Using `npm pack` ensures that the big `node_modules` folder is not included in the archive.
Note: Email services like GMail will reject ZIP files as attachments containing JavaScript for security reasons, but sharing it through Google Drive (or a different cloud service) and including a link in the email works.

An **engineer** and a **designer** will grade your submission on code (implementation), result (UI, UX, functionality, adherence to the design specification, etc) and your solution notes, so we recommend to not compromise one over the other.
Apply the same standards to your solution you would to any solution you implement in a "real" app.
If you can't get the whole exercise done in the time box, cut scope and make informed trade-offs the same way you would for a "real" app and explain them in your SOLUTION.md.
Try to hand in a "well-rounded" submission that demonstrates your skills as well as possible.

## Backend

We deployed a mini API for Git data for you to use under `https://mini-git.sgdev.org`.
It allows you to query repositories, commits, diffs and all details you need in your implementation.
This is where your submission should fetch data from.

You can chose between two interfaces that serve the same data, depending on which one you are more comfortable with (but do not use both APIs in your solution, decide on one).
The following links give you the API explorers/documentation for each:

- GraphQL: https://mini-git.sgdev.org/graphql
- REST: https://mini-git.sgdev.org/rest-api-docs

You can also find generated TypeScript types for each in [`src/generated/graphql.ts`](src/generated/graphql.ts) and [`src/generated/rest.ts`](src/generated/graphql.ts).

## What's in the box 📦

- A scaffold TypeScript React application with `react-router` for routing (see App.tsx)
- Bundling (you shouldn't need to worry about this, just follow the steps below and it should "just work")
- CSS/SCSS bundling (you can just import CSS files into your TypeScript files, or from other SCSS files as you like)
- Bootstrap CSS framework for some basic styles (you don't have to use this to implement your solution)
- A simple GraphQL API query function in [`src/api.ts`](src/api.ts)
- Generated TypeScript types for the API in [`src/generated/graphql.ts`](src/generated/graphql.ts)
- Testing (e.g. [`src/Placeholder.test.tsx`](src/Placeholder.test.tsx), run `npm test` to run tests)

Keep in mind all of this is just here to save you time - you can remove, replace or add anything you'd like!

## Getting started 🚀

This folder contains a scaffold React application with TypeScript and Parcel to get you started quickly.
However, you can change the existing code and setup in any way you'd like.

First install dependencies:

```
npm install
```

then start the development server:

```
npm start
```

Afterwards your server should be accessible at http://localhost:1234

Happy coding!
