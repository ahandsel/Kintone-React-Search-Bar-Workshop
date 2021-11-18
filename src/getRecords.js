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

  const body = {
    'app': kintone.app.getId(),
    'query': 'order by $id asc'
  };

  const resp = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body
  );
  let listItemArray = [];

  let respRecords = resp.records; // array of records (objects)

  respRecords.forEach(function (record) {
    listItemArray.push({
      uniqueKey: record.$id.value,
      author: record.author.value,
      title: record.title.value
    })
  });

  console.log('listItemArray');
  console.log(listItemArray);

  return listItemArray;
};