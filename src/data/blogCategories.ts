export type CategoryType = 
  | "Product Strategy"
  | "Roadmapping"
  | "Product Ops"
  | "Leadership"
  | "Career Growth"
  | "Expat Life"
  | "Parenting"
  | "Lifestyle"
  | "Travel"
  | "Running & Sports"
  | "Reflections"
  | "Personal Growth";

export interface CategoryConfig {
  name: CategoryType;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
}

export const categoryConfigs: Record<CategoryType, CategoryConfig> = {
  "Product Strategy": {
    name: "Product Strategy",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-700 dark:text-blue-300",
    hoverBgColor: "hover:bg-blue-200 dark:hover:bg-blue-900/50"
  },
  "Roadmapping": {
    name: "Roadmapping",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-700 dark:text-blue-300",
    hoverBgColor: "hover:bg-blue-200 dark:hover:bg-blue-900/50"
  },
  "Product Ops": {
    name: "Product Ops",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-300",
    hoverBgColor: "hover:bg-green-200 dark:hover:bg-green-900/50"
  },
  "Leadership": {
    name: "Leadership",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
    textColor: "text-cyan-700 dark:text-cyan-300",
    hoverBgColor: "hover:bg-cyan-200 dark:hover:bg-cyan-900/50"
  },
  "Career Growth": {
    name: "Career Growth",
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
    textColor: "text-teal-700 dark:text-teal-300",
    hoverBgColor: "hover:bg-teal-200 dark:hover:bg-teal-900/50"
  },
  "Expat Life": {
    name: "Expat Life",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    textColor: "text-amber-700 dark:text-amber-300",
    hoverBgColor: "hover:bg-amber-200 dark:hover:bg-amber-900/50"
  },
  "Parenting": {
    name: "Parenting",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    textColor: "text-orange-700 dark:text-orange-300",
    hoverBgColor: "hover:bg-orange-200 dark:hover:bg-orange-900/50"
  },
  "Lifestyle": {
    name: "Lifestyle",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    textColor: "text-yellow-700 dark:text-yellow-300",
    hoverBgColor: "hover:bg-yellow-200 dark:hover:bg-yellow-900/50"
  },
  "Travel": {
    name: "Travel",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    textColor: "text-rose-700 dark:text-rose-300",
    hoverBgColor: "hover:bg-rose-200 dark:hover:bg-rose-900/50"
  },
  "Running & Sports": {
    name: "Running & Sports",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-700 dark:text-red-300",
    hoverBgColor: "hover:bg-red-200 dark:hover:bg-red-900/50"
  },
  "Reflections": {
    name: "Reflections",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-700 dark:text-purple-300",
    hoverBgColor: "hover:bg-purple-200 dark:hover:bg-purple-900/50"
  },
  "Personal Growth": {
    name: "Personal Growth",
    bgColor: "bg-violet-100 dark:bg-violet-900/30",
    textColor: "text-violet-700 dark:text-violet-300",
    hoverBgColor: "hover:bg-violet-200 dark:hover:bg-violet-900/50"
  }
};
