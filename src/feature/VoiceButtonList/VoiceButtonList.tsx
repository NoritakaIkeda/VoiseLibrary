import { useToast } from "@chakra-ui/react";
import data from "../../data.json";
import { useEffect, useState } from "react";
import { match } from "ts-pattern";
import { ViewButtonList } from "./ViewButtonList";
import { EditButtonList } from "./EditButtonList";
import { ShareButtonList } from "./ShareButtonList/ShareButtonList";

export const VoiceButtonList = () => {
  const [mode, setMode] = useState<"view" | "edit" | "share">("view");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const handleCheckboxChange = (value: never[]) => {
    setCheckedItems(value);
  };
  const toast = useToast();

  useEffect(() => {
    const storedItems = localStorage.getItem("checkedItems");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      const names = parsedItems.map((item: { name: string }) => item.name);
      setCheckedItems(names);
    }
  }, [mode]);

  const handleSubmit = () => {
    const selectedItems = data.filter((item) =>
      checkedItems.includes(item.name)
    );
    localStorage.setItem("checkedItems", JSON.stringify(selectedItems));
    toast({
      title: "会話デッキに保存が完了しました",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setMode("view");
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "リンクをクリップボードにコピーしました",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      },
      (err) => {
        console.error("クリップボードへのコピーに失敗しました: ", err);
      }
    );
  };

  return match(mode)
    .with("view", () => <ViewButtonList setMode={setMode} />)
    .with("edit", () => (
      <EditButtonList
        setMode={setMode}
        checkedItems={checkedItems}
        handleCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit}
      />
    ))
    .with("share", () => (
      <ShareButtonList setMode={setMode} handleCopy={handleCopy} />
    ))
    .exhaustive();
};
