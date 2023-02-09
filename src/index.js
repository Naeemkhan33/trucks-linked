import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as AWS from "aws-sdk";
import { ConfigurationOptions } from "aws-sdk";
import { DynamoDB } from "aws-sdk";

const root = ReactDOM.createRoot(document.getElementById("root"));

// AWS.config.update({ region: "us-east-1" });

const configuration = {
  region: "us-east-1",
  secretAccessKey: "GUmoxWiQ5rr0xeYNOQ4zaKoyc/M/2Os3N1DNdHva",
  accessKeyId: "AKIATTFGOJ7COO5DDYJZ",
};

AWS.config.update(configuration);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
