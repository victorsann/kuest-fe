import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
    gap: 20px;
    border-radius: 5px;
    padding-left: 10%;
    background-color: ${(props) => props.backgroundColor};
`;

export const ReplyContainer = styled.div<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border-radius: 5px;
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
    font-size: 13px;
    padding-left: 2px;
    color: ${(props) => props.color};
`;

//  Text input style

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

