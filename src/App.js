import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

const submit = (event) => {
  event.preventDefault();
  console.log('ok ok');
  
}

//class App extends Component {
function App({classes}) {

  return (
    <div className="App">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            Nature Around Us
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            We are going to learn different kinds of species in nature that live
            together to form amazing environment.
          </Typography>
          <Divider className={classes.divider} light />
          {faces.map(face => (
            <Avatar className={classes.avatar} key={face} src={face} />
          ))}
          <Divider className={classes.divider} light />
          <CardActions>
            <form onSubmit={submit} className="form-container">
            <Button type="submit" style={{borderRadius: 35, backgroundColor: "#c82b27"}}
            variant="contained">
                <span>Entrar na Sala</span>
            </Button>
            </form>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
const WrappedApp = withStyles(styles)(App);
ReactDOM.render(<WrappedApp />, rootElement);

export default App;
