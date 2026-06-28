import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
    display: grid;
    gap: 12px;
    border-radius: 5px;
    padding: 20px;
    background-color: ${(props) => props.backgroundColor};
`;

export const ProfilePicture = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50px;
    overflow: auto;
`;

export const UserName = styled.text<{ color?: string }>`
    font-size: 12px;
    color: ${(props) => props.color};
`;

export const CommentDate = styled.text<{ color?: string }>`
    font-size: 12px;
    color: ${(props) => props.color};
`;

export const CommentText = styled.text<{ color?: string }>`
    display: flex;
    align-items: center;
    height: 20px;
    font-size: 13px;
    padding-left: 2px;
    color: ${(props) => props.color};
`;

// Text input style

export const TextStyleOption = styled.text<{
    color?: string,
    fontStyle?: string,
    fontWeight?: string,
    textDecoration?: string,
}>`
    font-size: 13px;
    font-style: ${(props) => props.fontStyle};
    font-weight: ${(props) => props.fontWeight};
    text-decoration: ${(props) => props.textDecoration};
    color: ${(props) => props.color};
    &:hover {
        cursor: pointer;
    }
`;

