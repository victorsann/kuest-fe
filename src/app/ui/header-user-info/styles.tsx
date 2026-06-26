import styled from "styled-components";

export const ProfilePicture = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50px;
    overflow: auto;
`;

export const UserName = styled.text<{ color: string }>`
    font-size: 15px;
    color: ${(props) => props.color};
`;