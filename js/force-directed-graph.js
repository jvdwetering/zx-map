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

  addNode(1,"Nijmegen", "place")
  addNode(19,"Grenoble", "place")
  addNode(24,"Cambridge", "place")
  addNode(28,"Nancy", "place")
  addNode(34,"Kyoto", "place")
  addNode(36,"Piza", "place")
  addNode(40,"London", "place")
  addNode(42,"Oxford", "place")
  addNode(47,"Durham", "place")
  addNode(49,"Glasgow", "place")
  addNode(0,"Aleks Kissinger", "person")
  addNode(9,"John van de Wetering", "person")
  addNode(10,"Sal Wolffs", "person")
  addNode(11,"Stach Kuijpers", "person")
  addNode(12,"Kang Feng Ng", "person")
  addNode(18,"Dominic Horsman", "person")
  addNode(22,"Richard East", "person")
  addNode(23,"Will Simons", "person")
  addNode(25,"Ross Duncan", "person")
  addNode(27,"Vladimir Zamziev", "person")
  addNode(29,"Simon Perdrix", "person")
  addNode(30,"Titouan Carette", "person")
  addNode(31,"Renaud Vilmart", "person")
  addNode(33,"Amar Hadzihasanovic", "person")
  addNode(35,"Philipe Borehi", "person")
  addNode(39,"Fabio Zanasi", "person")
  addNode(41,"Bob Coecke", "person")
  addNode(43,"Niel de Beaudrap", "person")
  addNode(44,"Hector Miller-Bakewell", "person")
  addNode(45,"Miriam Backens", "person")
  addNode(46,"Nicholas Chancellor", "person")
  addNode(48,"Joe Collins", "person")
  addNode(50,"Emmanuel Jeandel", "person")
  addNode(51,"Giovanni de Felice", "person")
  addNode(52,"Stefano Gogioso", "person")
  addNode(54,"Quanlong Wang", "person")
  addNode(2,"ZH", "field")
  addNode(3,"PyZX", "field")
  addNode(4,"Circuit optimisation", "field")
  addNode(5,"Error correcting codes", "field")
  addNode(6,"Quantomatic", "field")
  addNode(7,"Foundations", "field")
  addNode(8,"CoSy", "field")
  addNode(13,"ZW", "field")
  addNode(14,"Completeness", "field")
  addNode(15,"Scalable ZX", "field")
  addNode(16,"Qudits", "field")
  addNode(17,"Fermionic QC", "field")
  addNode(20,"Surface codes", "field")
  addNode(21,"Mixed ZX", "field")
  addNode(26,"MBQC", "field")
  addNode(32,"ΔZX", "field")
  addNode(37,"Hopf algebras", "field")
  addNode(38,"String diagrams", "field")
  addNode(53,"ZX-Dynamics", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(4,0)
  addLink(5,0)
  addLink(6,0)
  addLink(7,0)
  addLink(8,0)
  addLink(1,9)
  addLink(2,9)
  addLink(3,9)
  addLink(4,9)
  addLink(1,10)
  addLink(2,10)
  addLink(1,11)
  addLink(2,11)
  addLink(1,12)
  addLink(13,12)
  addLink(14,12)
  addLink(15,12)
  addLink(16,12)
  addLink(17,12)
  addLink(19,18)
  addLink(20,18)
  addLink(5,18)
  addLink(15,18)
  addLink(21,18)
  addLink(19,22)
  addLink(20,22)
  addLink(15,22)
  addLink(21,22)
  addLink(24,23)
  addLink(4,23)
  addLink(24,25)
  addLink(4,25)
  addLink(26,25)
  addLink(6,25)
  addLink(7,25)
  addLink(28,27)
  addLink(6,27)
  addLink(28,29)
  addLink(14,29)
  addLink(26,29)
  addLink(20,29)
  addLink(21,29)
  addLink(28,30)
  addLink(14,30)
  addLink(21,30)
  addLink(15,30)
  addLink(28,31)
  addLink(14,31)
  addLink(32,31)
  addLink(21,31)
  addLink(34,33)
  addLink(13,33)
  addLink(17,33)
  addLink(36,35)
  addLink(37,35)
  addLink(38,35)
  addLink(40,39)
  addLink(37,39)
  addLink(38,39)
  addLink(42,41)
  addLink(14,41)
  addLink(4,41)
  addLink(7,41)
  addLink(13,41)
  addLink(42,43)
  addLink(4,43)
  addLink(26,43)
  addLink(20,43)
  addLink(2,43)
  addLink(42,44)
  addLink(6,44)
  addLink(8,44)
  addLink(40,45)
  addLink(14,45)
  addLink(2,45)
  addLink(7,45)
  addLink(47,46)
  addLink(5,46)
  addLink(49,48)
  addLink(37,48)
  addLink(28,50)
  addLink(14,50)
  addLink(21,50)
  addLink(42,51)
  addLink(13,51)
  addLink(17,51)
  addLink(42,52)
  addLink(53,52)
  addLink(7,52)
  addLink(42,54)
  addLink(14,54)
  addLink(4,54)
  addLink(7,54)
  addLink(16,54)


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
    return Math.max(-size * 0.9, Math.min(x, size * 0.9))
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
      var str = 200;
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
    .force("charge", d3.forceManyBody().strength(-300))
    .force("mid", midForce)
    .force("center", d3.forceCenter(0, 0))
    .force("constrain", constrainForce)
    //.force("category", categoryForce)

    
    /*
    */


  const size = 700

  const svg = d3.select("#map").append("svg")
    .attr("width", "90%")
    .attr("height", "90%")
    .attr('viewBox', `-${size} -${size} ${2*size} ${2*size}`)

  const link = svg.append("g")
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

  var node = svg.append("g")
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