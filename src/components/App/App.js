import React, {Component} from 'react';
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

const StyledCard = withStyles({
  root: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  }
})(Card);

const StyledAvatar = withStyles ({
  root: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -10
    }
  }
})(Avatar);

const StyledCardMedia = withStyles({
  root: {
    paddingTop: "56.25%"
  }
})(CardMedia);

const styles = muiBaseTheme => ({
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

class App extends Component {
  submit = (event) => {
    event.preventDefault();
    this.props.history.push({pathname: '/room', search: '?roomId=foolboyspersonalroom2'});
    //this.props.history.replace({ pathname: '/room' });
  }

  render = () => ( 
    <React.Fragment>
      <div className="App">
        <StyledCard>
          <StyledCardMedia
            image={
              "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
            }
          />
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              WhereBy #FoolBoys
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Entrando na sala dos trouxas, onde por muitos anos 3 trabalhadores de uma empresa foram verdadeiros trouxas. Na verdade, um ainda é.
            </Typography>
            <Divider light />
            {faces.map(face => (
              <StyledAvatar key={face} src={face} />
            ))}
            <Divider light />
            <CardActions>
            < form onSubmit={this.submit} className="form-container">
                <Button type="submit" style={{borderRadius: 35, backgroundColor: "#c82b27"}}
                variant="contained">
                    <span>Entrar na Sala</span>
                </Button>
              </form>
            </CardActions>
          </CardContent>
        </StyledCard>
      </div>
    </React.Fragment>
  );
}

export default App;
