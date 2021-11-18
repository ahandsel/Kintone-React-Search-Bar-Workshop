// ResultList.js - List component - Creates a list from the list items array

// Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React element

export default function ResultList(props) {
  return (
    <div className='ResultList'>
      <ul>
        {props.searchResults.map(function (resultRecord) {
          return <li key={resultRecord.uniqueKey}><b className='TitleBold'>{resultRecord.title}</b> written by {resultRecord.author}</li>
        })}
      </ul>
    </div>
  );
};