import * as React from "react"
import { HelloWorld } from "."
import { Meta, Story } from "@storybook/react/types-6-0"
const meta: Meta = {
	component: HelloWorld,
	title: "HelloWorld"
}
export default meta
const Template: Story = ({
	options
}) => {
	return (
		<HelloWorld/>
	)
}
export const Default: Story = Template.bind ({})
Default.args = {}