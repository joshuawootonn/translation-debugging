import {
  RichTextV2Control,
  RichTextV2Mode,
  unstable_RichTextV2,
} from "@makeswift/runtime/controls";
import {
  Style,
  RichText,
  List,
  TextInput,
  Slot,
  Shape,
} from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";
import { BlockPlugin,TextAlignPlugin } from "@makeswift/runtime/slate";
import classNames from "classnames";

import { KeyboardEvent, forwardRef } from "react";

const TwoInput = forwardRef(function HelloWorld(
  { title, body, image, className, ...props }: any,
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
      <div style={{ height: "100px" }}></div>
      <div style={{ minWidth: "200px" }}>{body}</div>
    </div>
  );
});

const DivTest = forwardRef(function HelloWorld(
  { title, image, className, ...props }: any,
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

ReactRuntime.registerComponent(TwoInput, {
  type: "twoV2",
  label: "2V2",
  props: {
    className: Style({ properties: Style.All }),
    title: unstable_RichTextV2({ plugins: [BlockPlugin()] }),
    body: unstable_RichTextV2(),
  },
});

/**
 * List of RichText
 */

const BlockDemo = forwardRef(function HelloWorld(
  { nodes, node, nodes1, node2, image, className, ...props }: any,
  ref
) {
  return (
    <div
      ref={ref}
      className={className + " space-y-3"}
      style={{
        gap: "20px",
        padding: "20px",
      }}
      {...props}
    >
      V2
      {nodes?.map((node: any, key: number) => (
        <div key={key}>{node}</div>
      ))}
      V1
      {nodes1?.map((node: any, key: number) => (
        <div key={key}>{node}</div>
      ))}
    </div>
  );
});

ReactRuntime.registerComponent(BlockDemo, {
  type: "one",
  label: "List of RichText",
  props: {
    className: Style({ properties: Style.Default }),

    // nodes: List({
    //   type: RichText(),
    // }),

    // nodes1: List({
    //   type: RichText(),
    // }),
  },
});

/**
 * Single RichText
 */

const SingleRichText = forwardRef(function HelloWorld(
  { nodes, node, node2, image, className, ...props }: any,
  ref
) {
  return (
    <div
      ref={ref}
      className={className + " space-y-3"}
      style={{
        gap: "20px",
        padding: "20px",
      }}
      {...props}
    >
      {node}
    </div>
  );
});

ReactRuntime.registerComponent(SingleRichText, {
  type: "asdfasdf",
  label: "Single RichText V2",
  props: {
    className: Style({ properties: Style.Default }),

    node: unstable_RichTextV2({ plugins: [BlockPlugin(), TextAlignPlugin()] }),

    // node1: RichTextV2({
    //   plugins: [OtherInline],
    // }),
  },
});

/**
 * Inline Demo
 */

const RichButton = forwardRef(function HelloWorld(
  { node, image, className, ...props }: any,
  ref
) {
  return (
    <button
      ref={ref}
      className={classNames(
        className,
        "w-auto min-w-[100px] bg-black text-white text-center rounded-md py-2 px-5"
      )}
      // onClick={() => window.alert("ahhh geeez")}
      {...props}
    >
      {node}
    </button>
  );
});

ReactRuntime.registerComponent(RichButton, {
  type: "three",
  label: "Inline Demo",
  props: {
    className: Style({ properties: [Style.Margin] }),
    node: unstable_RichTextV2({ mode: RichTextV2Mode.Inline }),
  },
});

// ReactRuntime.registerComponent(RichButton, {
//   type: "three",
//   label: "Inline Demo",
//   props: {
//     className: Style({ properties: [Style.Margin] }),
//     node: RichTextV2({
//       mode: "block" | "inline"
//       plugins: [Block],
//     }),
//   },
// });

ReactRuntime.registerComponent(DivTest, {
  type: "div-test",
  label: "Div Test",
  props: {
    className: Style({ properties: Style.All }),
  },
});
