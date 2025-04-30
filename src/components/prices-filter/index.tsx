import { Radio, Typography } from "antd";

type PricesFilterProps = {
  selectedPriceRange: [number, number];
  onChange: (val: [number, number]) => void;
};

export default function PricesFilter({
  selectedPriceRange,
  onChange,
}: PricesFilterProps) {
  return (
    <div>
      <Typography.Title level={4}>Prices</Typography.Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {[
          [0, 100],
          [100, 200],
          [200, 300],
          [300, 500],
          [500, 1000],
        ].map((priceRange, index) => (
          <Radio
            key={index}
            checked={
              priceRange[0] === selectedPriceRange[0] &&
              priceRange[1] === selectedPriceRange[1]
            }
            onChange={() => onChange([priceRange[0], priceRange[1]])}
          >
            ${priceRange[0]} - ${priceRange[1]}
          </Radio>
        ))}
      </div>
    </div>
  );
}
