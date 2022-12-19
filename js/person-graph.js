var start = function () {

  var data = {
    nodes: [],
    links: []
  }
  var addNode = function (id, text, type) {
    data.nodes.push({
      id: id,
      text: text,
      type: type || 0
    })
  }

  var addLink = function (a, b) {
    data.links.push({
      source: a,
      target: b
    })
  }

  addNode(0,"Bob Coecke", "person")
  addNode(1,"Giovanni de Felice", "person")
  addNode(2,"Konstantinos Meichanetzidis", "person")
  addNode(3,"Alexis Toumi", "person")
  addNode(4,"Titouan Carette", "person")
  addNode(5,"Simon Perdrix", "person")
  addNode(6,"Niel de Beaudrap", "person")
  addNode(7,"Aleks Kissinger", "person")
  addNode(8,"Ross Duncan", "person")
  addNode(9,"Richard East", "person")
  addNode(10,"John van de Wetering", "person")
  addNode(11,"Emmanuel Jeandel", "person")
  addNode(12,"Quanlong Wang", "person")
  addNode(13,"Vladimir Zamdzhiev", "person")
  addNode(14,"Cole Comfort", "person")
  addNode(15,"Craig Gidney", "person")
  addNode(16,"Miriam Backens", "person")
  addNode(17,"Hector Miller-Bakewell", "person")
  addNode(18,"Renaud Vilmart", "person")
  addNode(19,"Dominic Horsman", "person")
  addNode(20,"Xiaoning Bian", "person")
  addNode(21,"Amar Hadzihasanovic", "person")
  addNode(22,"Kang Feng Ng", "person")
  addNode(23,"Alexander Cowtan", "person")
  addNode(24,"Will Simmons", "person")
  addNode(25,"Stefano Gogioso", "person")
  addNode(26,"Richie Yeung", "person")
  addNode(27,"Tom Peham", "person")
  addNode(28,"Lukas Burgholzer", "person")
  addNode(29,"Robert Wille", "person")
  addLink(0,7)
  addLink(0,3)
  addLink(0,19)
  addLink(0,1)
  addLink(0,2)
  addLink(0,12)
  addLink(0,8)
  addLink(0,5)
  addLink(0,25)
  addLink(1,3)
  addLink(1,21)
  addLink(1,17)
  addLink(1,10)
  addLink(1,22)
  addLink(1,2)
  addLink(1,16)
  addLink(1,26)
  addLink(1,25)
  addLink(2,7)
  addLink(2,3)
  addLink(2,10)
  addLink(2,6)
  addLink(2,25)
  addLink(3,26)
  addLink(3,25)
  addLink(4,19)
  addLink(4,11)
  addLink(4,18)
  addLink(4,5)
  addLink(5,19)
  addLink(5,11)
  addLink(5,16)
  addLink(5,6)
  addLink(5,12)
  addLink(5,18)
  addLink(5,8)
  addLink(6,7)
  addLink(6,19)
  addLink(6,10)
  addLink(6,12)
  addLink(6,8)
  addLink(6,20)
  addLink(7,14)
  addLink(7,19)
  addLink(7,17)
  addLink(7,10)
  addLink(7,16)
  addLink(7,12)
  addLink(7,18)
  addLink(7,8)
  addLink(7,13)
  addLink(8,23)
  addLink(8,19)
  addLink(8,10)
  addLink(8,12)
  addLink(8,24)
  addLink(9,10)
  addLink(10,17)
  addLink(10,16)
  addLink(10,18)
  addLink(11,12)
  addLink(11,18)
  addLink(12,21)
  addLink(12,19)
  addLink(12,22)
  addLink(12,16)
  addLink(12,18)
  addLink(12,26)
  addLink(12,20)
  addLink(16,17)
  addLink(21,22)
  addLink(23,24)
  addLink(25,26)
  addLink(27,28)
  addLink(27,29)
  addLink(28,29)


  // Event handling

  var selected = null;

  drag = simulation => {

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      if (selected != null) {
        $("#info-"+selected).toggle();
      }
      $("#info-"+d.id).toggle();
      selected = d.id;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }


  // Map drawing

  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map(d => Object.create(d));


  const constrain = function (x) {
    return Math.max(-size * 0.8, Math.min(x, size * 0.8))
  }


  const constrainForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      node.x = constrain(node.x);
      node.y = constrain(node.y);
    }
  }

  const midForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      var str = 500;
      node.vx -= str*k * Math.pow(1.1*node.x / size, 3);
      node.vy -= str*k * Math.pow(1.1*node.y / size, 3);
    }
  }

  const categoryForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      if (node.type == "field") {
        node.y -= k * (node.y - 0.9 * size);
      }
      if (node.type == "place") {
        node.x -= k * (node.x - 0.9 * size);
      }
    }
  }

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody().strength(-700))
    .force("mid", midForce)
    .force("center", d3.forceCenter(0, 0))
    .force("constrain", constrainForce)
    //.force("category", categoryForce)

    
    /*
    */


  const size = 500

  const svg = d3.select("#map").append("svg")
    .attr("width", "90%")
    .attr("height", "90%")
    .attr('viewBox', `-${size} -${size} ${2*size} ${2*size}`)

  g = svg.append('g');

  svg.call(d3.zoom()
    .scaleExtent([1 / 2, 8])
    .on("zoom", zoomed));

  function zoomed() {
    g.attr("transform", d3.event.transform);
  }

  const link = g.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("color", function (d) {
      switch (d.type) {
        case 0:
          return "blue";
        default:
          return "red";
      }
    });


  var color = function (a) {
    switch (a) {
      case "place":
        return "#DAA";
      case "person":
        return "#ADA";
      case "field":
        return "#AAD";
      default:
        return "black";
    }
  }

  var node = g.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .enter().append("g")
    .call(drag(simulation));

  var labels1 = node.append("text")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.text;
    })
    .attr('x', 6)
    .attr('y', 3);


  function getTextBox(selection) {
    selection.each(function (d) {
      d.bbox = this.getBBox();
    })
  }

  node.call(getTextBox)
    .append("rect")
    .attr("x", function (d) {
      return d.bbox.x
    })
    .attr("y", function (d) {
      return d.bbox.y
    })
    .attr("width", function (d) {
      return d.bbox.width
    })
    .attr("height", function (d) {
      return d.bbox.height
    })
    .attr("fill", d => color(d.type))
    .attr("opacity", "0.2")


  var labels2 = node.append("text")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.text;
    })
    .attr('x', 6)
    .attr('y', 3);



  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("transform", d => `translate(${d.x},${d.y})`);
  });

  // invalidation.then(() => simulation.stop());
}