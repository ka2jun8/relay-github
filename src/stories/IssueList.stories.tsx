import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IssueList } from "../components/IssueList";
import { graphql, useLazyLoadQuery } from "react-relay";
import { IssueListTestQuery } from "./__generated__/IssueListTestQuery.graphql";
import { RelayMockProvider } from "../relay/RelayMockProvider";

export default {
  title: "Example/IssueList",
  component: IssueList,
} as ComponentMeta<typeof IssueList>;

const TestRenderer: React.FC = () => {
  const data = useLazyLoadQuery<IssueListTestQuery>(
    graphql`
      query IssueListTestQuery @relay_test_operation {
        repository(owner: "sample", name: "sample") {
          id
          name
          ...IssueList_issues @arguments(state: OPEN)
        }
      }
    `,
    {}
  );

  if (!data.repository) {
    return <span>loading...</span>;
  }

  return (
    <IssueList
      repository={data.repository}
      state="OPEN"
      onChangeIssueState={() => {}}
    />
  );
};

const Template: ComponentStory<typeof IssueList> = (args) => {
  return (
    <RelayMockProvider
      mockResolvers={{
        Repository() {
          return {
            id: "test-id",
            name: "sample",
          };
        },
        Issue(_, gen) {
          const id = gen();
          return {
            id: id.toString(),
            title: "title-" + id,
          };
        },
      }}
    >
      <TestRenderer />
    </RelayMockProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
