import React from "react";
import { Routes, Route } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import theme from "./theme";

import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import TablesMvtStock from "./pages/tables";
import TablesPaiements from "./pages/tables/Paiements"
import TablesEntete from "./pages/tables/EnteteFacture";
import TablesClients from "./pages/tables/CLientsTable";
import DashboardEnteteFacture from "./pages/dashboard/DashboardEnteteFacture";
import DashboardClients from "./pages/dashboard/DashboardClients";
import DashboardMvtStock from "./pages/dashboard/DashboardMvtStock";
import DashboardPaiements from "./pages/dashboard/DashboardPaiements";
import Forms from "./pages/forms";
import EditForm from "./pages/forms/EditForm";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="forms" element={<Forms />} />
            <Route path="edit-form" element={<EditForm />} />
            <Route path="tables-mvt-stock" element={<TablesMvtStock />} />
            <Route path="tables-clients" element={<TablesClients />} />
            <Route path="tables-paiements" element={<TablesPaiements />} />
            <Route path="tables-entetes-facture" element={<TablesEntete />} />
            <Route path="dashboard-entete-facture" element={<DashboardEnteteFacture />} />
            <Route path="dashboard-clients" element={<DashboardClients />} />
            <Route path="dashboard-paiements" element={<DashboardPaiements />} />
            <Route path="dashboard-mvt-stock" element={<DashboardMvtStock />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <a href="/">Go to the home page</a>
      </p>
    </div>
  );
}