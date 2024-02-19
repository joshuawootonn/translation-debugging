import {
  Slot, TextInput,
} from "@makeswift/runtime/controls";

import React, {ReactNode} from "react";
import Link from "next/link";
import {runtime} from "./runtime";



function Box1({children}: { children: ReactNode } ) {
  return <div className={'w-full p-8'}>{children}</div>
}


runtime.registerComponent(Box1, {
  type: "server-box",
  label: "Server",
  props: {
    children: Slot(),
  },
})
runtime.registerComponent(Box1, {
  type: "client-box",
  label: "Client",
  props: {
    children: Slot(),
  },
})

function MyLink({href, children}: { href?: string, children?: string }) {
  return <div className={'flex'}>
    <Link className={'px-3 py-1 border-1 border-black'} locale={'fr-FR'} href={href ?? ''}>French {children}</Link>
    <Link className={'px-3 py-1 border-1 border-black'} locale={'en-US'} href={href??''}>English {children}</Link>
  </div>
}

runtime.registerComponent(MyLink, {
  type: "link",
  label: "Link",
  props: {
    href: TextInput(),
    children: TextInput(),
  },
})