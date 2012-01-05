cputree_maxlevels = 10
cputree_title = (path) ->
  result = ""
  delim = ""
  for name in path
    result += delim + name
    delim = " > "
  result

cputree_placeholder = (prefix, level) ->
  for i in [level..cputree_maxlevels]
    $("#"+prefix+i).remove()
  $("#"+prefix).append('<div id="'+prefix+level+'"></div>')
  return

cputree_draw_chart = (path, db, prefix) ->
  level = path.length
  rows = cputree_load_rows path, db

  if rows.length != 0
    cputree_placeholder prefix, level
    chart = new google.visualization.PieChart(document.getElementById(prefix+level))
    data = new google.visualization.DataTable()
    data.addColumn 'string', 'Component'
    data.addColumn 'number', 'Sec'
    data.addColumn 'string', 'Path'
    data.addRows rows
    options = 
      width: 640
      height: 300
      title: cputree_title(path)
      legend: {position: 'right', textStyle: {fontSize: 10}}
    callback = (chart)->
       () ->
        if chart.getSelection().length
          path = eval(data.getValue(chart.getSelection()[0].row, 2))
          cputree_draw_chart path, db, prefix
    google.visualization.events.addListener chart, 'select', callback(chart)
    chart.draw data, options

cputree_load_children = (path, node)  ->
  return node[2] if path.length == 0
  for child in node[2]
    return cputree_load_children(path.slice(1), child) if child[0] == path[0]


cputree_load_rows = (path, node) ->
  children = cputree_load_children path, node
  newpath = path
  result = []
  for row  in children
    #p = path
    #p.push row[0]
    result.push [row[0] + " " + row[3]+"% ("+row[2].length+")", row[1], JSON.stringify(path.concat(row[0]))]
  result

cputree_table_rows = (parent, level) ->
  result = []
  result.push [Array(level).join('-')+parent[0],parent[1], parent[3]]
  for child in parent[2]
    result = result.concat cputree_table_rows child, level+1
  result

cputree_table = (db, placeholder) ->
  data = new google.visualization.DataTable()
  data.addColumn('string', 'Component name')
  data.addColumn('number', 'CPU time (ms)')
  data.addColumn('number', 'CPU time (%)')
  data.addRows(cputree_table_rows(db, 1))
  #Create and draw the visualization.
  visualization = new google.visualization.Table(document.getElementById(placeholder))
  visualization.draw data, null
