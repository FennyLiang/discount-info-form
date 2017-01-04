import React from 'react';
import reactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import injectTapEventPlugin from 'react-tap-event-plugin';
import indexStyle from './index.css';
import 'whatwg-fetch';


class App extends React.Component {


  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      haveFun: false,
      descriptionFortoken: "鴻海專案優惠",
      featured: true,
    };

  }


  static propTypes = {
    children: React.PropTypes.node,
  };


  getParameterByName =(name, url) => {
      if (!url) {
        url = window.location.href;
      }
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      var decoUrl = decodeURIComponent(results[2].replace(/\+/g, " "));
      return decoUrl;
  };


  async submitForm(decoUrl) {
    var resultToken = this.getParameterByName('token', decoUrl);
    console.log(resultToken);
    const resp = await fetch('https://ede065b2.ngrok.io/GetUserPromotions', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      // credentials: 'include',
      body: JSON.stringify({
        token: resultToken,
      }),
    });

    console.log(resp);

    const { result, data } = await resp.json();
    // console.log(result, data[0].description);



    if (result == 'success') {
      this.setState({ haveFun: true, descriptionFortoken: data[0].description });
    }

    else{
      this.setState({haveFun:false});
    }
  };

  componentWillMount() {
    this.submitForm();
  }


  tilesData = [
    {
      img: 'wemoIcon.png',
      title: '',
    },

  ];

  styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
      }

  };

  imageStyle ={
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 200,
    display: 'inline-block',
    backgroundPosition: 'center',
    border: '#EEEEEE 1px',
  };

  fadeinStyle = {
    animationDelay: 0.7,
    opacity:1
  };

  render() {

    return (
      <MuiThemeProvider>

        <div style={ {...this.fadeinStyle, ...this.styles.root}} className={indexStyle.fadeIn} >
          <GridList
            cols={1}
            cellHeight={100}
            padding={1}
            style={{...this.styles.gridList}}
          >
            {this.tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={this.state.haveFun ? this.state.descriptionFortoken :this.state.descriptionFortoken}
                titleBackground="	rgba(192,192,192,0.5)"
                cols={this.state.featured ? 2 : 1}
                rows={this.state.featured ? 2 : 1}
              >
                <div style={{...this.imageStyle, backgroundImage: this.state.haveFun?  "url(" + tile.img + ")": 'url(wemoIcon.png)', backgroundSize: this.state.haveFun? 'cover': null}}>
                </div>

                {/*backgroundSize: this.state.haveFun? 'cover': null*/}

              </GridTile>
            ))}
          </GridList>
        </div>

      </MuiThemeProvider>
    )
  }
}

reactDom.render(<App />, document.getElementById('app'));