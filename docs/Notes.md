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


## event.records

```js
[
    {
        "Record_number": {
            "type": "RECORD_NUMBER",
            "value": "8"
        },
        "Updated_by": {
            "type": "MODIFIER",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Created_by": {
            "type": "CREATOR",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Updated_datetime": {
            "type": "UPDATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "Created_datetime": {
            "type": "CREATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Gunnm"
        },
        "alternative_title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Battle Angel Alita"
        },
        "author": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Yukito Kishiro"
        },
        "genre": {
            "type": "CHECK_BOX",
            "value": [
                "Action",
                "Cyberpunk"
            ]
        },
        "$revision": {
            "type": "__REVISION__",
            "value": "1"
        },
        "$id": {
            "type": "__ID__",
            "value": "8"
        }
    },
    {
        "Record_number": {
            "type": "RECORD_NUMBER",
            "value": "7"
        },
        "Updated_by": {
            "type": "MODIFIER",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Created_by": {
            "type": "CREATOR",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Updated_datetime": {
            "type": "UPDATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "Created_datetime": {
            "type": "CREATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Usogui"
        },
        "alternative_title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "The Lie Eater"
        },
        "author": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Toshio Sako"
        },
        "genre": {
            "type": "CHECK_BOX",
            "value": [
                "Action",
                "Gambling"
            ]
        },
        "$revision": {
            "type": "__REVISION__",
            "value": "1"
        },
        "$id": {
            "type": "__ID__",
            "value": "7"
        }
    },
    {
        "Record_number": {
            "type": "RECORD_NUMBER",
            "value": "6"
        },
        "Updated_by": {
            "type": "MODIFIER",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Created_by": {
            "type": "CREATOR",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Updated_datetime": {
            "type": "UPDATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "Created_datetime": {
            "type": "CREATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Batuque"
        },
        "alternative_title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Batuque"
        },
        "author": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Toshio Sako"
        },
        "genre": {
            "type": "CHECK_BOX",
            "value": [
                "Action"
            ]
        },
        "$revision": {
            "type": "__REVISION__",
            "value": "1"
        },
        "$id": {
            "type": "__ID__",
            "value": "6"
        }
    },
    {
        "Record_number": {
            "type": "RECORD_NUMBER",
            "value": "5"
        },
        "Updated_by": {
            "type": "MODIFIER",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Created_by": {
            "type": "CREATOR",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Updated_datetime": {
            "type": "UPDATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "Created_datetime": {
            "type": "CREATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Kimetsu no Yaiba"
        },
        "alternative_title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Demon Slayer"
        },
        "author": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Koyoharu Gotouge"
        },
        "genre": {
            "type": "CHECK_BOX",
            "value": [
                "Action"
            ]
        },
        "$revision": {
            "type": "__REVISION__",
            "value": "1"
        },
        "$id": {
            "type": "__ID__",
            "value": "5"
        }
    },
    {
        "Record_number": {
            "type": "RECORD_NUMBER",
            "value": "4"
        },
        "Updated_by": {
            "type": "MODIFIER",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Created_by": {
            "type": "CREATOR",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Updated_datetime": {
            "type": "UPDATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "Created_datetime": {
            "type": "CREATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Hachiwan Diver"
        },
        "alternative_title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "81 diver"
        },
        "author": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Yokusaru Shibata"
        },
        "genre": {
            "type": "CHECK_BOX",
            "value": [
                "Action",
                "Comedy",
                "Sports"
            ]
        },
        "$revision": {
            "type": "__REVISION__",
            "value": "1"
        },
        "$id": {
            "type": "__ID__",
            "value": "4"
        }
    },
    {
        "Record_number": {
            "type": "RECORD_NUMBER",
            "value": "3"
        },
        "Updated_by": {
            "type": "MODIFIER",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Created_by": {
            "type": "CREATOR",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Updated_datetime": {
            "type": "UPDATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "Created_datetime": {
            "type": "CREATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Golden Kamuy"
        },
        "alternative_title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Golden Kamuy"
        },
        "author": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Satoru Noda"
        },
        "genre": {
            "type": "CHECK_BOX",
            "value": [
                "Action",
                "Comedy"
            ]
        },
        "$revision": {
            "type": "__REVISION__",
            "value": "1"
        },
        "$id": {
            "type": "__ID__",
            "value": "3"
        }
    },
    {
        "Record_number": {
            "type": "RECORD_NUMBER",
            "value": "2"
        },
        "Updated_by": {
            "type": "MODIFIER",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Created_by": {
            "type": "CREATOR",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Updated_datetime": {
            "type": "UPDATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "Created_datetime": {
            "type": "CREATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Undead Unluck"
        },
        "alternative_title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Undead Unluck"
        },
        "author": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Yoshifumi Tozuka"
        },
        "genre": {
            "type": "CHECK_BOX",
            "value": [
                "Action"
            ]
        },
        "$revision": {
            "type": "__REVISION__",
            "value": "1"
        },
        "$id": {
            "type": "__ID__",
            "value": "2"
        }
    },
    {
        "Record_number": {
            "type": "RECORD_NUMBER",
            "value": "1"
        },
        "Updated_by": {
            "type": "MODIFIER",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Created_by": {
            "type": "CREATOR",
            "value": {
                "code": "Administrator",
                "name": "Administrator"
            }
        },
        "Updated_datetime": {
            "type": "UPDATED_TIME",
            "value": "2021-11-16T13:33:00Z"
        },
        "Created_datetime": {
            "type": "CREATED_TIME",
            "value": "2021-11-16T01:05:00Z"
        },
        "title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Managa_Title"
        },
        "alternative_title": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Please"
        },
        "author": {
            "type": "SINGLE_LINE_TEXT",
            "value": "Managa_Author"
        },
        "genre": {
            "type": "CHECK_BOX",
            "value": [
                "Cyberpunk"
            ]
        },
        "$revision": {
            "type": "__REVISION__",
            "value": "2"
        },
        "$id": {
            "type": "__ID__",
            "value": "1"
        }
    }
]
```
