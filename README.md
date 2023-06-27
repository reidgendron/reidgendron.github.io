# reidgendron.github.io
This is a personal portfolio website built using the static site generator Jekyll. See dependencies in order to install the required packages to compile the necessary files.

## Usage
Perform a one-time build:
```bash
jekyll build
```

Run a local server:
```bash
jekyll serve
```

Instead, run over local network:
```bash
jekyll serve --host=0.0.0.0
```
Jekyll site can then be found at [localhost:4000](localhost:4000).

To clean the project and remove generated files:
```bash
jekyll clean
```

## GitHub Pages

The choice of using Ruby and Jekyll as a templating engine was decided based on it's easy integration with Github Pages.

Github pages will automatically generate the site on changes to the repository. The compiled files directory is completely ignored in the `.gitignore` and can be removed with the `jekyll clean` command.

## Dependencies
- `Ruby 3.2.x`
- `Jekyll`