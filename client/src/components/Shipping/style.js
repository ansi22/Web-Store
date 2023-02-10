import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    height: "580px",
    width: "400px",
  },
  form: {
    marginTop: "20px",
  },
  text: {
    width: "300px",
    marginTop: "12px",
    marginLeft: "45px",
  },
}));
