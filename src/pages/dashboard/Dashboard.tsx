import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  View,
  Grid,
  Card,
  useTheme,
} from "@aws-amplify/ui-react";
import LogSources from "./LogSources";
import "./Dashboard.css";

interface LogData {
  title: string;
  successCount: number;
  errorCount: number;
}

const Dashboard = () => {
  const [logData, setLogData] = useState<LogData[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchLogData = async () => {
      const endpoints = [
        { title: "Clients Log", success: 'http://localhost:3001/api/clients_success_log', error: 'http://localhost:3001/api/clients_error_log' },
        { title: "Entete Facture Log", success: 'http://localhost:3001/api/entete_facture_success_log', error: 'http://localhost:3001/api/entete_facture_error_log' },
        { title: "Mvt Stock Log", success: 'http://localhost:3001/api/mvt_stock_success_log', error: 'http://localhost:3001/api/mvt_stock_error_log' },
        { title: "Paiements Log", success: 'http://localhost:3001/api/paiements_success_log', error: 'http://localhost:3001/api/paiements_error_log' },
        { title: "Total Log", success: 'http://localhost:3001/api/total_success_log', error: 'http://localhost:3001/api/total_error_log' },
      ];

      const promises = endpoints.map(async (endpoint) => {
        try {
          const successRes = await axios.get(endpoint.success);
          const errorRes = await axios.get(endpoint.error);

          return {
            title: endpoint.title,
            successCount: successRes.data.success_log || 0,
            errorCount: errorRes.data.error_log || 0,
          };
        } catch (error) {
          console.error(`Failed to fetch data for ${endpoint.title}:`, error);
          return {
            title: endpoint.title,
            successCount: 0,
            errorCount: 0,
          };
        }
      });

      const results = await Promise.all(promises);
      setLogData(results);
    };

    fetchLogData();
  }, []);

  return (
    <>
      <div>
        <h2>Dashboard</h2>
      </div>
      <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh">
        <Grid
          templateColumns={{ base: "1fr", large: "1fr 1fr" }}
          templateRows={{ base: "repeat(auto-fit, 20rem)", large: "repeat(auto-fit, 20rem)" }}
          gap={theme.tokens.space.xl}
        >
          {logData.map((log, index) => (
            <View key={index} rowSpan={{ base: 1, large: 1 }}>
              <Card height="100%" borderRadius="15px">
                <div className="card-title">{log.title}</div>
                <div className="chart-wrap">
                  <LogSources
                    data={[log.successCount, log.errorCount]}
                    type="pie"
                    labels={["Success Log", "Error Log"]}
                  />
                </div>
              </Card>
            </View>
          ))}
        </Grid>
      </View>
    </>
  );
};

export default Dashboard;
