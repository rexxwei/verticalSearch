Vertical Search Engine
=========
This project is one of the project I finished for class CS6200 Information Retrival. The function of it is that the application can render
the webpages that related to user queries.
The Elasticsearch server contained information of 40,000 webpages that related to the topic: the immigration history of United State.
When user input a piece of query, the application will return the most related result (web pages) and display on the left pane.
The final result of the project is deployed on Google Cloud Platform for demonstration.

Link of demo page can be found at: 
https://rexxwei.github.io/portfolio/


Techniques
----
  - WebScraping
  - Text Processing (NLP)
  - Elasticsearch
  - JavaScript, CSS, html
  - Google Cloud Platform
  - Appache2
  - Calaca (provide by MIT License)


How to Use the Project
----
If you have a Elasticsearch server (local or on the cloud), you can download the repository and change 'url' and 'index_name' setting of 'config.js' (in 'js' folder).<br>
Change the ip and index name to your server hosting Elasticsearch instance.
```css
url: "your Elasticsearch server address",
index_name: "your index name",
```

Demo
=========
![calaca-demo](https://s3.amazonaws.com/calaca/calaca-demo.gif "Calaca demo")
