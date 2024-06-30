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

export const ContentTabs = () => {
  const [isActive, setIsActive] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

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
            元動画リンク集
          </Text>
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <VoiceButtonList />
        </TabPanel>
        <TabPanel>
          <CustomButtonList isActive={isActive} />
        </TabPanel>
        <TabPanel>
          <YoutubeLinkList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
