import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const WraperHero = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 13px;
    border: 1px solid ${theme.colors.colorGrayForBorder};

    margin: 1.3rem 0 ;

  .hero__part__rhgit {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
`;