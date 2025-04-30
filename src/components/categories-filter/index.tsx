import { Checkbox, Typography } from "antd";
import { useCategories } from "../../hooks";

type CategoriesFilterProps = {
  selectedCategory: string[];
  onCategoryChange: (val: string[]) => void;
};

export default function CategoriesFilter({
  selectedCategory,
  onCategoryChange,
}: CategoriesFilterProps) {
  const { categories } = useCategories();

  const handleChange = (checked: boolean, name: string) => {
    if (checked) {
      onCategoryChange([...selectedCategory, name]);
    } else {
      const updated = selectedCategory.filter((category) => category !== name);
      onCategoryChange(updated);
    }
  };

  return (
    <div>
      <Typography.Title level={4}>All Categories</Typography.Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {categories.map((category) => (
          <Checkbox
            key={category}
            checked={selectedCategory.includes(category)}
            onChange={(e) => handleChange(e.target.checked, category)}
          >
            <span style={{ textTransform: "capitalize" }}>{category}</span>
          </Checkbox>
        ))}
      </div>
    </div>
  );
}
