import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: ["prerequisites", "installation", "core-concepts"],
  components: [
    {
      type: "category",
      label: "Components",
      collapsible: false,
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Layout",
          link: {
            type: "generated-index",
          },
          items: ["layout/stack"],
        },
        {
          type: "category",
          label: "Forms",
          link: {
            type: "generated-index",
          },
          items: [
            "forms/button",
            "forms/checkbox",
            "forms/input",
            "forms/radio",
            "forms/select",
            "forms/slider",
            "forms/textarea",
          ],
        },
        {
          type: "category",
          label: "Data Display",
          link: {
            type: "generated-index",
          },
          items: ["data-display/badge", "data-display/card"],
        },
        {
          type: "category",
          label: "Typography",
          link: {
            type: "generated-index",
          },
          items: ["typography/heading", "typography/text"],
        },
      ],
    },
  ],
};

export default sidebars;
