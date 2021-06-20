import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "../src";
const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      control: {
        type: 'text',
      }
    },
    leftIcon: {
      control: {
        type: 'element'
      }
    },
    rightIcon: {
      control: {
        type: 'element'
      }
    }
  },
  parameters: {
    controls: { expanded: true },
  },
}

const LeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
  </svg>
)
const RightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
  </svg>
)


export default meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const SCButton = Template.bind({});
SCButton.args = { text: 'Button' }

export const LeftIconButton = Template.bind({});
LeftIconButton.args = { text: 'Button', leftIcon: <LeftIcon /> }

export const RightIconButton = Template.bind({});
RightIconButton.args = { text: 'Button', rightIcon: <RightIcon /> }