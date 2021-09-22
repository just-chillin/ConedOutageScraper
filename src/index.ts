import axios from "axios";

const intervalServiceURL =
  "https://outagemap.coned.com/resources/data/external/interval_generation_data/metadata.json";
const urls = generateURLs();

async function generateURLs() {
  const dateStr = await axios.get(intervalServiceURL);
  return ["0320101103", "0320101101", "0320101112", "0320101110"].map(
    (filename) =>
      `https://outagemap.coned.com/resources/data/external/interval_generation_data/${dateStr.data.directory}/outages/${filename}.json`
  );
}

async function main() {
  for (const url of await urls) {
    console.log(url);
    try {
      let result = await axios.get(url);
      console.log(result.data);
    } catch {}
  }
}

main();
