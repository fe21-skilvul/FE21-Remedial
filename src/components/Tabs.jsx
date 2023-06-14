import React, { useState } from "react";
import styled from "styled-components";
import Course from "./Course";
import { KELAS_LUKIS, KELAS_TARI, KELAS_MUSIK } from "../utils/constants";
import courses from "../utils/data";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(KELAS_LUKIS);
  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <TabsWrapper>
      <div className="tabs">
        <ul className="flex flex-wrap">
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === KELAS_LUKIS}`}
              onClick={() => tabHandler(KELAS_LUKIS)}
            >
              Kelas Lukis
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === KELAS_TARI}`}
              onClick={() => tabHandler(KELAS_TARI)}
            >
              Kelas Tari
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === KELAS_MUSIK}`}
              onClick={() => tabHandler(KELAS_MUSIK)}
            >
              Kelas Musik
            </button>
          </li>
        </ul>

        <div className="tabs-body">
          {courses
            .filter((course) => course.category === activeTab)
            .map((course) => (
              <Course key={course.id} {...course} />
            ))}
        </div>
      </div>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 30px;
    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 10px 13px;
      margin-right: 0px;
      margin-left: 20px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 10px;

      &:focus {
        background-color: #4f46e5;
        color: white;
      }
    }

    .tabs-body {
      margin-top: 22px;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 3fr);
      }
    }
  }
`;

export default Tabs;
