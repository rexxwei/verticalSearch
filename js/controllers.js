/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 *
 * v1.2.0
 * MIT License
 */

/* Calaca Controller
 *
 * On change in search box, search() will be called, and results are bind to scope as results[]
 *
 */
Calaca.controller("calacaCtrl", [
  "calacaService",
  "$scope",
  "$location",
  function (results, $scope, $location) {
    $scope.options1 = {
      position: { x: 10, y: 10 },
      size: { width: 300, height: 100 },
    };

    $scope.options2 = {
      position: { x: 100, y: 10 },
      size: { width: 300, height: 500 },
    };

    //Init empty array
    $scope.results = [];
    $scope.ranking = {};

    //Init offset
    $scope.offset = 0;

    var paginationTriggered;
    var maxResultsSize = CALACA_CONFIGS.size;
    var searchTimeout;

    $scope.delayedSearch = function (mode) {
      clearTimeout(searchTimeout);

      searchTimeout = setTimeout(function () {
        $scope.search(mode);
      }, CALACA_CONFIGS.search_delay);
    };

    //On search, reinitialize array, then perform search and load results
    $scope.search = function (m) {
      $scope.results = [];
      if ($scope.ranking[$scope.query] == undefined)
        $scope.ranking[$scope.query] = {};

      $scope.offset = m == 0 ? 0 : $scope.offset; //Clear offset if new query
      $scope.loading = m == 0 ? false : true; //Reset loading flag if new query

      if (m == -1 && paginationTriggered) {
        if ($scope.offset - maxResultsSize >= 0)
          $scope.offset -= maxResultsSize;
      }
      if (m == 1 && paginationTriggered) {
        $scope.offset += maxResultsSize;
      }
      $scope.paginationLowerBound = $scope.offset + 1;
      $scope.paginationUpperBound =
        $scope.offset == 0 ? maxResultsSize : $scope.offset + maxResultsSize;
      $scope.loadResults(m);
    };

    //Load search results into array
    $scope.loadResults = function (m) {
      results.search($scope.query, m, $scope.offset).then(function (a) {
        //Load results
        var i = 0;
        for (; i < a.hits.length; i++) {
          $scope.results.push(a.hits[i]);
        }

        //Set time took
        $scope.timeTook = a.timeTook;

        //Set total number of hits that matched query
        $scope.hits = a.hitsCount;

        //Pluralization
        $scope.resultsLabel = $scope.hits != 1 ? "results" : "result";

        //Check if pagination is triggered
        paginationTriggered = $scope.hits > maxResultsSize ? true : false;

        //Set loading flag if pagination has been triggered
        if (paginationTriggered) {
          $scope.loading = true;
        }
      });
    };

    $scope.paginationEnabled = function () {
      return paginationTriggered ? true : false;
    };

    $scope.setScore = function (pageId, score) {
      $scope.ranking[$scope.query][pageId] = score;

      $scope.rank = "QueryID AssessorID DocID Grade";

      for (q in $scope.ranking) {
        if (q.toLowerCase() == "immigration order obama") {
          q_id = "152501";
        } else if (q.toLowerCase() == "immigration 20th century") {
          q_id = "152502";
        } else if (q.toLowerCase() == "illegal immigration") {
          q_id = "152503";
        }
        for (u in $scope.ranking[q]) {
          $scope.rank =
            $scope.rank +
            "\n" +
            q_id +
            // "152501" +
            " " +
            "Q0" +
            " " +
            u +
            " " +
            $scope.ranking[q][u];
        }
      }
    };
  },
]);
