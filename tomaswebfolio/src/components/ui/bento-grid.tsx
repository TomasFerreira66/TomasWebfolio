import { cn } from "@/lib/utils";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Projects",
    description: "Explore some of my projects.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "About",
    description: "A little about me.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CV",
    description: "Check out my full CV.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },

];


// Example Usage
export const MyPage = () => {
  return (
    <div>
      {/* First Bento Grid */}
      <BentoGrid>
        <BentoGridItem
          title="Grid 1 Item 1"
          description="Description for item 1 in Grid 1"
        />
        <BentoGridItem
          title="Grid 1 Item 2"
          description="Description for item 2 in Grid 1"
        />
        <BentoGridItem
          title="Grid 1 Item 3"
          description="Description for item 3 in Grid 1"
        />
      </BentoGrid>

      {/* Second Bento Grid */}
      <BentoGrid className="mt-8"> {/* Adding margin-top for spacing */}
        <BentoGridItem
          title="Grid 2 Item 1"
          description="Description for item 1 in Grid 2"
        />
        <BentoGridItem
          title="Grid 2 Item 2"
          description="Description for item 2 in Grid 2"
        />
        <BentoGridItem
          title="Grid 2 Item 3"
          description="Description for item 3 in Grid 2"
        />
      </BentoGrid>  
    </div>
  );
};
