import LottieAnimation from "./components/LottieAnimation";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div className="centered">
        <LottieAnimation />
      </div>
      <Button
        className="my-button"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Click Me
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Happy Fathers Day</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Happy Fathers Day, Papa Marlon! Thank you for everything.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
