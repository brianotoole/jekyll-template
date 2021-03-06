# Jekyll Template, Boilerplate

A Jekyll template boilerplate, using Gulp as a task runner, created by [Brian O'Toole](https://brianzotoole.com/?ref=https://github.com/brianotoole/jekyll-template).

## Getting Started

##### 1. Install [jekyll](https://jekyllrb.com/docs/quickstart/)

`gem install jekyll bundler`

You may need to include sudo at the start if there is a permissions error.

##### 2. Install jekyll bundle:

`jekyll new your-site-name`

##### 3. Build and view the website locally:

`cd your-site-name`

##### 4. Clone repo:

`git clone https://github.com/brianotoole/jekyll-template.git`

##### 5. Install NPM and dependencies:

`npm install`

This will install the dependencies listed in the package.json file.

#### 6. Start server using gulp (via gulpfile.js)

`gulp`

This will start up a server on port 4000, and it will reload on any changes to Sass, JS, and content, using BrowserSync.

##### 7. View the site:

`http://localhost:4000` or `http://127.0.0.1:4000`

## Developing
Template source can be found in `_layouts`. Component source can be found in `_includes`. Sass styles can be found in `_sass`.

## Sass Structure
The main file can be found in `scss/main.scss`. This file serves as the Sass "Table of Contents" and where you will add your Sass `@imports`. The file does NOT use Jekyll's standard Front-Matter at the top, since it's using Gulp to build and complie files. If you decide to use a Gem or Build tool to manage/compile assets, then this will need to change.

Sass files live in the `_sass/` folder. As a starter, I've included a `mixins.scss`, `variables.scss` and `base.scss` file to the boilerplate.

## Mixins.scss
The `mixins.scss` file includes a function to calculate `ems` from pixels. This is very useful if you are using a **relative sizing approach** as CSS base, which I am. This means everything will use `ems` and `percentages`, **not pixels**.

Here is how you use this mixin within a selector:
```
.selector-name {
  font-size: calc-em(18px);
}
```
So, use: `calc-em(18px)`

## Variables.scss
The `variables.scss` file includes example color, measurement, breakpoint, and typography variables you may want to include within your project architecture. I try to name variables semantically (purpose, NOT appearance).
```
// BAD
.red {
  color: $color-red;
}
```

```
// GOOD
.warning {
  color: $color-warning;
}
```

## Base.scss
The `base.scss`	file includes global styles for the site. Using a relative sizing approach, it sets the `body` to `font-size: 100%`. Changing the font-size on the body element will adjust the typographical scale for the entire site. This allows you to be able to adjust everything on your site by changing a single value. Increasing or decreasing the body's font-size percentage will adjust the entire site accordingly. This helps with responsive design usability.

## Creating a Post
Create a Markdown file within the `_posts` folder. The name structure is a backward date followed by the title of your post, for example: `2016-11-18-post-name-here.md`. All of the content within this file is written using the [Markdown language](http://daringfireball.net/projects/markdown/syntax).

At the top of your markdown file, include ["Jekyll Front Matter"](https://jekyllrb.com/docs/frontmatter/), or post information like this:

```
---
layout: post
title:  Post Title Here
author: Brian O'Toole
categories: web
thumbnail: /img/blog/thumb-title.jpg
---
```
To access post variables, do so using `{{ page.variable }}`. Ex. - To get the author name, `{{ page.author }}`

## Compiled Jekyll Site
The compiled jekyll website is built into the `_site` folder which includes all of the files needed to make the website.

If you need to serve the site using Jeyll and not Gulp, the command is:

`bundle exec jekyll serve`
