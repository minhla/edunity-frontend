import {
  CodeXml,
  Computer,
  Terminal,
  SquareKanban,
  GitCompareArrows,
  Database,
} from "lucide-react";
import Link from "next/link";

type Category = {
  categoryName: string;
  count: number;
};

type CategoryCardStyle = {
  bgColor: string;
  iconColor: string;
  iconBgColor: string;
  iconComponent: React.ElementType;
};

const categoryCardStyles = [
  {
    bgColor: "#EAF6FF",
    iconColor: "#1B75E8",
    iconBgColor: "rgba(27, 117, 232, 0.1)",
    iconComponent: CodeXml,
  },
  {
    bgColor: "#FEF2F4",
    iconColor: "#FF6881",
    iconBgColor: "rgba(255, 104, 129, 0.15)",
    iconComponent: Computer,
  },
  {
    bgColor: "#EEFBF5",
    iconColor: "#00BC65",
    iconBgColor: "#D1F5E4",
    iconComponent: Terminal,
  },
  {
    bgColor: "#FFFAEF",
    iconColor: "#F2A700",
    iconBgColor: "#FFF3D9",
    iconComponent: SquareKanban,
  },
  {
    bgColor: "#F7F3FF",
    iconColor: "#4500D0",
    iconBgColor: "#DFD4F4",
    iconComponent: GitCompareArrows,
  },
  {
    bgColor: "#FFF0F8",
    iconColor: "#BB0064",
    iconBgColor: "#FFDAF0",
    iconComponent: Database,
  },
];

const fetchCategories = async (): Promise<Category[]> => {
  const dataResponse = await fetch(`${process.env.API_ROOT_URL}/categories`);
  const dataJSON = await dataResponse.json();
  return dataJSON.categories;
};

const CategoryCard = ({
  categoryName,
  style,
}: Category & { style: CategoryCardStyle }) => {
  const { bgColor, iconColor, iconBgColor, iconComponent: Icon } = style;
  return (
    <div
      className="flex gap-3 md:gap-6 items-center p-4 rounded-xl"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="rounded-full border border-dashed"
        style={{ borderColor: iconColor, backgroundColor: iconBgColor }}
      >
        <Icon
          className=" size-10 p-2 md:p-4 md:size-20"
          style={{ color: iconColor }}
        />
      </div>
      <h3 className="font-bold text-xl text-edunity-secondary">
        {categoryName}
      </h3>
    </div>
  );
};

const SectionCategories = async () => {
  const topCategories = await fetchCategories();

  return (
    <div className="w-full">
      <div className="content-wrapper flex flex-col gap-16 items-center justify-center py-20">
        <h1 className="uppercase font-heading font-bold text-4xl text-edunity-secondary">
          Most popular topics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 w-full">
          {topCategories.map((category: Category, index) => {
            const style = categoryCardStyles[index % categoryCardStyles.length];
            return (
              <Link
                key={category.categoryName}
                href={`/courses?keywords=${category.categoryName}`}
              >
                <CategoryCard {...category} style={style} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionCategories;
