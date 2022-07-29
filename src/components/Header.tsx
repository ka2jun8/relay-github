import { useFragment, useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { Header_viewer$key } from "./__generated__/Header_viewer.graphql";

const fragment = graphql`
  fragment Header_viewer on User {
    name
  }
`;

type Props = { viewer: Header_viewer$key };

export const Header: React.FC<Props> = ({ viewer }) => {
  const data = useFragment(fragment, viewer);

  if (!data) {
    return null;
  }

  return <header>username: {data.name} </header>;
};
