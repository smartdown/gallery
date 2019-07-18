### Linked Data Fragments

A few years ago, I learned about idea of [Linked Data Fragments](http://linkeddatafragments.org) (LDF), which is an architecture and software that allows existing knowledge graph data sources to be expressed and made available to web browser clients or other software agents. The basic idea is that a knowledge graph can be made web-accessible via a [Triple Pattern Fragment](http://linkeddatafragments.org/in-depth/#tpf) (TPF) server, and that client software can either query the server with a *triple query*, or can translate a [SPARQL](https://en.wikipedia.org/wiki/SPARQL) query into a set of triple queries. This architecture is efficient, and reduces the amount of software and complexity needed by a potential knowledge graph provider, thereby liberating more knowledge to be available in a web-wide way.

My current understanding, based upon [What is a Linked Data Fragment?](http://linkeddatafragments.org/in-depth/#ldf) is that LDF is a superset of TPF; TPF servers need only provide triple-query access to their data, whereas an LDF server can provide additional means to deliver triple-sets as query results.

#### LDF Servers

As of this writing, there are several [datasets](http://linkeddatafragments.org/data/) that are accessible via LDF servers. This document will attempt to focus on two of them:
- [Wikidata Query Service (WDQS)](https://www.mediawiki.org/wiki/Wikidata_Query_Service/User_Manual) at [Wikidata](https://query.wikidata.org/bigdata/ldf)
- [DBpedia](http://fragments.dbpedia.org)

Both of these services are currently problematic:
- There appears to be a recent change in the WDQS that has broken the ability to apply `LANG` and `LANGMATCHES` functions, so I've simplified some of the WDQS examples accordingly.
- The number of results returned by `Client.js` and `Comunica` for seemingly identical queries is different. I haven't figured out why yet.
- ~~DBpedia is not available via `https`, so it is inaccessible from a secure web page due to [Mixed Content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content#Mixed_active_content) errors. I'm exploring the use of a proxy to work around this. Recent news from the DBpedia and LDF team indicates this limitation may be fixed soon: [HTTPS support for DBpedia APIs](https://forum.dbpedia.org/t/https-support-for-dbpedia-apis/54/3)~~

#### LDF Clients

When I originally explored LDF, I used the Javascript client library [Client.js](https://github.com/LinkedDataFragments/Client.js) to access Wikidata's LDF server.

Recently, the team that developed the above `Client.js` has built a successor product known as [Comunica](http://comunica.linkeddatafragments.org) that should provide triple-query and SPARQL query capability.

This document will attempt to use both the legacy `Client.js` and the Comunica client [library](https://github.com/comunica/comunica/tree/master/packages/actor-init-sparql#usage-within-application).


### Wikidata via SPARQL

From the [Wikidata]() home page:

> Wikidata is a free and open knowledge base that can be read and edited by both humans and machines.

There are various ways to query Wikidata via web-accessible APIs; this document explores the use of SPARQL.

#### Client.js and Wikidata/TPF

Legacy `Client.js` querying the somewhat broken Wikidata TPF interface at https://query.wikidata.org/bigdata/ldf. The *somewhat broken* refers to the fact that language tags are not being returned (eliminating the use of `LANG` and `LANGMATCHES`), and that datatype annotations are being left suffixed to the returned values. The `stripLangAndDatatype()` function is a kludge around this problem.

**This `Client.js` experiment currently produces 144 results, which is different from the `Communica` experiment which produces 179 results. Not sure why this is yet.**


```javascript /playable/autoplay
//smartdown.import=resources/ldf-client-browser.js
var ldf = window.ldf;
ldf.Logger.setLevel('NOTICE');

let fragmentServer = 'https://query.wikidata.org/bigdata/ldf';

let query =
`
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX wdp: <http://www.wikidata.org/prop/direct/>
PREFIX wde: <http://www.wikidata.org/entity/>

SELECT ?beatle ?name ?description ?image WHERE {
  wde:Q1299 wdp:P527 ?beatle .
  ?beatle rdfs:label ?name .
  ?beatle wdp:P18 ?image .
}
`;

//
// This is a kludge because WDQS's TPF endpoint is returning
// datatype suffixes that need to be stripped.
//
function stripLangAndDatatype(s) {
  let ss = s.replace(/^"(.*)"(\^\^(.*))?$/, '$1');
  return ss;
}


var triples = [];
var fragmentsClient = new ldf.FragmentsClient(fragmentServer);

var results = new ldf.SparqlIterator(
  query,
  {
    fragmentsClient: fragmentsClient
  });

results.on('data', function(result) {
  triples.push(result);
});

results.on('end', function(result) {
  smartdown.setVariable('lwtresultsLength', triples.length);
  smartdown.setVariable('lwtresults', triples);
});

results.on('error', function(result) {
  console.log('###error', result);
});
```

[Number of Results](:!lwtresultsLength)
[](:!lwtresults)


#### Comunica and Wikidata/TPF

The Comunica query currently (as of July 17, 2019) takes about 3 to 4 times longer than the legacy `Client.js` query, so wait a little for this query to complete.

```javascript /playable/autoplay
//smartdown.import=resources/comunica-browser.js

let query =
`
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX wdp: <http://www.wikidata.org/prop/direct/>
PREFIX wde: <http://www.wikidata.org/entity/>

SELECT ?beatle ?name ?description ?image WHERE {
  wde:Q1299 wdp:P527 ?beatle .
  ?beatle rdfs:label ?name .
  ?beatle wdp:P18 ?image .
}
`;

Comunica.newEngine().query(
  query,
  {
    sources: [
      {
        type: '',
        value: 'https://query.wikidata.org/bigdata/ldf'
      }
    ]
  })
  .then(function (result) {
    const triples = [];
    result.bindingsStream.on('data', function (data) {
      triples.push({
        beatle: data.get('?beatle').value,
        name: data.get('?name').value,
        image: data.get('?image').value,
      });
    });
    result.bindingsStream.on('end', function () {
      smartdown.setVariable('cwtresultsLength', triples.length);
      smartdown.setVariable('cwtresults', triples);
    });
  })
  .catch(function (err) {
    console.log('err', err);
  });

```

[Number of Results](:!cwtresultsLength)
[](:!cwtresults)


#### Comunica and Wikidata/SPARQL

Let's use Comunica to communicate with Wikidata's SPARQL endpoint, rather than using the TPF interface.

Note that the Wikidata SPARQL endpoint doesn't have the same problem with language tags as the TPF interface, so we can use `FILTER LANGMATCHES(LANG(?name), "EN")` to restrict results to English language. So this experiment will produce 12 results.

```javascript /playable/autoplay
//smartdown.import=resources/comunica-browser.js

// CONSTRUCT WHERE { ?s ?p ?o. ?s ?p ?o }
const query =
`
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX wdp: <http://www.wikidata.org/prop/direct/>
PREFIX wde: <http://www.wikidata.org/entity/>

SELECT DISTINCT ?beatle ?name ?image WHERE {
  wde:Q1299 wdp:P527 ?beatle .
  ?beatle rdfs:label ?name .
  ?beatle wdp:P18 ?image .
  FILTER LANGMATCHES(LANG(?name), "EN")
}
`;
Comunica.newEngine().query(query,
  { sources: [ { type: 'sparql', value: 'https://query.wikidata.org/sparql' } ] })
  .then(function (result) {
    const triples = [];
    result.bindingsStream.on('data', function (data) {
      triples.push({
        beatle: data.get('?beatle').value,
        name: data.get('?name').value,
        image: data.get('?image').value,
      });
    });
    result.bindingsStream.on('end', function () {
      smartdown.setVariable('cwsresultsLength', triples.length);
      smartdown.setVariable('cwsresults', triples);
    });
  })
  .catch(function (err) {
    console.log('err', err);
  });

```

[Number of Results](:!cwsresultsLength)
[](:!cwsresults)

---

The source for this Smartdown document should be available [here](/LDF.md)

---

[Back to Home](:@Home)
