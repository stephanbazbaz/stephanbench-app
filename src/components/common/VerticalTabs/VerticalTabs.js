import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const VerticalTabs = (props) => {
  const { value = 0, handleChange, list = [] } = props
  return (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      classes={{
        indicator: 'tabs-indicator',
        root: 'tabs-root',
        flexContainer: 'tabs-container'
      }}
    >
      {list.map((item, idx) => <Tab classes={{ root: 'tab-btn', selected: 'selected-tab' }} key={`tab-${idx}`} label={item.label} />)}
    </Tabs>
  );
}
export default VerticalTabs