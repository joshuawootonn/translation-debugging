import {
  Style,
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

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function MyDisclosure({ className, richtextButton, richtextPanel }: any) {
  return (
    <Disclosure as="div" className={className}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-bold text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span className="flex-grow">{richtextButton}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
            {richtextPanel}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

ReactRuntime.registerComponent(MyDisclosure, {
  type: "disclosure",
  label: "Disclosure",
  props: {
    richtextButton: RichText({
      mode: RichText.Mode.Inline,
    }),
    richtextPanel: RichText(),
    className: Style({ properties: Style.All }),
  },
});

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

    node: RichText(),
  },
});

const InlineMode = forwardRef(function HelloWorld(
  { node, className, ...props }: any,
  ref
) {
  return (
    <button
      className={`${className} text-3xl font-bold  bg-gray-200 px-3 py-2 rounded-xl`}
      ref={ref}
      {...props}
    >
      {node}
    </button>
  );
});

ReactRuntime.registerComponent(InlineMode, {
  type: "inline-mode-test",
  label: "Inline Mode Test",
  props: {
    className: Style({ properties: [Style.Margin] }),

    node: RichText({
      mode: RichText.Mode.Inline,
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
    richtext: RichText(),
    className: Style({ properties: [Style.Width, Style.Margin] }),
  },
});
