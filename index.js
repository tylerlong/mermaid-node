// Run some jQuery on a html fragment
var jsdom = require("jsdom");

jsdom.defaultDocumentFeatures = {
    FetchExternalResources: ["script"],
    ProcessExternalResources: true
};

jsdom.env(
  `
<html>
  <body>
    <div class="mermaid" id="container">
graph LR
A-->B
    </div>
  </body>
</html>
  `,
  ['https://cdn.jsdelivr.net/mermaid/6.0.0/mermaid.min.js'],
  function (err, window) {
    console.log(err);

    global.window = window;
    global.document = window.document;
    global.mermaid = window.mermaid;

    console.log(document.getElementById('container').innerHTML);
    mermaid.init(undefined, document.getElementById('container'));
    console.log(document.getElementById('container').innerHTML);
  }
);
