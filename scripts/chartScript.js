function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function compareNumbers(a, b) {
    return a - b;
  }
  
  var App = React.createClass({ displayName: "App",
    getInitialState: function () {
      return {
        data: [],
        series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
        labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
        colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'] };
  
    },
    componentDidMount: function () {
      this.populateArray();
      setInterval(this.populateArray, 2000);
    },
    populateArray: function () {
      var data = [],
      series = 5, //getRandomInt(2, 10),
      serieLength = 5; //getRandomInt(2, 10);
  
      for (var i = series; i--;) {
        var tmp = [];
  
        for (var j = serieLength; j--;) {
          tmp.push(getRandomInt(0, 20));
        }
  
        data.push(tmp);
      }
  
      this.setState({ data: data });
    },
    render: function () {
      return /*#__PURE__*/(
        React.createElement("section", null, /*#__PURE__*/
        React.createElement(Charts, {
          data: this.state.data,
          labels: this.state.series,
          colors: this.state.colors,
          height: 250 }), /*#__PURE__*/
  
  
        React.createElement(Charts, {
          data: this.state.data,
          labels: this.state.series,
          colors: this.state.colors,
          height: 250,
          opaque: true,
          grouping: 'stacked' }), /*#__PURE__*/
  
  
        React.createElement(Charts, {
          data: this.state.data,
          labels: this.state.series,
          colors: this.state.colors,
          height: 250,
          grouping: 'layered' }), /*#__PURE__*/
  
  
        React.createElement(Charts, {
          data: this.state.data,
          labels: this.state.series,
          colors: this.state.colors,
          horizontal: true }), /*#__PURE__*/
  
  
        React.createElement(Legend, { labels: this.state.labels, colors: this.state.colors })));
  
  
    } });
  
  
  
  
  var Legend = React.createClass({ displayName: "Legend",
    render: function () {
      var labels = this.props.labels,
      colors = this.props.colors;
  
      return /*#__PURE__*/(
        React.createElement("div", { className: "Legend" },
        labels.map(function (label, labelIndex) {
          return /*#__PURE__*/(
            React.createElement("div", null, /*#__PURE__*/
            React.createElement("span", { className: "Legend--color", style: { backgroundColor: colors[labelIndex % colors.length] } }), /*#__PURE__*/
            React.createElement("span", { className: "Legend--label" }, label)));
  
  
        })));
  
  
    } });
  
  
  var Charts = React.createClass({ displayName: "Charts",
    render: function () {
      var self = this,
      data = this.props.data,
      layered = this.props.grouping === 'layered' ? true : false,
      stacked = this.props.grouping === 'stacked' ? true : false,
      opaque = this.props.opaque,
      max = 0;
  
      for (var i = data.length; i--;) {
        for (var j = data[i].length; j--;) {
          if (data[i][j] > max) {
            max = data[i][j];
          }
        }
      }
  
  
      return /*#__PURE__*/(
        React.createElement("div", { className: 'Charts' + (this.props.horizontal ? ' horizontal' : '') },
        data.map(function (serie, serieIndex) {
          var sortedSerie = serie.slice(0),
          sum;
  
          sum = serie.reduce(function (carry, current) {
            return carry + current;
          }, 0);
          sortedSerie.sort(compareNumbers);
  
          return /*#__PURE__*/(
            React.createElement("div", { className: 'Charts--serie ' + self.props.grouping,
              key: serieIndex,
              style: { height: self.props.height ? self.props.height : 'auto' } }, /*#__PURE__*/
  
            React.createElement("label", null, self.props.labels[serieIndex]),
            serie.map(function (item, itemIndex) {
              var color = self.props.colors[itemIndex],style,
              size = item / (stacked ? sum : max) * 100;
  
              style = {
                backgroundColor: color,
                opacity: opaque ? 1 : item / max + .05,
                zIndex: item };
  
  
              if (self.props.horizontal) {
                style['width'] = size + '%';
              } else {
                style['height'] = size + '%';
              }
  
              if (layered && !self.props.horizontal) {
                //console.log(sortedSerie, serie, sortedSerie.indexOf(item));
                style['right'] = sortedSerie.indexOf(item) / (serie.length + 1) * 100 + '%';
                // style['left'] = (itemIndex * 10) + '%';
              }
  
              return /*#__PURE__*/(
                React.createElement("div", {
                  className: 'Charts--item ' + self.props.grouping,
                  style: style,
                  key: itemIndex }, /*#__PURE__*/
  
                React.createElement("b", { style: { color: color } }, item)));
  
  
            })));
  
  
        })));
  
  
    } });
  
  
  React.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('charts'));