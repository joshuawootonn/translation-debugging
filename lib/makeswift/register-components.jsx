import {
  Slot,
  Style,
  RichText,
  Image,
  TextInput,
  RichTextV2,
  RichTextControlTypeV2,
  Select,
  BlockType,
} from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";
import { Block } from "@makeswift/runtime/slate";

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
      <div style={{ height: "100px" }}></div>
      <div style={{ minWidth: "200px" }}>{body}</div>
    </div>
  );
});

const OneInput = forwardRef(function HelloWorld(
  { node, image, className, ...props },
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
      {node}
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
    className: Style({ properties: Style.Default }),
    node: RichTextV2({
      controls: [
        Select({
          label: "Inline",
          options: [
            {
              value: "code",
              label: "Code",
            },
            {
              value: "superscript",
              label: "Super",
            },
          ],
        }),
      ],
      plugins: [
        {
          binding: {
            onChange: (editor, value) => {
              Block.wrapInline(editor, {
                type: value,
                children: [],
              });
            },
            value: (editor) => {
              return Block.getInlinesInSelection(editor)
                .map((inline) => inline[0].type)
                .at(0);
            },
          },
        },
      ],
    }),
  },
});

ReactRuntime.registerComponent(DivTest, {
  type: "div-test",
  label: "Div Test",
  props: {
    className: Style({ properties: Style.All }),
  },
});
