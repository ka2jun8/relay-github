import { graphql, useMutation } from "react-relay";
import { IssueButtonMutation } from "./__generated__/IssueButtonMutation.graphql";

const IssueMutation = graphql`
  mutation IssueButtonMutation($repositoryId: ID!) {
    createIssue(
      input: {
        repositoryId: $repositoryId
        title: "Sample Title"
        body: "Body Sample"
      }
    ) {
      issue {
        id
      }
    }
  }
`;

type Props = {
  repositoryId: string;
};

export const IssueButton: React.FC<Props> = ({ repositoryId }) => {
  const [commitMutation, isMutationInFlight] =
    useMutation<IssueButtonMutation>(IssueMutation);

  return (
    <button
      onClick={() =>
        commitMutation({
          variables: { repositoryId },
          updater: (store) => {
            const data = store.get(repositoryId);
            if (data != null) {
              data.invalidateRecord();
            }
          },
        })
      }
      disabled={isMutationInFlight}
    >
      Add Issue
    </button>
  );
};
