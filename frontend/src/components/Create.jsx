import { React, useState, useEffect } from "react";
import axiosInstanace from "./Axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextForm from "./forms/TextForm";
import SelectForm from "./forms/SelectForm";
import MultiselectForm from "./forms/MultiselectForm";
import DescriptionForm from "./forms/DescriptionForm";
import Button from "@mui/material/Button";

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);

  const getData = () => {
    axiosInstanace.get(`country/`).then((res) => {
      setCountry(res.data);
    });
    axiosInstanace.get(`league/`).then((res) => {
      setLeague(res.data);
    });
    axiosInstanace.get(`characteristic/`).then((res) => {
      setCharacteristic(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box className={"topBar"}>
        <AddBoxIcon />
        <Typography
          sx={{ marginLeft: "15px", fontWeight: "bold" }}
          variant="subtitle2"
        >
          Create new club :
        </Typography>
      </Box>

      <Box className={"formBox"}>
        <Box className={"formArea"}>
          <TextForm label={"Club name"} />
          <Box sx={{ marginTop: "30px" }}>
            <TextForm label={"City"} />
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <SelectForm label={"League"} options={league} />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Button variant="contained" sx={{ width: "100%" }}>
              Submit the data
            </Button>
          </Box>
        </Box>

        <Box className={"formArea"}>
          <SelectForm label={"Country"} options={country} />
          <Box sx={{ marginTop: "30px" }}>
            <TextForm label={"Attendance"} />
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <MultiselectForm
              label={"Characteristics"}
              options={characteristic}
            />
          </Box>
        </Box>
        <Box className={"formArea"}>
          <DescriptionForm label={"Description"} rows={9} />
        </Box>
      </Box>
    </div>
  );
};

export default Create;
