import {
  Style,
  ControlDefinitionData,
  Select,
  StyleV2CSSObject,
  unstable_RichTextV2,
  unstable_StyleV2,
  List,
  Number,
  Shape,
  TextInput,
} from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";
import { BlockPlugin, TextAlignPlugin } from "@makeswift/runtime/slate";

import { ForwardedRef, forwardRef } from "react";

/**
 * RichTextV2
 */

const RichTextV2 = forwardRef(function HelloWorld(
  { nodes, node, node2, image, className, textAlignDefinition, ...props }: any,
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
      {JSON.stringify(textAlignDefinition)}
    </div>
  );
});

ReactRuntime.registerComponent(RichTextV2, {
  type: "richtext-v2",
  label: "RichText V2",
  props: {
    className: Style({ properties: Style.Default }),

    node: unstable_RichTextV2({ plugins: [BlockPlugin(), TextAlignPlugin()] }),
  },
});

/**
 * StyleV2
 */

const StyleV2Test = forwardRef(function HelloWorld(
  {
    className,
    className2,
    className3,
    ...props
  }: {
    className?: string;
    className2?: StyleV2CSSObject | string;
    className3?: string;
  },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={`${className} ${className2} ${className3}`}
      style={{ padding: "20px", width: "500px" }}
      {...props}
    >
      Hello World
    </div>
  );
});

const textAlignDefinition = Select({
  options: [
    {
      label: "Left",
      value: "left",
    },
    {
      label: "Center",
      value: "center",
    },
    {
      label: "Right",
      value: "right",
    },
  ],
  defaultValue: "left",
});

const listOfNumbers = List({
  type: Shape({
    type: {
      xOffset: Number(),
      yOffset: Number(),
      blur: Number(),
      color: TextInput(),
    },
  }),
});

ReactRuntime.registerComponent(StyleV2Test, {
  type: "StyleV2Test",
  label: "StyleV2 Test",
  props: {
    className: Style({ properties: Style.All }),
    className2: unstable_StyleV2({
      type: textAlignDefinition,
      getStyle(textAlign: ControlDefinitionData<typeof textAlignDefinition>) {
        return { textAlign: textAlign ?? "left" };
      },
    }),
    className3: unstable_StyleV2({
      type: listOfNumbers,
      getStyle(numbers: ControlDefinitionData<typeof listOfNumbers> = []) {
        return {
          boxShadow: numbers
            .map((shadow) => {
              return `${shadow?.value?.xOffset ?? 0}px ${
                shadow?.value?.yOffset ?? 0
              }px ${shadow?.value?.blur ?? 0}px ${
                shadow?.value?.color ?? "red"
              }`;
            })
            .join(","),
        };
      },
    }),
  },
});
