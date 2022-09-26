const express = require("express");
const router = express.Router();
const axios = require("axios");

//test route
router.get("/", (req, res) => res.json({ msg: "Empyees Works" }));

// get employees
router.get("/getemployees/:accessToken", (req, res)=>{
    var config = {
        method: 'get',
        url: 'https://api.greythr.com/employee/v2/employees?page=1&size=500',
        headers: { 
          'ACCESS-TOKEN': req.params.accessToken, 
          'x-greythr-domain': 'tousifapisso.greythr.com'
        }
      };
      
      axios(config, {
        method: 'HEAD',
        mode: 'no-cors',
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return res.json(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
})

module.exports = router;