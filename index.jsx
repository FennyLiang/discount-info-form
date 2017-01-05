import React from 'react';
import reactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';
import indexStyle from './index.css';
import 'whatwg-fetch';

import PlaceHolderImage from './PlaceHolderImage';

class App extends React.Component {


  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      haveFun: false,
      featured: true,
      userPromotions: []
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
    const resp = await fetch('', {
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

    const { result, data } = await resp.json();

    this.setState({ userPromotions: data});
  };

  componentWillMount() {
    this.submitForm();
  }

  styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      flexDirection: 'column',
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

  };

  fadeinStyle = {
    animationDelay: 0.5,
    opacity:1
  };

  render() {

    return (
      <MuiThemeProvider>

        <div style={ {...this.fadeinStyle, ...this.styles.root}} className={indexStyle.fadeIn} >
          {this.state.userPromotions.length == 0 &&
            <Card key={0} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <CardMedia style={{ boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px' }}>
                <PlaceHolderImage aspectRatio={2 / 1} />
              </CardMedia>
            </Card>
          }
          {this.state.userPromotions.map((userPromotion, index) => (
            <Card key={index} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <CardMedia style={{ boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px' }}>
                <PlaceHolderImage aspectRatio={2 / 1} text={userPromotion.description} />
              </CardMedia>
            </Card>
          ))}
        </div>

      </MuiThemeProvider>
    )
  }
}

reactDom.render(<App />, document.getElementById('app'));