import { memo } from "react";

type Props = {
  title: string;
  description: string;
};

export const TaskPage = memo<Props>((props) => {
  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid silver",
          fontSize: "2em",
        }}
        className="bg-white pl-2"
      >
        {props.title}
      </div>

      <div></div>
    </div>
  );
});
