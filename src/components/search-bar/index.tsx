import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type SearchBarProps = {
  searchQuery: string;
  onQueryChange: (val: string) => void;
};

export default function SearchBar({
  searchQuery,
  onQueryChange,
}: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(e.target.value);
  };

  return (
    <div style={{ marginBottom: "1.6rem" }}>
      <Input
        placeholder=" Search Products"
        type="text"
        value={searchQuery}
        onChange={handleChange}
        prefix={<SearchOutlined style={{ color: "gray" }} />}
      />
    </div>
  );
}
