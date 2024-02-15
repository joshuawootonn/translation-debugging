import {
  Slot,
} from "@makeswift/runtime/controls";
import {ReactRuntime} from "@makeswift/runtime/react";

import React, {ReactNode} from "react";

export const runtime = new ReactRuntime()


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
