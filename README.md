# obotix-cli
obotix CLI

## CLI Installation

To install the command line, run the following:
`npm install -g obotix-cli`

To upgrade the command line, run the following:
`npm uninstall -g`

To uninstall the command line, run the following:
`npm uninstall -g obotix-cli`

## Create a new project
```bash
# NEXT STEPS:
#
obotix-cli create backend project-name
cd backend project-name
echo NODE_ENV=devlopment > .env

# NOTE: use with git version >= 2.28.0
git init -b main 
# NOTE: git version < 2.28.0
git init && git symbolic-ref HEAD refs/heads/main 

git add . && git commit -m "initial commit from CLI scaffold"
git remote add origin <REMOTE_URL>
git remote -v
git push -u origin main
```

Location of globals
`~/.nvm/versions/node/v16.15.1/bin`
