import React from "react";
import "../../Components/5/rowContainerFeat.css";
import plantOnATable from "../../img/plantOnATable.svg";
import plantsOnAWall from "../../img/plantsOnAWall.svg";
import { Button, Card, Typography } from "@mui/material";

export default function RowContainerFeat() {
  return (
    <div className="rowContainerFeat">
      <Card className="MontserratFont" sx={{ padding: "16px", marginBottom: "16px" }}>
        <Typography variant="h5" className="data-lang" data-lang="buyMore">
          Buy more plants, it helps you to be relaxed
        </Typography>
        <Typography
          variant="body1"
          className="buyMoreLorem data-lang"
          data-lang="buyMoreLor"
          sx={{ marginTop: "8px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam.
          Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim.
          Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.
        </Typography>
        <div className="plantOnATableDiv" style={{ margin: "16px 0" }}>
          <img src={plantOnATable} alt="Plant on a Table" />
        </div>
        <div>
          <Button variant="contained" color="primary" sx={{ marginRight: "8px" }}>
            Learn More
          </Button>
          <Button variant="outlined" color="secondary">
            Buy Now
          </Button>
        </div>
      </Card>
      <div>
        <img src={plantsOnAWall} className="plantsOnAWall" alt="Plants on a Wall" />
      </div>
    </div>
  );
}
