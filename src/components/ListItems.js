import React from 'react';
// ListItems.js - List component - Creates a list from the list items array

// Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React element

export default function ListItems(props) {

  return (
    <div>
      <ul>{props.list}</ul>
    </div>
  );
};