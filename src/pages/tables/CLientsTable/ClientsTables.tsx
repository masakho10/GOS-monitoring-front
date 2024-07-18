import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Table as AmplifyTable,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  //Button,
} from "@aws-amplify/ui-react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

interface ClientsData {
  id: number;
  message_erreur: string;
  label_reference_value: string;
  status: string;
  date_creation: string;
  date_MAJ: string;
}

const StyledTable = styled(AmplifyTable)`
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;

  th, td {
    padding: 12px;
  }

  thead {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #e0e0e0;
  }
`;

const StyledStatusCell = styled(TableCell)`
  color: red;
`;

const Clients: React.FC = () => {
  const [data, setData] = useState<ClientsData[]>([]);
  //const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ClientsData[]>("http://localhost:3001/api/clients");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledTable caption="" highlightOnHover={false}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Error Message</TableCell>
          <TableCell as="th">Label interface</TableCell>
          <TableCell as="th">Status</TableCell>
          <TableCell as="th">Creation Date</TableCell>
          <TableCell as="th">Update Date</TableCell>
          <TableCell as="th"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.message_erreur}</TableCell>
            <TableCell>{item.label_reference_value}</TableCell>
            <StyledStatusCell>{item.status}</StyledStatusCell>
            <TableCell>{item.date_creation}</TableCell>
            <TableCell>{item.date_MAJ}</TableCell>
           {/*} <TableCell>
              <Button onClick={() => navigate("/edit-form")}>Edit</Button>
            </TableCell>*/}
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Clients;
