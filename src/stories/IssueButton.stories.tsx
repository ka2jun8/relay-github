import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { RelayEnvironmentProvider } from "react-relay";
import { IssueButton } from "../components/IssueButton";

export default {
  title: "Example/IssueButton",
  component: IssueButton,
} as ComponentMeta<typeof IssueButton>;

const env = createMockEnvironment();

const Template: ComponentStory<typeof IssueButton> = (args) => (
  <RelayEnvironmentProvider environment={env}>
    {/** https://github.com/storybookjs/storybook/issues/14265 */}
    {/* <Suspense fallback="loading..."> */}
    <IssueButton repositoryId="test-id" />
    {/* </Suspense> */}
  </RelayEnvironmentProvider>
);

export const Primary = Template.bind({});

Primary.args = {};
