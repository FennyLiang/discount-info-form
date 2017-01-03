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
      img: 'images/grid-list/00-52-29-429_640.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      img: 'images/grid-list/burger-827309_640.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
    },
    {
      img: 'images/grid-list/camera-813814_640.jpg',
      title: 'Camera',
      author: 'Danson67',
    },
    {
      img: 'images/grid-list/morning-819362_640.jpg',
      title: 'Morning',
      author: 'fancycrave1',
    },
    {
      img: 'images/grid-list/hats-829509_640.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      img: 'images/grid-list/honey-823614_640.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      img: 'images/grid-list/vegetables-790022_640.jpg',
      title: 'Vegetables',
      author: 'jill111',
    },
    {
      img: 'images/grid-list/water-plant-821293_640.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
  ];

  styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowY: 'auto',
      },
      titleStyle: {
        color: 'rgb(0, 188, 212)',
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
          <GridList style={{...this.styles.gridList}} cols={2.2}>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                titleStyle={styles.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} />
              </GridTile>
            ))}

          </GridList>
        </div>
      </MuiThemeProvider>
    )
  }
}

reactDom.render(<App list={[1,2,3,4,5,6,7,8,9,10]} />, document.getElementById('app'));