import React, { useState, useEffect } from "react";
import { apiService } from "../../service";
import Code from "../../module/code";

const getGroups = () => {
  return fetch(`${apiService.modules}`);
};

const ContentMain = ({ param }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getGroups().then((reponse) => {
      reponse.json().then((info) => {
        setData(info[0]?.filter(elem => elem.group == param)[0]);
      });
    });
  }, []);

  return (
    <div style={{ width: '100%' }}>
      {data && (
        <>
          {console.log(data)}
          <p style={{ width: '100%', fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '1rem' }}>{data.group}</p>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {data.methods?.map((elem, index) => {
              return (
                <div key={index} style={{ marginTop: '1rem', width: '100%', display: 'flex', flexDirection: 'column', marginLeft: '2rem' }}>
                  <p>{elem}</p>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
};

export default ContentMain;
