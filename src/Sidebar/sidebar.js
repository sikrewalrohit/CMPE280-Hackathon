import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react'
import { FaGem } from "react-icons/fa";
import { FcComboChart, FcGlobe, FcLeftDown} from "react-icons/fc";

const sidebar = () => {
  return (
  <ProSidebar>
    <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>

        <SubMenu title="Macroeconomic(USD)" icon={<FcComboChart />}>
          <MenuItem>GDP (USD)</MenuItem>
          <MenuItem>FDI Inflows (USD)</MenuItem>
          <MenuItem>FDI Outflows (USD)</MenuItem>
          <MenuItem>Import/Export Flow</MenuItem>
        </SubMenu>

        <SubMenu title="Agriculture" icon={<FcGlobe />}>
          <MenuItem>Contribution of Agri (%GDP)</MenuItem>
          <MenuItem>Credit</MenuItem>
          <MenuItem>Fertilizers</MenuItem>
          <MenuItem>Fertilizers PROD</MenuItem>
        </SubMenu>

        <SubMenu title="Dept Services" icon={<FcLeftDown />}>
          <MenuItem>Reserves</MenuItem>
          <MenuItem>GNI</MenuItem>
          <MenuItem>Total Debt(%)</MenuItem>
          <MenuItem>Import/Export Flow</MenuItem>
        </SubMenu>
    </Menu>
  </ProSidebar>
  )

}

export default sidebar