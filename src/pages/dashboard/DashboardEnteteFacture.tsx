import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import {
  View,
  Grid,
  Card,
  useTheme,
} from "@aws-amplify/ui-react";
import { GoAlertFill } from "react-icons/go";
import { TbPercentage } from "react-icons/tb";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import MiniStatistics from "./MiniStatistics";
import LogSources from "./LogSources";
import SalesSummary from "./SalesSummary";

import "./Dashboard.css";

// Données pour le graphique à ligne
const lineChartData = [
  {
    name: "Success Log",
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
  },
  {
    name: "Error Log",
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
  },
];

const HoverableDiv = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;

const DashboardEnteteFacture = () => {
  const [successLogCount, setSuccessLogCount] = useState(null);
  const [errorLogCount, setErrorLogCount] = useState(null);
  const [logRate, setLogRate] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const successRes = await axios.get('http://localhost:3001/api/entete_facture_success_log');
        const errorRes = await axios.get('http://localhost:3001/api/entete_facture_error_log');
        const rateRes = await axios.get('http://localhost:3001/api/entete_facture_success_percentage');

        if (successRes.data && successRes.data.success_log !== undefined) {
          setSuccessLogCount(successRes.data.success_log);
        }

        if (errorRes.data && errorRes.data.error_log !== undefined) {
          setErrorLogCount(errorRes.data.error_log);
        }

        if (rateRes.data && rateRes.data.success_percentage !== undefined) {
          setLogRate(rateRes.data.success_percentage);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNavigateToTables = () => {
    navigate("/tables-entetes-facture");
  };

  return (
    <>
      <div>
        <h2>Dashboard Entete Facture</h2>
      </div>
      <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh">
        <Grid
          templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
          templateRows={{ base: "repeat(4, 10rem)", large: "repeat(3, 8rem)" }}
          gap={theme.tokens.space.xl}
        >
          <View rowSpan={{ base: 1, large: 1 }}>
            <MiniStatistics
              title="Success Log"
              amount={successLogCount !== null ? successLogCount + '' : 'Loading...'}
              icon={<IoCheckmarkDoneSharp className="icons" />}
            />
          </View>
          <HoverableDiv onClick={handleNavigateToTables}>
            <View rowSpan={{ base: 1, large: 1 }}>
              <MiniStatistics
                title="Error Log"
                amount={errorLogCount !== null ? errorLogCount + '' : 'Loading...'}
                icon={<GoAlertFill className="icons" />}
              />
            </View>
          </HoverableDiv>
          <View rowSpan={{ base: 1, large: 1 }}>
            <MiniStatistics
              title="Success Log Rate"
              amount={logRate !== null ? `${parseFloat(logRate).toFixed(2)}%` : 'Loading...'}
              icon={<TbPercentage className="icons" />}
            />
          </View>

          <HoverableDiv onClick={handleNavigateToTables}>
            <View rowSpan={{ base: 1, large: 4 }}>
              <Card height="100%" borderRadius="15px">
                <div className="card-title">Log Sources</div>
                <div className="chart-wrap">
                  <LogSources
                    title="Log Sources"
                    data={[successLogCount || 0, errorLogCount || 0]}
                    type="pie"
                    labels={["Success Log", "Error Log"]}
                  />
                </div>
              </Card>
            </View>
          </HoverableDiv>

          <View columnSpan={[1, 1, 1, 2]} rowSpan={{ base: 3, large: 4 }}>
            <Card borderRadius="15px">
              <div className="card-title">Summary</div>
              <div className="chart-wrap">
                <SalesSummary
                  title="Log Summary"
                  data={lineChartData}
                  type="line"
                  labels={[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ]}
                />
              </div>
            </Card>
          </View>
        </Grid>
      </View>
    </>
  );
};

export default DashboardEnteteFacture;
