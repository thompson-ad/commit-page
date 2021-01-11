import styled from "@emotion/styled";
import * as colors from "../styles/colors";

export const Avatar = styled.img({
    height: 51,
    width: 51,
});

export const CommitMessage = styled.h1({
    fontSize: 16,
});

export const MetaInfo = styled.p({
    fontWeight: 400,
    fontSize: 14,
    color: colors.mutedColor,
});

export const Name = styled.span({
    fontWeight: 600,
    color: colors.bodyColor,
});
