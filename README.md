## Developing

```bash
git clone git@github.com:react-rally/www.git react-rally
cd react-rally
npm install
cd [YEAR]
npm start
open http://127.0.0.1:8080
```

## Deploying

```bash
# Make your changes on master
git add .
git commit -m"[DESCRIPTION]"
git push

# Merge changes into gh-pages branch
git checkout gh-pages
git merge master

# Once your changes have been merged
cd [YEAR]
npm run deploy

# Move back to master
git checkout master
```
