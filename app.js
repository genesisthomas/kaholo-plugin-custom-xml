const { bootstrap } = require("@kaholo/plugin-library");
const { readFile } = require("fs/promises");
const { resolve } = require("path");
const convert = require('xml-js');

async function parse(params) {
  const {
    filePath,
  } = params;

  const absoluteFilePath = resolve(filePath);

  const fileContent = await readFile(
    absoluteFilePath,
    {
      encoding: "utf-8",
      flag: "r",
    },
  );

  let result = convert.xml2json(fileContent, { compact: true, spaces: 4 })
  return JSON.parse(result);
}

module.exports = bootstrap({
  parse
});
