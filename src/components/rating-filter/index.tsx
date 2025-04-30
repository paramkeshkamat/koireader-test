import { Radio, Rate, Typography } from "antd";

type RatingFilterProps = {
  selectedRating: number;
  onChange: (val: number) => void;
};

export default function RatingFilter({
  selectedRating,
  onChange,
}: RatingFilterProps) {
  return (
    <div>
      <Typography.Title level={4}>Rating</Typography.Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <Radio
            key={rating}
            checked={rating === selectedRating}
            onChange={() => onChange(rating)}
          >
            <Rate value={rating} disabled />
          </Radio>
        ))}
      </div>
    </div>
  );
}
