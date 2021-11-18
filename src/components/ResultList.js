// ResultList.js - List component - Creates a list from the list items array

// Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React element

export default function ResultList(props) {

  return (
    <div>
      <ul>
        {props.searchResults.map(function (resultRecord, index) {
          return <li key={index}>{resultRecord.title} by {resultRecord.author}</li>;
        })}
      </ul>
    </div>
  );
};