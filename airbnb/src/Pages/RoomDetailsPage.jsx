import Star from "@material-ui/icons/Star";
import styled from "styled-components";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";
import { Container, makeStyles } from "@material-ui/core";
import { IoShareOutline } from 'react-icons/io5';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useStyle = makeStyles({
  pink_icon: {
    color: "rgb(239,78,89)",
  },
});

const NameCont = styled.div`
  & > div:nth-of-type(1) {
    text-align: left;
    & > div {
      display: flex;
      justify-content: space-between;
      & > div:nth-of-type(1){
        display: flex;
      align-items: center;
      justify-content: space-around;
      width: 430px;
      }
      & > div:nth-of-type(1)>div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
export function RoomDetailsPage() {
  const classes = useStyle();
  return (
    <>
      <Container>
        <NameCont>
          <div>
            <h2>Xavier's Guest House Standard Classic Room</h2>
            <div>
              <div>
                <div>
                  <Star className={classes.pink_icon} />
                  4.85{" "}
                  <span style={{ color: "grey", textDecoration: "underline" }}>
                    {" "}
                    (150 reviews){" "}
                  </span>
                </div>{" "}
                .
                <div>
                  <FiberManualRecordSharpIcon className={classes.pink_icon} />{" "}
                  <span style={{ color: "grey" }}> Superhost </span>
                </div>{" "}
                .
                <div style={{ color: "grey", textDecoration: "underline" }}>
                  {" "}
                  <p> Anjuna, Goa, India</p>
                </div>
              </div>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", width:"145px"}}><IoShareOutline/> <span style={{textDecoration:"underline"}}>Share</span>  <FavoriteBorderIcon/> <span style={{textDecoration:"underline"}}>Save</span> </div>
            </div>
            <div></div>
          </div>
        </NameCont>
      </Container>
    </>
  );
}
