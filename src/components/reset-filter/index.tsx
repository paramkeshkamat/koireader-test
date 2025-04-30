import { Button } from "antd";

export default function ResetFilter({ onClick }: { onClick: () => void }) {
  return <Button onClick={onClick}>Reset Filters</Button>;
}
