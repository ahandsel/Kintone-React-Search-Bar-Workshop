// getRecords.js - Fetches Kintone records, transforms response, & returns array of list items
/**
 * Notes on Kintone responses:
 * record.title.value = value of the Title field
 * record.author.value = value of the Author field
 * record.Record_number.value = value of the Record number field (unique key for the record)
 */
/**
const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
};

function RenderResult() {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);
 */ 
export default async function getRecords() {
  const respRecords = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
    'app': kintone.app.getId(),
    'query': 'query=order by Record_number asc'
  });
  const jsonResponse = await respRecords.json();

  console.log(jsonResponse);

  let uniqueKey, title, author;

  // Map (1->1 transform) an array of records from the formatted API response to an array of list items
  const ListItemArray = jsonResponse.records.map(
    record => {
      uniqueKey = record.Record_number.value;
      title = record.title.value;
      author = record.author.value;

      return <li key={uniqueKey}><b>{title}</b> written by {author}</li>
    }
  )

  return ListItemArray;
};