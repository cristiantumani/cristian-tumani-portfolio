import { CategoryType, categoryConfigs } from "@/data/blogCategories";
import { cn } from "@/lib/utils";

interface CategoryPillProps {
  category: CategoryType;
  className?: string;
}

const CategoryPill = ({ category, className }: CategoryPillProps) => {
  const config = categoryConfigs[category];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        config.bgColor,
        config.textColor,
        config.hoverBgColor,
        className
      )}
    >
      {config.name}
    </span>
  );
};

export default CategoryPill;
