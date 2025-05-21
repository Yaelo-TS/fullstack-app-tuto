import { React, useState, useEffect } from "react";
import axiosInstanace from "./Axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextForm from "./forms/TextForm";
import SelectForm from "./forms/SelectForm";
import MultiselectForm from "./forms/MultiselectForm";
import DescriptionForm from "./forms/DescriptionForm";
import Button from "@mui/material/Button";
import { useFormik } from "formik";

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

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      country: "",
      league: "",
      attendance: "",
      city: "",
      characteristic: [],
    },
    onSubmit: (values) => {
      axiosInstanace.post(`footballclub/`, values).then(() => {
        console.log("succesfull data submission");
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
            <TextForm
              label={"Club name"}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Box sx={{ marginTop: "30px" }}>
              <TextForm
                label={"City"}
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Box>

            <Box sx={{ marginTop: "30px" }}>
              <SelectForm
                label={"League"}
                options={league}
                name="league"
                value={formik.values.league}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Box>
            <Box sx={{ marginTop: "30px" }}>
              <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                Submit the data
              </Button>
            </Box>
          </Box>

          <Box className={"formArea"}>
            <SelectForm
              label={"Country"}
              options={country}
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Box sx={{ marginTop: "30px" }}>
              <TextForm
                label={"Attendance"}
                name="attendance"
                value={formik.values.attendance}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Box>

            <Box sx={{ marginTop: "30px" }}>
              <MultiselectForm
                label={"Characteristics"}
                options={characteristic}
                name="characteristic"
                value={formik.values.characteristic}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Box>
          </Box>
          <Box className={"formArea"}>
            <DescriptionForm
              label={"Description"}
              rows={9}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Create;
