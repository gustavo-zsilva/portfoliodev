import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

type SkillBoxProps = {
  title: string;
  Icon: ComponentType<IconBaseProps>;
  iconSize?: number;
};

export function SkillBox({ title, Icon, iconSize }: SkillBoxProps) {
  return (
    <div
      className="
            flex
            flex-col
            justify-center
            items-center
            gap-2
            size-full
            p-6
            border-2
            border-sky-600
            border-opacity-25
            bg-sky-600
            bg-opacity-10
            rounded-lg
        "
    >
      <Icon size={iconSize} />
      <span className="text-sm">{title}</span>
    </div>
  );
}
