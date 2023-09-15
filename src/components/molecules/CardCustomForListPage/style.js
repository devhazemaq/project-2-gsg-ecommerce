"use client";

import { theme } from "@/styles/theme";
import { styled } from "styled-components";

// -s------ StyleWaper ------
export const StyleWaper = styled.div`
  margin-top: 2.3rem;
  min-height: 800px;
`;
// -e------ StyleWaper ------

export const StyleMainForListHoriz = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  ${(props) =>
    props.$variantdirc === "horizontal" &&
    `


    .style__contain__card{
      display: flex;      
      gap: 25px;
      justify-content: space-between;
      border: 1px solid ${theme.colors.colorGray300};
      border-radius: 3px;
      margin-bottom: 7px;
    
    }


    .img__contain{
      display: flex;
      width: 194px;
      height: 197px;
      flex-direction: column;
      justify-content: center;
      img{
        // width: fit-content;
        // height: fit-content;

      }
    }

    // -s---------------contain__details__product----------------

    .contain__details__product {

      display: flex;
      flex-direction: column;
      height: 200px;
      row-gap: 13px;
      justify-content: center;
      
      

      .for__price {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        del {
          color: ${theme.colors.colorFtGray500}
        }
      }

      // -s--------------- Stars & order num & free Shippng ----------------     
 
      .valuable__information{
        display: flex;
        gap: 12px;

        .for__stars__rate {
          width: 112px;
          height: 15px;
          display: flex;
          gap: 6px;

          .number__rate{
            color: ${theme.colors.colorOrange}
          }
        }

        .for__orders {
          display: flex;
          align-items: center;
          column-gap: 6px;

          .small__circle{
            width: 6px;
            height: 6px;
            border-radius: 50%;
            display: block;
            background: ${theme.colors.colorGray300};
          }
          
          p{
            color: ${theme.colors.colorFtGray500}
          }
        }

        .free_chipping {
          display: flex;
          align-items: center;
          column-gap: 6px;

          .small__circle {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            display: block;
            background: ${theme.colors.colorGray300};
          }
          p {
            color: ${theme.colors.colorGreen}
          }
        }

      }
      // -e--------------- Stars & order num & free Shippng ----------------     


      // -s---------------pouduct__desc----------------

      .pouduct__desc {

        
        p{
          color: ${theme.colors.colorFtGray600}
        }
        p:first-of-type {
          padding-bottom: 7px;
        }
      }
      // -e---------------pouduct__desc----------------

      // -s---------------view details----------------  

      .for__view__details {
        cursor: pointer;

        p{
          color: ${theme.colors.colorDarkBlue}
        }
      }
      // -e---------------view details----------------  


    }
    // -e---------------contain__details__product----------------

    .contain__img__fovorite{
      width: fit-content;
      height: 42px;
      background: ${theme.colors.backgroundWhite};
      padding: 8px;
      border: 1px solid ${theme.colors.colorGray300};
      border-radius: 6px;
      
      position: relative;
      top: 11px;
      right: 12px;

      .favorite_img {
        // margin: 8px;
      }
    }
    

  `};
`;

export const StyleMainForListVert = styled.div`
  /* =================vertical================= */
  display: flex;
  gap: 6px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;

  ${(props) =>
    props.$variantdirc === "vertical" &&
    `
    
    
    .v__style__contain__card{
      background: ${theme.colors.backgroundWhite};
      width: 276px;
      height: 401px;
      border: 1px solid ${theme.colors.colorGray300};
      cursor: pointer;

    }

    .v__img__contain{
      display: flex;
      justify-content: center;
      padding-top: 13px;    
  
    }

    // -s---------------contain__details__product----------------
    
    .v__contain__details__product {
      position: relative;
      margin-top: 35px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .v__kawaki {
        display: flex;
        justify-content: center;
        padding-top: 13px;
        flex-direction: column;
        gap: 7px;

      }

      
      .v__for__price {
        display: flex;
        align-items: center;
        gap: 10px;

        del {
          color: ${theme.colors.colorFtGray500}
        }

      }

      .v__valuable__information {

        .v__for__stars__rate {
          display: flex;
          gap: 8px;


        }
      }

      .v__pouduct__desc{
        p{
          color: ${theme.colors.colorFtGray600}
        }
        p:first-of-type {
          padding-bottom: 7px;
        }
      }

      .v__contain__img__fovorite{
        position: relative;
        top: 11px;
        width: fit-content;
        height: 42px;
        background: ${theme.colors.backgroundWhite};
        padding: 8px;
        border: 1px solid ${theme.colors.colorGray300};
        border-radius: 6px;
          
      }

    background

  `}
`;
