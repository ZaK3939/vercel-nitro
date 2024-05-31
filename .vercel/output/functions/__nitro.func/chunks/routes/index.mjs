import { e as eventHandler } from '../runtime.mjs';
import { ImageResponse } from '@vercel/og';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';

const index = eventHandler((event) => {
  return new ImageResponse(
    /* @__PURE__ */ h(
      "div",
      {
        style: {
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center"
        }
      },
      "\u{1F44B} Hello"
    ),
    {
      width: 1200,
      height: 630
    }
  );
});

export { index as default };
//# sourceMappingURL=index.mjs.map
