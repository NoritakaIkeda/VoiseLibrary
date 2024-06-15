import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { VoiceButton } from "../VoiceButton";

export const ContentTabs = () => {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>
          <Text fontWeight={"Bold"}>ボイス一覧</Text>
        </Tab>
        <Tab>会話デッキ</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <VoiceButton />
        </TabPanel>
        <TabPanel>
          <p>会話デッキが追加されます</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
