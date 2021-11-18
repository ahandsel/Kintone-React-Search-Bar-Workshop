# Notes on the Kintone x React - Search Bar Workshop

Working w/out Kintone
https://cafe.kintone.com/k/170/

## Overview of Notes.md <!-- omit in toc -->
  * [Workshop Overview](#workshop-overview)

## Workshop Overview
  * Setup for Workshop
    * npm install
    * .env
    * customize-manifest.json
    * package.json - Commands to run
      * env-cmd
  * Kintone
    * Workplace Platform & Web Database
    * Create Manga DB + Data import
    * Custom View
  * Code the Search Bar Build
    * Getting records
    * Present records as a list
    * Filter the records by user input
    * Present the filtered records as a new list
  * Code Overview
  * Build & Upload to Kintone
  * Next Step
    * Features to tackle
      * Production build -> Package.json
      * Click on the search result -> go to record detailed view
      * Button to clear search results
      * Include Alternative title field data

## To-Do List
* [] Update README for .env setup
* [] Review package.json & env-cmd

## Code the Search Bar Build

## npm-run-
https://gist.github.com/ahandsel/7ce4e006fae8b635774f9447336c3a50

npm-start.js

failor -> error -> filter catches
Now we want to do something useful with the error
Error as an object -> cautch error -> array

Results as an array
[ { name: 'dev', code: undefined }, { name: 'upload', code: 1 } ]

undefined if not finished
0 is no error
1 is an error
.filter -> callback function is loop through the array looking for the check