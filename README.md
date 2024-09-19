# Team Fudan 2024 Wiki

We use [Vue.js](https://vuejs.org/) and [Vuepress](https://vuepress.vuejs.org/) to build our wiki as an [Progressive Web app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) on [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/), not using [Flask](https://palletsprojects.com/p/flask/).

This repository contains **all coding assets** to generate our team's wiki (HTML, CSS, JavaScript, TypeScript, Python, etc).

Images, photos, icons and fonts are stored on `static.igem.wiki` using [tools.igem.org/uploads](https://tools.igem.org/uploads), and Videos are embedded from [iGEM Video Universe](https://video.igem.org).

We built our wiki following [gitlab guide](https://tools.igem.org/wiki/gitlab-guide) and [competition.igem.org/deliverables/team-wiki](https://competition.igem.org/deliverables/team-wiki). No [external content](https://tools.igem.org/wiki/external-content-check) is used in our wiki.

## Getting Started

To run this wiki locally, follow these steps:

1. Clone the repository.
2. Install the necessary dependencies by running `pnpm install`.
3. Start the development server by running `pnpm docs:dev`.
4. The static version of the wiki can be produced via `pnpm docs:build`

## Framework

- The main framework of this website is Vuepress 2.x.
- Addtionally, the [Vuepress-theme-Hope](https://theme-hope.vuejs.press/), custom theme was used as a template for building the wiki.
- All three resources are licensed under the MIT License.

## Licenses

The content of this website is licensed under the Creative Commons Attribution 4.0 International License. See the [LICENSE](https://gitlab.igem.org/2023/msp-maastricht/-/blob/main/LICENSE) file for more information.



----
`Code by: Zhenghan Chen`