import React from "react";
import { Icon } from "@aws-amplify/ui-react";

import {
  MdDashboard,
  MdOutlineTableChart,
} from "react-icons/md";

export const baseConfig = {
  projectLink: "https://github.com/masakho10/GOS-monitoring", // GitHub link in the navbar
  docsRepositoryBase: "", // base URL for the docs repository
  titleSuffix: "",
  search: true,
  header: true,
  headerText: "ONE TRACKER",
  footer: true,
  footerText: (
    <>
      <span>
        © ONE ERP {new Date().getFullYear()}
      </span>
    </>
  ),
  logo: (
    <>
      <img
        src={process.env.PUBLIC_URL + "/one_erp_logo.jpg"}
        alt="one erp"
        width="30"
        height="22"
      />
    </>
  ),
};

/// Navigation sidebar
export const appNavs = [
  {
    eventKey: "dashboard",
    icon: <Icon as={MdDashboard} />,
    title: "Dashboard",
    to: "/dashboard",
  },
  {
    eventKey: "tables",
    icon: <Icon as={MdOutlineTableChart} />,
    title: "Interfaces",
    children: [
      {
        eventKey: "mvt-stock",
        title: "Mouvement stock",
        to: "dashboard-mvt-stock",
      },
      {
        eventKey: "entete-facture",
        title: "Entete_Facture",
        to: "dashboard-entete-facture",
      },
      {
        eventKey: "paiements",
        title: "Paiement",
        to: "dashboard-paiements",
      },
      {
        eventKey: "clients",
        title: "Clients",
        to: "dashboard-clients",
      },
      
    ],
  },
  
  
];
