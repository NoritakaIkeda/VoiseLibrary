import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { VoiceButtonList } from "../VoiceButtonList";
import { YoutubeLinkList } from "../YoutubeLinkList";

export const ContentTabs = () => {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>
          <Text fontWeight={"Bold"}>ボイス一覧</Text>
        </Tab>
        <Tab>会話デッキ</Tab>
        <Tab>元画像リンク集</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <VoiceButtonList />
        </TabPanel>
        <TabPanel>
          <Box h={"700px"}>
            <p>会話デッキが追加されます</p>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box h={"700px"}>
            <YoutubeLinkList />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
