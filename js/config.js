/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 *
 * v1.2.0
 * MIT License
 */

/* Configs */
/**
 *
 * url - Cluster http url
 * index_name - Index name or comma-separated list
 * type - Type
 * size - Number of results to display at a time when pagination is enabled.
 * search_delay - Delay between actual search request in ms. Reduces number of queries to cluster by not making a request on each keystroke.
 */

var CALACA_CONFIGS = {
  // url: "https://elastic:QGvogh5VBAeiutC54IkSUyMy@hw5.es.us-central1.gcp.cloud.es.io:9243/",
  // index_name: "hw5_data",
  url: "http://34.16.158.249:9200",
  index_name: "vs01",
  // type: "document",
  // field: "TEXT",
  size: 50,
  search_delay: 300,
};
