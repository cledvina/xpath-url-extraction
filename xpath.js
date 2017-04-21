var nodes = $x('//a');
var links = [];
for (x in nodes) {
  var data = nodes[x].href;
  links.push(data);
  console.log(data);
}
copy(links.join("\n"));
links.length + ' links copied to clipboard';
