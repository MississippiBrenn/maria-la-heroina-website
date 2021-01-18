import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UnidentifiedSearch from './UnidentifiedSearch';


function SearchMenu() { 
   return (
      <Tabs>
        <TabList>
          <Tab>Unidentified Women</Tab>
          <Tab>Missing Women</Tab>
        </TabList>
    
        <TabPanel>
          <h2><UnidentifiedSearch /></h2>
        </TabPanel>
        <TabPanel>
          <h2>Possible Matches to missing Women</h2>
        </TabPanel>
      </Tabs>
    );
   }
export default SearchMenu;