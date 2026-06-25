import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import axios from "axios";

function Section({ title, apiEndpoint }) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    axios.get(apiEndpoint).then((response) => {
      setData(response.data);
    });
  }, [apiEndpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.collapseButton}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>
      {collapsed && (
        <div className={styles.grid}>
        {data && data.map((album) => (
            <Card
                key={album.id}
                image={album.image}
                title={album.title}
                follows={album.follows}
            />
        ))}
        </div>
      )}
    </div>
  );
}

export default Section;