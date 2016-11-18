# Jekyll Template, Boilerplte

This is a starting point for projects using Jekyll, created by [Brian O'Toole](https://brianzotoole.com/?ref=https://github.com/brianotoole/jekyll-template){:target="_blank"}

## Getting Started

#####1. Install [jekyll](https://jekyllrb.com/docs/quickstart/){:target="_blank"}

`gem install jekyll bundler`

You may need to include sudo at the start if there is a permissions error.

#####2. Install jekyll bundle:

`jekyll new sitename'

#####3. Build and view the website locally:

`cd sitename`

#####4. Serve up the site:

`bundle exec jekyll serve`

This will start up a server on port 4000, and it will reload on any changes to Sass, JS, and content.

#####4. View the website:

`http://localhost:4000` or `http://127.0.0.1:4000`

## Developing
Template source can be found in `_layouts`. Component source can be found in `_includes`. Sass styles can be found in `_sass`. 

The compiled jekyll website is built into the `_site` folder which includes all of the files needed to make the website (static files)

## Creating a Post
Create a Markdown file within the `_posts` folder. The name structure is a backward date followed by the title of your post, for example: `2016-11-18-post-name-here.md`. All of the content within this file is written using the [Markdown language](http://daringfireball.net/projects/markdown/syntax).

At the top of your markdown file, include "Jekyll Front Matter", or post information like this:

```
---
layout: post
title:  Post Title Here
author: Brian O'Toole
categories: web
thumbnail: /img/blog/thumb-title.jpg
---
```