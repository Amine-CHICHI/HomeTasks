import "./styles.css";
import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  Paper,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
const Taches = [
  {
    name: "T9ta3",
    def: "t9te3 ga3 dkshi li an7tajo f tyab o tjme3 tbla mor lmakla ",
    img: "https://img.cuisineaz.com/680x357/2016/07/25/i108779-eplucher-ses-legumes-avec-style.jpg",
  },
  {
    name: "Tyab",
    def: "tyb lmakla wakha matkonch kat3rf tfrj f youtube o t7et tabla",
    img: "https://www.helpguide.org/wp-content/uploads/cooking-hotpot.jpg",
  },
  {
    name: "Ghssil",
    def: "tghssel ga3 lma3n wakha itjm3o 3lik o tmss7 tbla d couzina",
    img: "https://assets.epicurious.com/photos/582a339cb3446c1b212b9d5e/16:9/w_2560%2Cc_limit/washing-dishes-111416.jpg",
  },
];
function createData(name) {
  return [name, ...getRandomTasksDistribution()];
}
const getRandomTasksDistribution = () => {
  const set = new Set();
  while (set.size < 3) {
    set.add(Taches[Math.floor(Math.random() * 3)].name);
  }
  return set;
};

export default function App() {
  const [update, setUpdate] = useState(true);
  const [rows, setRows] = useState([]);
  const generateNewDistribution = () => {
    console.log("clicked");
    setUpdate(!update);
  };

  useEffect(() => {
    setRows([
      createData("Lundi"),
      createData("Mardi"),
      createData("Mercredi"),
      createData("Jeudi"),
      createData("Vendredi"),
      createData("Samedi"),
      createData("Dimanche"),
    ]);
  }, [update]);
  return (
    <div
      className="App"
      style={{ backgroundColor: "#343B4E", padding: "0.5em" }}
    >
      <Typography
        variant="h3"
        sx={{ marginBottom: "0.5em", marginTop: "0.5em", color: "white" }}
      >
        Taches Journalières
      </Typography>
      <Grid container spacing={2} style={{ justifyContent: "space-around" }}>
        {Taches.map((tache) => (
          <Grid item xs={3} sx={{ minHeight: "150px" }}>
            <Card
              sx={{
                maxWidth: 345,
                minHeight: "100%",
                backgroundColor: "#21616f",
              }}
            >
              <CardActionArea>
                <CardMedia component="img" height="140" image={tache.img} />
                <CardContent sx={{ textAlign: "left", color: "white" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {tache.name}
                  </Typography>
                  <Typography variant="body2" color="white" fontSize="1.3em">
                    {tache.def}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        onClick={() => generateNewDistribution()}
        style={{ marginTop: "1em", backgroundColor: "#fc444f" }}
        className="btnRefresh"
      >
        New Distribution
      </Button>
      <TableContainer
        component={Paper}
        style={{ marginTop: "1em", backgroundColor: "#21616f" }}
      >
        <Table sx={{ minWidth: 650, color: "red" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Jours de la semaine</TableCell>
              <TableCell align="center">Amine</TableCell>
              <TableCell align="center">Hamza</TableCell>
              <TableCell align="center">Youssef</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row[0]}</TableCell>
                <TableCell align="center">{row[1]}</TableCell>
                <TableCell align="center">{row[2]}</TableCell>
                <TableCell align="center">{row[3]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
