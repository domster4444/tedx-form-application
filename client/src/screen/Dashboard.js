import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components for the table
const Container = styled.div`
  margin: 20px;
  font-family: Arial, sans-serif;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f7f7f7;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const StyledTh = styled.th`
  background-color: #e2e2e2;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
`;

const StyledTd = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ccc;
`;

const FilterInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Dashboard = () => {
  const [allUserData, setAllUserData] = useState([]);
  const [filterText, setFilterText] = useState(""); // State for the filter input

  useEffect(() => {
    fetch("https://tedxapi.deerwalk.edu.np/api/v1/get-all-users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users);
        setAllUserData(data.users);
      });
  }, []);

  const filteredUserData = allUserData.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(filterText.toLowerCase()) || user.email.includes(filterText.toLowerCase());
  });

  if (allUserData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>User Dashboard</h2>
      {/* Filter input */}
      <FilterInput type='text' placeholder='Filter by name or email...' value={filterText} onChange={(e) => setFilterText(e.target.value)} />

      <StyledTable>
        <thead>
          <tr>
            <StyledTh>First Name</StyledTh>
            <StyledTh>Middle Name</StyledTh>
            <StyledTh>Last Name</StyledTh>
            <StyledTh>Email</StyledTh>
            <StyledTh>Phone Number</StyledTh>
            <StyledTh>Address</StyledTh>
            <StyledTh>Receipt Link</StyledTh>
          </tr>
        </thead>
        <tbody>
          {filteredUserData.map((user) => (
            <tr key={user._id}>
              <StyledTd>{user.firstName}</StyledTd>
              <StyledTd>{user.middleName}</StyledTd>
              <StyledTd>{user.lastName}</StyledTd>
              <StyledTd>{user.email}</StyledTd>
              <StyledTd>{user.phoneNumber}</StyledTd>
              <StyledTd>{user.address}</StyledTd>
              <StyledTd>
                <a href={user.receiptLink} target='_blank' rel='noreferrer'>
                  View Receipt
                </a>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Dashboard;
