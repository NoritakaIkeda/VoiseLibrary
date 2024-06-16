import { Button, Link } from "@chakra-ui/react";

export const ContactUsButton = () => {
  return (
    <Link
      href={"https://forms.gle/5SUd5xQwWnzf9DsD7"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>ボタン追加依頼・お問い合わせ</Button>
    </Link>
  );
};
