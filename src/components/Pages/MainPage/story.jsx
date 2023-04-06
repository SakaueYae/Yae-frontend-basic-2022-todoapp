import React from "react";
import Component from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";

export default {
  component: Component,
  title: "Pages/MainPage",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
