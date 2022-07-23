import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
  cursor: pointer;

  color: ${(props) => props.theme.color.dark400};
  &:hover {
    color: ${(props) => props.theme.color.dark700};
  }

  font-size: ${(props) => {
    switch (props.fontSize) {
      case "small":
        return props.theme.fontSize.small;
      case "regular":
        return props.theme.fontSize.regular;
      case "large":
        return props.theme.fontSize.large;
      default:
        return props.theme.fontSize.small;
    }
  }};

  ${(props) =>
    props.dropDown &&
    `
&::after {
    content: url("data:image/svg+xml,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23696969' stroke-width='1.5' fill='none' d='m1 1 4 4 4-4'/%3E%3C/svg%3E");

    margin-left: 0.5rem;
  }
`}
  &:hover {
    ${(props) =>
      props.dropDown &&
      `
&::after {
    content: url("data:image/svg+xml,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23141414' stroke-width='1.5' fill='none' d='m1 5 4-4 4 4'/%3E%3C/svg%3E");
  }
`}
  }
`;

// Button Setup

export function Button(props) {
  return (
    <ButtonWrapper>
      <a href={props.href ? props.href : "#"}>
        <button>{props.text}</button>
      </a>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  button {
    cursor: pointer;

    background-color: transparent;
    border-radius: ${(props) => props.theme.spacing.xSmall};
    padding-top: ${(props) => props.theme.spacing.xxSmall};
    padding-bottom: ${(props) => props.theme.spacing.xxSmall};
    padding-left: ${(props) => props.theme.spacing.small};
    padding-right: ${(props) => props.theme.spacing.small};

    color: ${(props) => props.theme.color.dark400};
    border-color: ${(props) => props.theme.color.dark400};
    &:hover {
      color: ${(props) => props.theme.color.dark700};
      border-color: ${(props) => props.theme.color.dark700};
    }
  }
`;
