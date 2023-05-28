import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { apiService } from "./service";
const getGroups = () => {
  return fetch(`${apiService.modules}`);
};

const Template = ({ component }) => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location);
    setLoading(true);
    getGroups()
      .then((reponse) => {
        reponse.json().then((info) => {
          setGroups(info);
        });
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin />
        </div>
      )}
      {!loading && (
        <div style={{ width: "100%" }}>
          <header
            style={{
              height: "3.5rem",
              width: "100%",
              backgroundColor: "#fafafa",
            }}
          ></header>
          <div
            style={{
              width: "100%",
              height: "calc(100vh - 3.5rem)",
              position: "relative",
            }}
          >
            <aside
              style={{
                height: "100%",
                width: "14rem",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "2rem",
                paddingTop: "2rem",
                gap: "1rem",
              }}
            >
              {!loading &&
                groups?.length > 0 &&
                groups[0].map((elem, index) => {
                  return (
                    <a
                      href={`/getStarted/${elem.group}`}
                      key={index}
                      style={{
                        textDecoration: "none",
                        fontSize: "18px",
                        color: "dodgerblue",
                      }}
                    >
                      {elem.group}
                    </a>
                  );
                })}
            </aside>
            <main
              style={{
                height: "100%",
                width: "calc(100% - 14rem)",
                position: "absolute",
                left: "14rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >{`${location.pathname?.split("/")[1] ? location.pathname?.split("/")[1] : ''} ${
                location.pathname?.split("/")[2]
                  ? `> ${location.pathname?.split("/")[2]}`
                  : ""
              }`}</div>
              <div
                style={{
                  width: "100%",
                  height: "calc(100% - 3rem)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: '1rem'
                }}
              >
                {component}
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Template;
