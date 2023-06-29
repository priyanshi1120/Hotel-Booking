import styled from "styled-components";
export const Fromtocss = styled.div`
  height: 85px;
  width: 95%;
  margin: 20px auto;
  border: 1px solid #d4d0d0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
    width: 90%;
  }

  .fromtodiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      height: auto;
    }
  }

  h3 {
    position: relative;
    top: -29px;
    left: 12px;
    font-size: 16px;
    font-weight: 500;
  }

  .fromtodiv div {
    border-right: 1px solid #d4d0d0;
    height: 100%;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid #d4d0d0;
      height: auto;
    }
  }

  .fromtodiv select,
  .fromtodiv input[type="date"] {
    padding: 4%;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    border: none;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";

    @media (max-width: 768px) {
      top: 0;
      transform: none;
    }
  }

  .fromtodiv2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      height: auto;
    }
  }

  .date {
    border: none;
    font-size: 16px;
    margin-left: 10px;
  }

  .fromtodiv2 div {
    border-right: 1px solid #d4d0d0;
    height: 100%;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid #d4d0d0;
      height: auto;
    }
  }

  .fromtodiv2 select {
    padding: 10%;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    border: none;
    position: relative;
    transform: translateY(-50%);
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }

  // Additional Styles for Responsiveness and Centering
  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    .fromtodiv {
      grid-template-columns: 1fr;
    }

    .fromtodiv2 {
      grid-template-columns: 1fr;
    }

    .fromtodiv select,
    .fromtodiv input[type="date"],
    .fromtodiv2 select {
      padding: 6%;
    }
  }
`;
