import React from "react";

function SearchBar() {
  const styles = {
    searchBar: {
      display: "flex",
      width: "434px",
      height: "40px",
      padding: "12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flex: "1 0 0",
      gap: "16px",
      flexShrink: 0,
      borderRadius: "16px",
      border: "1px solid var(--outline-input-enabled, #9AA8BC)",
      background: "var(--background-primary, #FFF)",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    },
    searchBarInput: {
      backgroundColor: "transparent",
      border: "none",
      color: "var(--text-secondary, #728197)",
      fontFamily: "Lexend",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 400,
      width: "80%",
      lineHeight: "1.25rem",
      outline: "none",
    },
  };

  return (
    <div style={styles.searchBar} className="searcch-bar">
      <img src="images/Icon.png" alt="" />
      <input style={styles.searchBarInput} type="text" placeholder="Search Users by name, date..." />
    </div>
  );
}

export default SearchBar;
