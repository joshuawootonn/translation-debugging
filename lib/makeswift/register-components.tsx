import {
  Style,
  unstable_RichTextV2,
  unstable_StyleV2,
  List,
  Number,
  Shape,
  Color,
  Link,
  RichText,
} from "@makeswift/runtime/controls";
import { ControlDefinitionValue } from "@makeswift/runtime/dist/types/src/runtimes/react/controls/control";
import { ReactRuntime } from "@makeswift/runtime/react";
import {
  BlockPlugin,
  InlinePlugin,
  LinkPlugin,
  TextAlignPlugin,
  TypographyPlugin,
} from "@makeswift/runtime/slate";

import { ForwardedRef, forwardRef, ReactNode } from "react";

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

    node: unstable_RichTextV2({
      plugins: [
        TypographyPlugin(),
        BlockPlugin(),
        TextAlignPlugin(),
        // ColorPlugin(),
        InlinePlugin(),
        LinkPlugin(),
      ],
    }),
  },
});

const InlineMode = forwardRef(function HelloWorld(
  { node, ...props }: any,
  ref
) {
  return (
    <button ref={ref} {...props}>
      {node}
    </button>
  );
});

ReactRuntime.registerComponent(InlineMode, {
  type: "inline-mode-test",
  label: "Inline Mode Test",
  props: {
    className: Style({ properties: Style.Default }),

    node: unstable_RichTextV2({
      mode: "makeswift::controls::rich-text-v2::mode::inline",
      // plugins: [
      //   TypographyPlugin(),
      //   BlockPlugin(),
      //   TextAlignPlugin(),
      //   // ColorPlugin(),
      //   InlinePlugin(),
      //   LinkPlugin(),
      // ],
    }),
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
    className4,
    fontSize,
    ...props
  }: {
    className?: string;
    className2?: string;
    className3?: string;
    className4?: string;
    fontSize?: number;
  },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={`${className} ${className2} ${className3} ${className4}`}
      style={{ padding: "20px", fontSize: `${fontSize ?? 20}px` }}
      {...props}
    >
      Hello World
    </div>
  );
});

const backgroundDefinition = Color({
  label: "bg",
});

const colorShapeDefinition = Shape({
  type: {
    border: Color({ label: "border" }),
    text: Color({ label: "text" }),
  },
});

ReactRuntime.registerComponent(StyleV2Test, {
  type: "StyleV2Test",
  label: "StyleV2 Test",
  props: {
    shape: Shape({
      type: {
        border: Color({ label: "border" }),
        text: Color({ label: "text" }),
      },
    }),
    className2: unstable_StyleV2({
      type: backgroundDefinition,
      getStyle(color: ControlDefinitionValue<typeof backgroundDefinition>) {
        return { backgroundColor: color ?? "grey" };
      },
    }),
    className3: unstable_StyleV2({
      type: colorShapeDefinition,
      getStyle(colors: ControlDefinitionValue<typeof colorShapeDefinition>) {
        return {
          color: colors?.text ?? "black",
          border: `4px solid ${colors?.border ?? "black"}`,
        };
      },
    }),

    // className4: unstable_StyleV2({
    //   type: boxShadowDefinitions,
    //   getStyle(
    //     boxShadowNumbers: ControlDefinitionValue<typeof boxShadowDefinitions>
    //   ) {
    //     if (boxShadowNumbers == null) {
    //       return {};
    //     }
    //     // console.log({
    //     //   boxShadowNumbers,
    //     //   style: {
    //     //     boxShadow: `${boxShadowNumbers?.at(0)}px ${boxShadowNumbers?.at(
    //     //       0
    //     //     )}px ${boxShadowNumbers?.at(0)}px purple;`,
    //     //   },
    //     // });

    //     return {
    //       boxShadow: boxShadowNumbers
    //         .map(
    //           (boxShadow) =>
    //             `${boxShadow?.x}px ${boxShadow?.y}px ${boxShadow?.blur}px ${boxShadow.color}`
    //         )
    //         .join(","),
    //     };
    //   },
    // }),
  },
});

const TypographyTest = forwardRef(function HelloWorld(
  {
    className,
    className2,
    ...props
  }: {
    className?: string;
    className2?: string;
  },
  ref: ForwardedRef<HTMLDivElement>
) {
  // console.log({ className2 });

  return (
    <div
      ref={ref}
      className={`${className} ${className2}`}
      style={{ padding: "20px" }}
      {...props}
    >
      Hello World
    </div>
  );
});

ReactRuntime.registerComponent(TypographyTest, {
  type: "TypographyTest",
  label: "Typography Test",
  props: {
    className: Style({ properties: [Style.Width, Style.Margin] }),
    // className2: unstable_Typography(),
  },
});

const LinkInShapeTest = forwardRef(function HelloWorld(
  {
    className,
    links,
    ...props
  }: {
    className?: string;
    links?: any;
  },
  ref: ForwardedRef<HTMLDivElement>
) {
  // console.log({ className2 });
  // console.log({ links });

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{ padding: "20px" }}
      {...props}
    >
      {JSON.stringify(links)}
    </div>
  );
});

ReactRuntime.registerComponent(LinkInShapeTest, {
  type: "LinkInShapeTest",
  label: "LinkInShapeTest",
  props: {
    className: Style({ properties: [Style.Width, Style.Margin] }),
    links: Shape({
      type: {
        link1: Link(),
        link2: Link(),
      },
    }),
  },
});

const RichtextUpgrade = forwardRef(function HelloWorld(
  {
    className,
    richtext,
    ...props
  }: {
    className?: string;
    richtext?: ReactNode;
  },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className={className} style={{ padding: "20px" }} {...props}>
      {richtext}
    </div>
  );
});

ReactRuntime.registerComponent(RichtextUpgrade, {
  type: "rich-text-v1",
  label: "rich-text-component",
  props: {
    // richtext: RichText(),
    richtext: unstable_RichTextV2({
      plugins: [
        TypographyPlugin(),
        BlockPlugin(),
        TextAlignPlugin(),
        InlinePlugin(),
        LinkPlugin(),
      ],
    }),
    className: Style({ properties: [Style.Width, Style.Margin] }),
  },
});
