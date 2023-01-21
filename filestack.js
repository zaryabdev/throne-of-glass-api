const apikey = "AZQAoIP90SHOOdiOPwUoAz";
const client = require("filestack-js").init(apikey);

const myFile = "./test.zip";

client.upload(myFile).then(
    function (result) {
        console.log(result);
    },
    function (error) {
        console.log(error);
    }
);
