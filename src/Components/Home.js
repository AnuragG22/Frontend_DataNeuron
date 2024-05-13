import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Dialog } from "@mui/material";
import UserForm from "./Header/UserForm";
import { BASE_URL } from "../helper";

// Home component for displaying user data and update dialog
const Home = () => {
  // State variables for user data, selected row, and update dialog visibility
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [canUpdate, setCanUpdate] = useState(false);

  // Fetch user details from the server on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/all`);

        // Check if response and data are valid
        if (!response || !response.data || !response.data.users) {
          throw new Error("Invalid response from the server");
        }

        // Set user data in state
        setRowData(response.data.users);
      } catch (error) {
        // Handle errors fetching user details
        console.error("Error fetching user details:", error.message);
      }
    };

    // Invoke fetchUserDetails function
    fetchUserDetails();
  }, []);

  // Function to handle update button click
  const handleUpdate = (row) => {
    // Set selected row and show update dialog
    setSelectedRow(row);
    setCanUpdate(true);
  };

  // Define columns for DataTable
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "First Name",
      selector: (row) => row.Fname,
    },
    {
      name: "Last Name",
      selector: (row) => row.Lname,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
    },
    {
      name: "Actions",
      cell: (row) => (
        // Render update button for each row
        <button className="btn btn-primary" onClick={() => handleUpdate(row)}>
          Update
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Render the component
  return (
    <div className="container-fluid">
      {/* Render DataTable to display user data */}
      <DataTable
        columns={columns}
        data={rowData}
        responsive
        striped
        highlightOnHover
        className="table"
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "#f8d7da", // Change this to your desired header color
            },
          },
        }}
        border
      />
      {/* Render dialog for updating user data */}
      <Dialog
        open={canUpdate}
        onClose={() => setCanUpdate(false)}
      >
        <UserForm close={setCanUpdate} rowData={selectedRow} />
      </Dialog>
    </div>
  );
};

// Export the Home component
export default Home;
