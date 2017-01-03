import React from 'react';
import reactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import injectTapEventPlugin from 'react-tap-event-plugin';
import indexStyle from './index.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      position: true,
    };


  }
  static propTypes = {
    children: React.PropTypes.node,
  };

  // getInitialState() {
  //   return {position: true};
  // };

  //
  // componentDidMount() {
  //   setTimeout(function() { this.setState({position: false}); }.bind(this), 1000)
  // };

  tilesData = [
    {
      img: '資產 2.png',
      title: 'Breakfast',
      author: 'jill111',
      featured: true,
    },
    {
      img: 'http://gratisography.com/pictures/370_1.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
      featured: true,
    },
    {
      img: 'http://gratisography.com/pictures/359_1.jpg',
      title: 'Camera',
      author: 'Danson67',
      featured: true,
    },
    {
      img: 'http://gratisography.com/pictures/346_1.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
      featured: true,
    },
    {
      img: 'http://gratisography.com/pictures/337_1.jpg',
      title: 'Camera',
      author: 'Danson67',
      featured: true,
    },
  ];

  styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 600,
        height: '100%',
        overflowY: 'auto',
      },

  };


  fadeinStyle = {
    animationDelay: 0.7,
    opacity:1
  };

  render() {
    return (
      <MuiThemeProvider>

        <div style={ {...this.fadeinStyle, ...this.styles.root}   } className={indexStyle.fadeIn} >
          <GridList
            cols={1}
            cellHeight={100}
            padding={1}
            style={{...this.styles.gridList}}
          >
            {this.tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img}/>
              </GridTile>
            ))}
          </GridList>
        </div>

      </MuiThemeProvider>
    )
  }
}

reactDom.render(<App />, document.getElementById('app'));