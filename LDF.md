## LDF - Linked Data Fragments

**Super-experimental right now**

Exploring the possibilities of [Linked Data Fragments](http://linkeddatafragments.org). I've integrated [Client.js](https://github.com/LinkedDataFragments/Client.js) into Smartdown, which provides access to [Triple Pattern Fragment servers](Triple Pattern Fragment servers) via [SPARQL](https://en.wikipedia.org/wiki/SPARQL).

### LDF Server and SPARQL Query

[Server](:!serverURL)
[Query](:!query|code)

```javascript/playable/autoplay
//smartdown.import=ldf
var ldf = smartdown.ldf;
smartdown.ldf.Logger.setLevel('NOTICE');

let fragmentServer = 'https://query.wikidata.org/bigdata/ldf';
let query =
`
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX wdp: <http://www.wikidata.org/prop/direct/>
PREFIX wde: <http://www.wikidata.org/entity/>
PREFIX schema: <http://schema.org/>

SELECT DISTINCT ?beatle ?description ?label ?pseudonym ?image WHERE {
  wde:Q1299 wdp:P527 ?beatle .
  ?beatle rdfs:label ?label .
  ?beatle wdp:P742 ?pseudonym .
  ?beatle schema:description ?description .
  ?beatle wdp:P18 ?image .
  FILTER LANGMATCHES(LANG(?label), "EN")
  FILTER LANGMATCHES(LANG(?description), "EN")
}`;


smartdown.setVariable('serverURL', fragmentServer);
smartdown.setVariable('query', query);

var triples = [];
var fragmentsClient = new ldf.FragmentsClient(fragmentServer);
var results = new ldf.SparqlIterator(query,
  {
    fragmentsClient: fragmentsClient
  });

results.on('data', function(result) {
  // console.log('##data', result);
  triples.push(result);
});

results.on('timeout', function(result) {
  console.log('###timeout', result);
});

function stripLang(s) {
  return s.replace(/^"(.*)"(@(.*))?$/, '$1');
}


results.on('end', function(result) {
  // console.log('###end', triples);
  var colNames = [];
  for (var col in triples[0]) {
    // console.log('col', col, triples[0][col]);
    colNames.push(col);
  }

  let table = '\n\n';
  colNames.forEach(colName => {
    table += `|${colName}`;
  });
  table += '|\n';

  colNames.forEach(colName => {
    table += `|:---`;
  });
  table += '|\n';

  triples.forEach(triple => {
    colNames.forEach(colName => {
      let url = triple[colName];
      url = stripLang(url);
      table += `|`;

      if (url.indexOf('http://') === 0) {
        url = 'https' + url.slice(4);
      }
      if (url.indexOf('https://') === 0) {
        if (url.endsWith('.jpg')) {
          table += `![thumbnail](${url})`;
        }
        else {
          table += `[${url}](${url})`;
        }
      }
      else {
        table += url;
      }
    });
    table += '|\n';
  });
  table += '\n\n\n';

  smartdown.setVariable('triples', table, 'markdown');
});

results.on('error', function(result) {
  console.log('###error', result);
});

```

[](:!triples|markdown)

---

[Back to Home](:@Home)
