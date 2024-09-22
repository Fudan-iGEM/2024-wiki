# Team Fudan 2024 Wiki

We use [Vue.js](https://vuejs.org/) and [Vuepress 2](https://vuepress.vuejs.org/) to build our wiki as an [Progressive Web app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) on [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/), not using [Flask](https://palletsprojects.com/p/flask/). Our custom theme is based on the [Vuepress-theme-Hope](https://theme-hope.vuejs.press/).

This repository contains **all coding assets** to generate our team's wiki (HTML, CSS, JavaScript, TypeScript, Python, etc).

Images, photos, icons and fonts are stored on `static.igem.wiki` using [tools.igem.org/uploads](https://tools.igem.org/uploads), and Videos are embedded from [iGEM Video Universe](https://video.igem.org).

We built our wiki following [gitlab guide](https://tools.igem.org/wiki/gitlab-guide) and [competition.igem.org/deliverables/team-wiki](https://competition.igem.org/deliverables/team-wiki). No [external content](https://tools.igem.org/wiki/external-content-check) is used in our wiki.

The content of this repository is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

## To run this wiki locally

Please follow these steps:

1. Clone the repository.
2. Install the necessary dependencies by running `pnpm install`.
3. Start the development server by running `pnpm docs:dev`.
4. The static version of the wiki can be produced via `pnpm docs:build`

----
`Code by: Zhenghan Chen`