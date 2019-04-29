import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MainStat from './MainSats';

const StatSimulatorPage = () => {
  const title = 'Stat Simulator';
  const tabTitles = ['Main Stats'];
  const tabs = tabTitles.map(val => {
    return <Tab key={val}>{val}</Tab>;
  });
  return (
    <div>
      <div className="page-title">{title}</div>
      <p>Work in progress. Not sure how long this would take.</p>
      <Tabs>
        <TabList>{tabs}</TabList>

        <TabPanel>
          <MainStat />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default StatSimulatorPage;
