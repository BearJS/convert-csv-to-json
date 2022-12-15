// eslint-disable-next-line @typescript-eslint/no-var-requires
const csvToJson = require('convert-csv-to-json');

// const fileNumber = 10;
// let current = 3;

// while(current <= fileNumber){
// 	csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(`input-${current}.csv`,`input-${current}.json`);
// 	current++;
// }

csvToJson
  .fieldDelimiter(',')
  .generateJsonFileFromCsv(`input.csv`, `output.json`);
