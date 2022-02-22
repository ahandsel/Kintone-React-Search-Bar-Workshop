# Exercises

## Exercises 1: Rewrite this if-else statement as a ternary statement

The if-else statement

  ```js
  if (listItems.length > 0) {
    return (
      // JSX includes html-like syntax
      <div className='App'>
        <SearchBar handleChange={handleChange} />
        <ResultList searchResults={searchResults} />
      </div>
    );
  } else {
    return (
      <div className='App'>
        <SearchBar handleChange={handleChange} />
        <p>*** now loading ***</p>
      </div>
    );
  }
  ```

The ternary statement

  ```js
  return (
    // JSX includes html-like syntax
    <div className='App'>
      <SearchBar handleChange={handleChange} />
      {
        (listItems.length > 0)
        ? <ResultList searchResults={searchResults} />
        : <p>*** now loading ***</p>
      }
    </div>
  );
  ```
