import { Slot, Style, RichText, Image } from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";
import { forwardRef } from "react";

const TwoInput = forwardRef(function HelloWorld(
  { title, body, image, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={className}
      style={{
        // display: "flex",
        // flexDirection: "column",
        padding: "20px",
      }}
      {...props}
    >
      <div>{title}</div>
      <div style={{ minWidth: "200px" }}>{body}</div>
    </div>
  );
});

const OneInput = forwardRef(function HelloWorld(
  { title, image, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={className}
      style={{
        gap: "20px",
        padding: "20px",
      }}
      {...props}
    >
      {title}
    </div>
  );
});

const DivTest = forwardRef(function HelloWorld(
  { title, image, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={className}
      style={{ paddingBottom: "20px" }}
      {...props}
    >
      Hello World
    </div>
  );
});

ReactRuntime.registerComponent(TwoInput, {
  type: "two",
  label: "2",
  props: {
    className: Style({ properties: Style.All }),
    title: RichText(),
    body: RichText(),
  },
});

ReactRuntime.registerComponent(OneInput, {
  type: "one",
  label: "1",
  props: {
    className: Style({ properties: Style.All }),
    title: RichText(),
  },
});
ReactRuntime.registerComponent(DivTest, {
  type: "div-test",
  label: "Div Test",
  props: {
    className: Style({ properties: Style.All }),
  },
});
