import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App";

jest.mock("axios");
jest.mock("./App");

it("fetches candidates");
it("patches candidates");

it("filters candidates by all");
it("filters candidates by reviewed");
it("filters candidates by unreviewed");
it("sorts candidates by default");
it("sorts candidates by statusNormal");
it("sorts candidates by statusReverse");
it("sorts candidates by dateAppliedNormal");
it("sorts candidates by dateAppliedReverse");
