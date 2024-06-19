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
import { CustomButtonList } from "../CustomButtonList";
import { useState } from "react";
import usePageTracking from "../../useTracking";

export const ContentTabs = () => {
  const [isActive, setIsActive] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  usePageTracking();

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs position="relative" variant="unstyled" onChange={handleTabChange}>
      <TabList>
        <Tab>
          <Text color={activeTab === 0 ? "black" : "gray"} fontWeight="bold">
            ボイス一覧
          </Text>
        </Tab>
        <Tab>
          <Text
            onClick={() => setIsActive(!isActive)}
            color={activeTab === 1 ? "black" : "gray"}
            fontWeight="bold"
          >
            会話デッキ
          </Text>
        </Tab>
        <Tab>
          <Text color={activeTab === 2 ? "black" : "gray"} fontWeight="bold">
            元画像リンク集
          </Text>
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <VoiceButtonList />
        </TabPanel>
        <TabPanel>
          <Box h={"700px"}>
            <CustomButtonList isActive={isActive} />
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
