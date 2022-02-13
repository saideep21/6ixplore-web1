# 6ixplore - Discover locally, instantly

This repo is the home of our website for 6ixplore. If you'd like to contribute, please read the instructions below.

<strong>NOTE:</strong> Maintenance and updates are done regularly for enhancements to front-end interface and code quality.

- Refer to [todo.txt](./todo.txt) for TODOs
- Refer to [text.md](./text.md) for copywriting changes

Built with:

- Vue.js v2
- HTML / CSS
- 2 days' sprint and late night by [@maureento8888](https://github.com/maureento8888)

# Getting Started

## Project setup

```
open code editor and new terminal session

cd to the filesystem path you want the local repo to be stored (e.g. /Desktop)

in terminal session, `git clone <HTTPS-LINK>` and wait for download

npm install to install necessary node_modules
```

### Previous dev's development process (pushing local changes to remote)

Dev note: Yes, this process can absolutely be automated with [CI/CD](https://circleci.com/continuous-integration/?utm_source=google&utm_medium=sem&utm_campaign=sem-google-dg--uscan-en-cicd-maxConv-lg-nb&utm_term=g_e-ci%20cd_c__toolchain_20210603&utm_content=sem-google-dg--uscan-en-cicd-maxConv-lg-nb_keyword-text_eta-cicd_mixed-&gclid=CjwKCAiA9aKQBhBREiwAyGP5lY08c34l1PPSVor1fQWm2CZt2vvUJwieB0csT1uX3FP_48id26MAuhoC5pIQAvD_BwE) using tools like [TravisCI](https://travis-ci.org) or [CircleCI](https://circleci.com).

```
npm run build

git add . ("." is for adding all tracked/changed files to stage or get ready for commit - otherwise, can commit specific files with git add <FILE-NAME>)

git commit -m "<GOOD-COMMIT-MSG>"

git push <HTTPS-LINK> master (the HTTPS-LINK here is if you did not initialize a connection b/w GitHub repo AND your local workspace) - works same way as git push origin master

go to hosting service to deploy changes

```

## Basic development scripts for Vue CLI

### Compiles and hot-reloads for development

Dev note: We run `npm run start`

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Vuejs' Configuration Reference](https://cli.vuejs.org/config/).

# License

N/A

# Contributing

- N/A

# RULES

- Before editing code, please run `npm run test:unit` or `npm run test:e2e` (good practice)
- Update [text.md](./text.md) for copy changes
- Check [todo.txt](./todo.txt) for new / backlogged TODOs

# Credits

- Former Dev, Project Lead [@maureento8888](https://github.com/maureento8888)
- Owner of repo [@saideep21](https://github.com/saideep21)
