const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString:
    "postgres://uds3c5mjfup8a8:p21de8d2bf29422ff403708fe0a3efd81f106688902780eadd23325c39dc9e07f@c5p86clmevrg5s.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d7m066nv78ibns",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
