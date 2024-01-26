# Vue Widget Integration in Nuxt with Lerna and PNPM Workspaces

This project makes use of [lerna](https://lerna.js.org/docs/getting-started) and [pnpm workspace](https://pnpm.io/workspaces) to manage two applications: `vue` and `nuxt`.

## Project Objective

The main aim is to create a Nuxt application ([chat-ui](./chat-ui/)) that incorporates functionality from a Vue application ([widget](./packages/widget/)). The widget can be compiled into a single JavaScript file using the simple build option specified in [vite.config.ts](./packages/widget/vite.config.ts). This file can then be easily hosted and served to users interested in using the widget on their own website. Additionally, the entire application, including the widget, can be effortlessly deployed, simplifying the process of distributing and using the widget within the app.
