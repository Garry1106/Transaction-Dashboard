import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/transactions.css";

const TransactionsTable = ({ month }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchTransactions();
  }, [month, currentPage, searchTerm]); // Fetch transactions when month, page or search term changes

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/list-transactions`,
        {
          params: {
            month,
            search: searchTerm,
            page: currentPage,
            perPage: 10, // Adjust perPage as needed
          },
        }
      );
      const { transactions, page, totalPages } = response.data;
      setTransactions(transactions);
      setCurrentPage(page);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="transactions">
      <h2>Transaction Records of the Products</h2>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title, description, or price"
        />
        <button className="search-button" onClick={fetchTransactions}>
          Search
        </button>
      </div>
      <div className="pagination ">
        <button
          className="page-button"
          onClick={handlePrevPage}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
        <button
          className="page-button"
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody className="">
          {loading ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : (
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.title}</td>
                <td>
                  <img src={transaction.image} className="transaction-image" />
                </td>
                <td>{transaction.description}</td>
                <td>{transaction.price}</td>
                {/* Add more table data cells as needed */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
