## Developing

```bash
$ git clone git@github.com:react-rally/www.git react-rally
$ cd react-rally
$ npm install
$ npm run dev
$ open http://127.0.0.1:8080
```

## Publishing

```bash
$ npm run build
$ git add .
$ git commit -m”Updating site"
$ git push

# Next three lines only needed if developing on branch other than gh-pages
$ git branch -D gh-pages
$ git checkout -b gh-pages
$ git push
```
