// getRecords.js - Fetches Kintone records, transforms response, & returns array of list items
/**
 * Notes on Kintone responses:
 * record.title.value = value of the Title field
 * record.author.value = value of the Author field
 * record.$id.value = value of the Record number field (unique key for the record)
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