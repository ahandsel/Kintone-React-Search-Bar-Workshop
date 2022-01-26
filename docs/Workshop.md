# Build a React Search Bar that Queries a Database Workshop

## Outline <!-- omit in toc -->
<!-- markdownlint-disable MD007 -->
* [Workshop Overview](#workshop-overview)
* [Coding from `workshop` branch to `master`](#coding-from-workshop-branch-to-master)
  * [README](#readme)
  * [src/index.js](#srcindexjs)
  * [src/components/SearchBar.js](#srccomponentssearchbarjs)
  * [src/components/ResultList.js](#srccomponentsresultlistjs)
<!-- markdownlint-enable MD007 -->

---

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

---

## Coding from `workshop` branch to `master`

### README

```sh
git clone -b workshop https://github.com/ahandsel/Kintone_React_Search_Bar
```

### src/index.js
  * The `handleChange` function takes in the browser-generated event object and the `listItems`.
  * The user input stored in the event object is used to compare with title field.
  * `filter()` accepts a function as a parameter.
    * That function acts as a condition to evaluate each item in the array as true-or-false.
    * `filter()` then returns an array of items passing that condition.
  * Conclude by setting `setSearchResults(filterResults)`

  ```js
  const handleChange = e => { // e is a typical way to name the browser-generated event object
    let filterResults = listItems.filter(record =>
      record.title.toLowerCase().includes(e.target.value.toLowerCase()) // filter condition
    );

    console.log('filterResults: \n', filterResults);

    setSearchResults(filterResults);
  };
  ```

### src/components/SearchBar.js
  * Complete the `<input />` element to build the search bar
  * `className='SearchBar'`
  * `onChange={props.handleChange}`

  ```jsx
  className=''
  ...
  onChange={props.handleChange}
  ```

### src/components/ResultList.js
  * Finishing the ResultList component to output the list of records by using map function on searchResults
  * `{props.searchResults.map(function (resultRecord) {})}`
  * Inside we would return JSX: return `<li key={resultRecord.uniqueKey}>{resultRecord.title} written by {resultRecord.author}</li>`

  ```jsx
  <div className='ResultList'>
    <ul>
      {props.searchResults.map(function (resultRecord) {
        return (
          <li key={resultRecord.uniqueKey}>
            {resultRecord.title} written by {resultRecord.author}
          </li>
        )
      })}
    </ul>
  </div>
  ```
