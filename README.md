# Welcome to {projectName} automated test

This project is use `cypress` for automated test

## Continuous integration

This project is use **Continuous integration** for check automated test

| Continuous integration |    Server    | Status                                                                                                                                                                    |
| :--------------------: | :----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     Github Actions     | {branchName} | [![Github Actions](https://github.com/20Scoops-CNX/{repo}/workflows/{nameWorkflows}/badge.svg)](https://github.com/20Scoops-CNX/{repo}/actions?workflow={nameWorkflows2}) |

### Note:

- nameWorkflows : If have space use `%20` replace space
- nameWorkflows2 : If have space use `+` replace space

## Installation

Use the package manager [yarn](https://yarnpkg.com/en/docs/install#mac-stable)
to install project and use command below to install **cypress** and **package**
is using in project

```bash
git clone https://github.com/20Scoops-CNX/{repo}.git
cd paylo-cypress
npm install
```

## Usage

Use the command below to open **cypress**

```bash
yarn cypress:open
```

## Feature

### Head of feature

- [ ] Feature name

---

## Stack

- [x] Cypress
- [x] ESLint
- [x] Prettier
- [x] Webpack
- [x] Continuous Integration (Circle CI and Github Action)

## You also trigger this test by using below command:

- Before use command below please add GITHUB_BOT_TOKEN at GitHub secrets in the
  project of developer.
- Settings => Secrets => Add new secret => YOUR_SECRET_NAME please type
  GITHUB_BOT_TOKEN => Value please input token of bot.

```yml
jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Github Action Cypress
        env:
          GITHUB_TOKEN_20CNX_BOT: ${{secrets.GITHUB_TOKEN_20CNX_BOT}}
        run: |
          curl --request POST \
          --url https://api.github.com/repos/20Scoops-CNX/procom-cypress/dispatches \
          --header 'accept: application/vnd.github.everest-preview+json' \
          --header 'authorization: Bearer '$GITHUB_TOKEN_20CNX_BOT \
          --header 'content-type: application/json' \
          --data {\"event_type\":\"trigger_external_test\"}
```
