var cputree_draw_chart, cputree_load_children, cputree_load_rows, cputree_maxlevels, cputree_placeholder, cputree_table, cputree_table_rows, cputree_title;

cputree_maxlevels = 10;

cputree_title = function(path) {
  var delim, name, result, _i, _len;
  result = "";
  delim = "";
  for (_i = 0, _len = path.length; _i < _len; _i++) {
    name = path[_i];
    result += delim + name;
    delim = " > ";
  }
  return result;
};

cputree_placeholder = function(prefix, level) {
  var i;
  for (i = level; level <= cputree_maxlevels ? i <= cputree_maxlevels : i >= cputree_maxlevels; level <= cputree_maxlevels ? i++ : i--) {
    $("#" + prefix + i).remove();
  }
  $("#" + prefix).append('<div id="' + prefix + level + '"></div>');
};

cputree_draw_chart = function(path, db, prefix) {
  var callback, chart, data, level, options, rows;
  level = path.length;
  rows = cputree_load_rows(path, db);
  if (rows.length !== 0) {
    cputree_placeholder(prefix, level);
    chart = new google.visualization.PieChart(document.getElementById(prefix + level));
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Component');
    data.addColumn('number', 'Sec');
    data.addColumn('string', 'Path');
    data.addRows(rows);
    options = {
      width: 640,
      height: 300,
      title: cputree_title(path),
      legend: {
        position: 'right',
        textStyle: {
          fontSize: 10
        }
      }
    };
    callback = function(chart) {
      return function() {
        if (chart.getSelection().length) {
          path = eval(data.getValue(chart.getSelection()[0].row, 2));
          return cputree_draw_chart(path, db, prefix);
        }
      };
    };
    google.visualization.events.addListener(chart, 'select', callback(chart));
    return chart.draw(data, options);
  }
};

cputree_load_children = function(path, node) {
  var child, _i, _len, _ref;
  if (path.length === 0) return node[2];
  _ref = node[2];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    child = _ref[_i];
    if (child[0] === path[0]) return cputree_load_children(path.slice(1), child);
  }
};

cputree_load_rows = function(path, node) {
  var children, newpath, result, row, _i, _len;
  children = cputree_load_children(path, node);
  newpath = path;
  result = [];
  for (_i = 0, _len = children.length; _i < _len; _i++) {
    row = children[_i];
    result.push([row[0] + " " + row[3] + "% (" + row[2].length + ")", row[1], JSON.stringify(path.concat(row[0]))]);
  }
  return result;
};

cputree_table_rows = function(parent, level) {
  var child, result, _i, _len, _ref;
  result = [];
  result.push([Array(level).join('-') + parent[0], parent[1], parent[3]]);
  _ref = parent[2];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    child = _ref[_i];
    result = result.concat(cputree_table_rows(child, level + 1));
  }
  return result;
};

cputree_table = function(db, placeholder) {
  var data, visualization;
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Component name');
  data.addColumn('number', 'CPU time (ms)');
  data.addColumn('number', 'CPU time (%)');
  data.addRows(cputree_table_rows(db, 1));
  visualization = new google.visualization.Table(document.getElementById(placeholder));
  return visualization.draw(data, null);
};
